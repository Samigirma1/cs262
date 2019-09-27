import * as React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Input, Button} from 'react-native-elements';
import {Icon} from 'react-native-vector-icons/FontAwesome';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      var1: "",
      var2: "",
      result: "-",
      opr: "",
      resultTag: "--Result--"
    }
  }
  
  change_val = (val, whichVal) => {
    if (whichVal == "first"){
      this.setState({var1: val, result: "-"})
    }
    else {
      this.setState({var2: val})
    }
  }

  change_operator = (newOp) =>{
    this.setState({opr: newOp})
  }

  clear_result = () =>{
    this.setState({result: "-", var1: "", var2: "", opr: "", resultTag: "--Result--"})
  }

  calculate = () => {
    switch (this.state.opr){
      case "+":
        this.setState(
          {
            result: parseInt(this.state.var1) + parseInt(this.state.var2),
            resultTag: "Sum"
          })
          break
      case "-":
          this.setState(
          {
            result: parseInt(this.state.var1) - parseInt(this.state.var2),
            resultTag: "Difference"
          })
          break
      case "*":
          this.setState(
          {
            result: parseInt(this.state.var1) * parseInt(this.state.var2),
            resultTag: "Product"
          })
          break
      case "/":
          this.setState(
          {
            result: parseInt(this.state.var1) / parseInt(this.state.var2),
            resultTag: "Quotient"
          })
          break
      case "%":
          
          this.setState(
          {
            result: parseInt(this.state.var1) % parseInt(this.state.var2),
            resultTag: "Modulo"
          }
          )
          break
        }

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Samuel Zeleke;
          CS262 - B
          Homework 1: basic calculator
        </Text>
        <Card>
          <TextInput placeholder = "Value 1" 
          onChangeText = {text => this.change_val(text, "first")}
          value={this.state.var1}
          />
          <View style={{display: 'flex', 
                        alignItems: "center" , 
                        flexDirection: 'row',
                        alignSelf: "center",
                        paddingTop: 25,
                        }
                      }>
          <Button title="+"
            onPress={()=> this.change_operator("+")}
            type = "outline"
            />
          <Button title="-"
            onPress={()=> this.change_operator("-")}
            type = "outline"
            />  
          
          <Button type = "outline" title="x"
          onPress={()=> this.change_operator("*")}/>

          <Button title="/"
            onPress={()=> this.change_operator("/")}
            type = "outline"
            />
          <Button title="%"
            onPress={()=> this.change_operator("%")}
            type = "outline"
           />
        </View>
          <TextInput placeholder = "Value 2" 
          onChangeText = {text => this.change_val(text, "second")}
          />
          <Text style = {{textAlign: "center", padding: 20}}> 
            {this.state.resultTag}: {this.state.result} 
            
            </Text>
         <View style={{display: 'flex', 
                        alignItems: "center" , 
                        flexDirection: 'row',
                        alignSelf: "center",
                        paddingTop: 25,
                        }
                      }>
         
          <Button
          title="Calculate"
          type="outline"
          onPress = {() => {
            this.calculate()}
          }
          />

          <Button
          title="Clear"
          type="solid"
          backgroundColor = "red"
          onPress = {() => this.clear_result()}
          />
          </View>
        </Card>
        
      </View>
    );
  }
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
  },
});
