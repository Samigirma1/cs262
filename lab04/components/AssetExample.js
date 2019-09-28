/*****************************************************
 * Samuel Zeleke sgz4@students.calvin.edu
 * CS262B - Lab04 - Sept 27
 * AssertExample.js
 *****************************************************/
import * as React from 'react';
import { TextInput, Text, View, StyleSheet, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';

/*
 * @author Samuel Zeleke sgz4@students.calvin.edu
 * @version 1.0
 *
 * Assetexample class defines the component of App.js. It contains
 * a state for accepting user's input
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
      tempCont: '',
    };
  }
  /*Function sets tempCont to the user's input
   *
   *@param val cotains the users input
   */
  onChangeText1 = val => {
    this.setState({ tempCont: val });
  };
  /*Function pushes tempCont to parent Component
   */
  onSubmit = () => {
    this.props.cat(this.state.tempCont);
    this.setState({ tempCont: '' });
  };

  /* renders component*/
  render() {
    return (
      <View style={styles.container}>
        <Input
          inputContainerStyle={{ alignContent: 'center' }}
          placeholder="..."
          value={this.state.tempCont}
          onChangeText={text => this.onChangeText1(text)}
        />
        <Button
          buttonStyle={{
            textColor: 'red',
          }}
          type="Outline"
          title="Submit"
          onPress={() => this.onSubmit()}
        />
      </View>
    );
  }
}
//Styling for component Views
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
