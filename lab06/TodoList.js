/*****************************************************
 * Samuel Zeleke sgz4@students.calvin.edu
 * CS262B - Lab06 - Oct 11
 * TodoList.js
 *****************************************************/
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

/*
 * @author Samuel Zeleke sgz4@students.calvin.edu
 * @version 1.0
 *
 * TodoList class defines how a task is rendered in a view
 */
export default function TodoList(props) {
	return (
    //Task View
		<View style={styles.listContainer}>
			
      {/*"Done" check-box*/}
      <Icon
				name={props.checked ? 'check' : 'square'}
				size={30}
				color="black"
				style={{ marginLeft: 15 }}
				onPress={props.setChecked}
			/>
      {/*Task string*/}
			<View>
				{props.checked && <View style={styles.verticalLine} />}
				<Text style={styles.listItem}>{props.text}</Text>
			</View>
      {/*"delete" check-box*/}
			<Icon
				name="trash-2"
				size={30}
				color="red"
				style={{ marginLeft: 'auto' }}
				onPress={props.deleteTodo}
			/>
		</View>
	);
}

//Styles for components
const styles = StyleSheet.create({
	listContainer: {
		marginTop: '5%',
		flexDirection: 'row',
		borderColor: '#aaaaaa',
		borderBottomWidth: 1.5,
		width: '100%',
		alignItems: 'stretch',
		minHeight: 40
	},
	listItem: {
		paddingBottom: 20,
		paddingLeft: 10,
		marginTop: 6,
		borderColor: 'green',
		borderBottomWidth: 1,
		fontSize: 17,
		fontWeight: 'bold',
		color: 'black'
	},
	verticalLine: {
		borderBottomColor: '#ff0073',
		borderBottomWidth: 4,
		marginLeft: 10,
		width: '100%',
		position: 'absolute',
		marginTop: 15,
		fontWeight: 'bold'
	}
});