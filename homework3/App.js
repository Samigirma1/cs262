import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';

// we will use these two screens later in our AppNavigator
import AddItem from './screens/AddItem';
import List from './screens/List';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerStyle: {backgroundColor: "black"},
      headerTitleStyle: {color: "#EC9D00"}
    },
  },
  AddItem: {
    screen: AddItem,
    navigationOptions: {
      title: 'Add Item',
      headerStyle: {backgroundColor: "black"},
      headerTitleStyle: {color: "#EC9D00"}
    },
  },
  List: {
    screen: List,
    navigationOptions: {
      title: 'Items in Database',
      headerStyle: {backgroundColor: "black"},
      headerTitleStyle: {color: "#EC9D00"}
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}