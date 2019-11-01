import * as React from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  ListView,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      rhyme: 'Cat',
      returnRhyme: 'rhymes with "Bat"',
      dropdownOptions: ['Bat'],
    };
  }

  onChangeText = text => {
    this.setState({
      userInput: text,
      rhyme: text.split(' '),
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.paragraph}>
            "{this.state.rhyme}" {this.state.returnRhyme}
          </Text>
        </Card>
        <TextInput
          style={{
            height: 40,
            borderColor: 'transparent',
            borderBottomColor: '#45FFCC',
            borderWidth: 1,
            paddingBottom: 7,
          }}
          placeholder="Please Input Text For Ryhme"
          textAlignVertical="center"
          onChangeText={text => this.onChangeText(text)}
        />
        <Button
          style={{ paddingBottom: 10, margin: 10 }}
          color="#FF6400"
          title="Rhyme!"
          onPress={this.findRhyme}
        />
      </View>
    );
  }

  range = (start, end) => {
    var ans = [];
    for (let i = start; i <= end; i++) {
      ans.push(i);
    }
    return ans;
  };

  /*  mapData = () => {
    let newFormat = [];
    let lengthRhyme = this.state.returnRhyme.length;
    this.range(0, 10).forEach(element => {
      newFormat.push({
        text: this.state.returnRhyme[Math.floor(Math.random() * lengthRhyme)]
          .word,
      });
    });
    this.setState({ dropdownOptions: newFormat });
  };
*/
  findRhyme = () => {
    fetch('https://api.datamuse.com/words?rel_rhy=' + this.state.rhyme)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.length == 0) {
          this.setState({
            returnRhyme: "doesn't rhyme",
          });
        } else {
          var index = responseJson.length;
          index = Math.floor(Math.random()* index)
          this.setState({
            returnRhyme: 'rhymes with "' + responseJson[index].word + '"',
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
}

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
    paddingBottom: 10,
  },
});
