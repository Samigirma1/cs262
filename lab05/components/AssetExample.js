/*****************************************************
 * Samuel Zeleke sgz4@students.calvin.edu
 * CS262B - Lab05 - Oct 8
 * App.js
 *****************************************************/


import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import {Button} from 'react-native-elements';

/*
 * @author Samuel Zeleke sgz4@students.calvin.edu
 * @version 1.0
 *
 * AssetExample is a resuable component that Contains a card, a text, 
 * an image, and a button the inverts the color
 *
 */
export default class AssetExample extends React.Component {
  /*Function accepts props from parent component
   *and sets the default states
   *
   *@param props properties accepted at declaration
   */
  constructor(props) {
    super(props);
    this.state = {
      backgroundC: this.props.bgcolor,
      textC: this.props.textColor,
      buttonC: this.props.buttonColor
    };
  }

  /*Function inverts the colors of the items in components with-in the
   *the AssetExample component
   *
   *@param
   */
  invertColor = () =>{
    if (this.state.backgroundC == "black"){
      this.setState({
        backgroundC: "white",
        textC: "black",
        buttonC: "#ff57a5"
      })
    }
    else {
      this.setState({
        backgroundC: "black",
        textC: "white",
        buttonC: "#80ffa2"
      })
    }
  }

  /* Renders the component*/
  render() {
    return (
      //Card containing sub-components
      <Card>

        {/*View Containing Text and image*/}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            backgroundColor: this.state.backgroundC,
          }}>

          {/*Text sub-component*/}
          <Text
            style={{
              margin: 24,
              marginTop: 0,
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: 'center',
              color: this.state.textC,
            }}>
            {this.props.text}
          </Text>

          {/*Image sub-component*/}
          <Image
            style={styles.logo}
            source={require('../assets/snack-icon.png')}
          />
        </View>

        {/*Button that inverts the color of the images*/}
        <Button
        type = "solid" 
        onPress={() => this.invertColor()}
        color = "red"
        buttonStyle = {{backgroundColor: this.state.buttonC}} 
        title= "invert color of componenet" />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 128,
    width: 128,
  },
});
