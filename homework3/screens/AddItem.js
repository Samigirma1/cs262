/**
 * This file defines Screen that lets the user add an item to the
 * database.
 *
 * Name: Samuel Zeleke
 * For CS 262-L
 * Homework 3
 * Due Nov 8, 2019
 *
 */

import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  AlertIOS,
} from 'react-native';

import { db } from '../config';

let addItem = item => {
  db.ref('/items').push({
    name: item,
  });
};

/**
 * Defines Add Item screen
 */
export default class AddItem extends Component {
  state = {
    name: '',
  };

  /**
   * Handles change text event in TextInput
   * @param e - a event ChangeText marker
   *
   */
  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text,
    });
  };

  /**
   * Handles button press event marking the ened of a program
   * @param e - a event ChangeText marker
   *
   */
  handleSubmit = () => {
    addItem(this.state.name);
    AlertIOS.alert('Item saved successfully');
  };

  /**
   * Renders Screen
   */
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Item</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

/**
 * Styles contains the styling properties of all elements in the code
 * main - contains styling for the root view component.
 * title - title style
 * itemInput - defines the style of the textInput
 * buttonText - defines the style of text used to label the button
 * button - button container style
 * 
 */
const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#6565fc',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
