/*****************************************************
 * Samuel Zeleke sgz4@students.calvin.edu
 * CS262B - Lab05 - Oct 4
 * App.js
 *****************************************************/
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-elements';

// Imports reusable components
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

/*
 * @author Samuel Zeleke sgz4@students.calvin.edu
 * @version 1.0
 *
 * App class defines the root app component. It contains
 * a state for displaying the users input
 *
 */
export default class App extends React.Component {
  /*Function accepts props from parent component
   *and sets the default states
   *
   *@param props properties accepted at declaration
   */
  constructor(props) {
    super(props);
    this.state = {
      bgColor: '#ecf0f1',
      textColor: 'black',
      firstCardbgColor: 'black',
      secondCardbgColor: 'white',
      firstCardTextColor: 'white',
      secondCardTextColor: 'black',
      firstCardButtonColor: "#80ffa2",
      secondCardButtonColor: "#ff57a5"
    };
  }
  /*renders component*/
  render() {
    return (
      //Scrollable Main View
      <ScrollView
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingTop: Constants.statusBarHeight,
          backgroundColor: this.state.bgColor,
          padding: 10,
        }}>

        {/*Title for the app*/} 
        <Text
          style={{
            margin: 24,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: this.state.textColor,
          }}>
          
          Samuel Zeleke - CS262-B
          Lab05: Reusable Components
        </Text>

        {/*First Use of Reusable Component*/}        
        <AssetExample
          text="First Instance of AssetExample Component"
          bgcolor={this.state.firstCardbgColor}
          textColor={this.state.firstCardTextColor}
          buttonColor = {this.state.firstCardButtonColor}
        />
        
        {/*Second Use of Reusable Component*/}
        <AssetExample
          text="Second Instance of AccentExample Component"
          bgcolor={this.state.secondCardbgColor}
          textColor={this.state.secondCardTextColor}
          buttonColor = {this.state.secondCardButtonColor}
        />
      </ScrollView>
    );
  }
}
