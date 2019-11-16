/**
 * This file defines the navigation between screens
 *
 * Name: Samuel Zeleke
 * For CS 262-L
 * Homework 2
 * Due Nov 1, 2019
 *
 */

import React from 'react';
import { Button, View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/**
 * defines the layout of the homescreen
 */
class HomeScreen extends React.Component {
  /**
   * Defines the top navigation options
   */
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#2ECC71',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button
        title="Chats"
        onPress={() => this.props.navigation.navigate('Chats')}
        color="white"
      />
    ),
    headerLeft: (
      <Button title="Toast" onPress={() => alert('Toast!')} color="white" />
    ),
  };

  /**
   * Renders homescreen
   */
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

/**
 * defines the layout of the detailed screen
 */
class DetailsScreen extends React.Component {
  /**
   * Defines the top navigation options
   */
  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: '#FF5C27',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  /**
   * Renders homescreen
   */
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello! Welcome to the Details Page.</Text>
      </View>
    );
  }
}

/**
 * defines the layout of the chats screen
 */
class ChatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Chats',
    headerStyle: {
      backgroundColor: '#2ECC71',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  /**
   * Renders the chat screen
   */
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello! Welcome to the Details Page.</Text>
      </View>
    );
  }
}

/**defines the navigation between the screens */
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Chats: ChatsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
