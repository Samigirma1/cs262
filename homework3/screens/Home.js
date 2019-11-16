/**
 * This file defines defines the home-screen the lets the user navigate 
 * to the add and list views
 *
 * Name: Samuel Zeleke
 * For CS 262-L
 * Homework 3
 * Due Nov 8, 2019
 *
 */
import React, { Component } from 'react';
import { Button, Dimensions, View, StatusBar, Text } from 'react-native';

/**
 * Defines the Layout of the homescreen
 */
export default class Home extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'black',
          height: Dimensions.get('window').height,
        }}>
        <Button
          title="Add an Item"
          color="#C25800"
          onPress={() => this.props.navigation.navigate('AddItem')}
        />
        <Button
          title="List of Items"
          color="#E1AE00"
          style={{
            borderRadius: 0,
            height: Dimensions.get('window').height * 0.5,
          }}
          onPress={() => this.props.navigation.navigate('List')}
        />
      </View>
    );
  }
}
