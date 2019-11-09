import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';

import ItemComponent from '../components/ItemComponent';

import { db } from '../config';

let itemsRef = db.ref('/items');

export default class List extends Component {

  state = {
    items: []
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: 'black',
          height: Dimensions.get('window').height,
        }}>
        {this.state.items.length > 0 ? (
          <ItemComponent items={this.state.items} />
        ) : (
          <Text style = {{color: "#E1AE00"}}>No items</Text>
        )}
      </View>
    );
  }
}
