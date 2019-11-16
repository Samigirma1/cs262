/*
This file defines Item compoenent that would be used to display 
items in the database.

Name: Samuel Zeleke
For CS 262-L
Homework 3
Due Nov 8, 2019

 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Defines the layout of the lits Items that would be used to display 
 * items in the Database
 * 
 */
export default class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  /**
   * Renders ItemComponent using the props provided by a screen component.
   */
  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.itemtext}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  itemtext: {
    fontSize: 20,
    color: '#E1AE00',
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
