import React from 'react';
import { Button, View, Text } from 'react-native';
import { Card } from "react-native-paper";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#2ECC71",
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: 
      (<Button 
        title = "Chats"
        onPress = {() => this.props.navigation.navigate("Chats")}
        color = "white"
        />),
    headerLeft: 
      (<Button 
        title = "Toast"
        onPress = {() => alert("Toast!")}
        color = "white"
        />)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button 
          title = "Go to Details"
          onPress = {() => this.props.navigation.navigate('Details')} />
        
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Details",
    headerStyle: {
      backgroundColor: "#FF5C27"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello! Welcome to the Details Page.</Text>
      </View>
    );
  }
}

class ChatsScreen extends React.Component {
  static navigationOptions = {
    title: "Chats",
    headerStyle: {
      backgroundColor: "#2ECC71",
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
    }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello! Welcome to the Details Page.</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
  Chats: ChatsScreen,
},{
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
