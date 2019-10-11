/*****************************************************
 * Samuel Zeleke sgz4@students.calvin.edu
 * CS262B - Lab06 - Oct 11
 * App.js
 *****************************************************/
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import TodoList from './TodoList';


/*
 * @author Samuel Zeleke sgz4@students.calvin.edu
 * @version 1.0
 *
 * App class defines the how components are rendered on the main screen
 */
export default function App() {
  //Task name containers
  const [value, setValue] = useState('');
  //task containers
  const [todos, setTodos] = useState([]);

  //adds task into to-do list
  const addTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
      setValue('');
    }
  };

  //marks an item in the to-do list as done
  const checkTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    );
  };

  //deletes an item in the to-do list
  const deleteTodo = id => {
    setTodos(
      todos.filter(todo => {
        if (todo.key !== id) return true;
      })
    );
  };

  return (
    //Main View
    <View style={styles.container}>
      {/* Header with title*/}
      <Text style={styles.header}>Todo List</Text>
      {/* Task input textInput and add button*/}
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="What do you want to do today?"
          placeholderTextColor="#abbabb"
          value={value}
          onChangeText={value => setValue(value)}
        />
        <TouchableOpacity onPress={() => addTodo()}>
          <Icon name="plus" size={30} color="#ff0073" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      </View>

      {/*Task view*/}
      <ScrollView style={{ width: '100%' }}>
        {todos.map(item => (
          <TodoList
            text={item.text}
            key={item.key}
            checked={item.checked}
            setChecked={() => checkTodo(item.key)}
            deleteTodo={() => deleteTodo(item.key)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "white"//'#F5FCFF',
  },
  header: {
    marginTop: '15%',
    fontSize: 20,
    color: '#ff0073',
    paddingBottom: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: '#ff0073',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff0073',
    paddingLeft: 10,
    minHeight: '3%',
  },
});
