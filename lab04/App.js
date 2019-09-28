/*****************************************************
 * Samuel Zeleke sgz4@students.calvin.edu
 * CS262B - Lab04 - Sept 27
 * App.js
 *****************************************************/
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Button } from 'react-native-elements';
// You can import from local files
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
    this.state = { echoText: 'Type Something' };
  }

  /*Change the text in parent component
   *
   *@param props properties accepted at declaration
   */
  changeRoot = text => {
    this.setState({ echoText: text });
  };
  /*renders component   */

  render() {
    return (
      //Main View
      <View style={styles.container}>
        //Displays the user's input
        <Text style={styles.paragraph}>{this.state.echoText}</Text>
        //Takes input from user
        <Card>
          <AssetExample cat={this.changeRoot} />
        </Card>
      </View>
    );
  }
}

//Styles for Views and Components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
