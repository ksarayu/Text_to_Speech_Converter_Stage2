import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements'

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      enteredText : '',
    }
  }
  
  speech = () => {
    var thingToSay = this.state.enteredText
    Speech.speak(thingToSay) 
  }

  render() {
    return (
      <View>
        <Header
          centerComponent = {{text : 'Text to Speech Converter', style : {color : 'white'}}}
          backgroundColor = 'paleredviolet'>
        </Header>

        <Text style = {styling.textStyle}> Enter the word below </Text>

        <TextInput
          style = {styling.inputBoxStyle}
          value = {this.state.enteredText}
          onChangeText = {(text) => {
            this.setState({
              enteredText : text
            })
          }}>
          </TextInput>
  
          <TouchableOpacity
          style = {styling.goButtonStyle}
          onPress = {() => {
            db[this.state.enteredText] ? 
            this.speak :
            Alert.alert('Sorry, this word is not available as of now.')
          }}>
            <Text style = {styling.textStyle}> Click to hear the word </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styling = StyleSheet.create({
  inputBoxStyle : {
    marginTop : 15,
    alignSelf : 'center',
    height : 50,
    width : 100,
    borderColor : 'paleredviolet',
    borderWidth : 5
  },
  goButtonStyle : {
    marginTop : 45,
    marginBottom : 20,
    alignSelf : 'center',
    backgroundColor: 'palevioletred',
    width: 275,
    height: 50,
    alignItems: 'center'
  },
  textStyle : {
    color: 'white',
    paddingTop : 10,
    fontSize: 25,
  }
})