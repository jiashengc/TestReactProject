import React, {Component} from 'react';
import { Alert, StyleSheet,  Text, TextInput, Button, View, Image } from 'react-native';

class NavigationItem extends Component {
  render() {

    return (
      <Text>{this.props.name}</Text>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageTyped: '',
    };
  }

  render() {
    let pic = {
      uri: 'https://i.imgur.com/dWxjl35.jpg'
    };
    return (
      <View style={styles.container}>

        <Text>{this.state.messageTyped}</Text>

        <View style={styles.navigationMenu}>
          <NavigationItem name='Jennie'></NavigationItem>
          <NavigationItem name='Jisoo'></NavigationItem>
          <NavigationItem name='Lisa'></NavigationItem>
          <NavigationItem name='Rose'></NavigationItem>
        </View>

        
        <Image source={pic} style={{width: 200, height: 200}} />
        
        <TextInput 
          style={{height: 40, backgroundColor: 'white'}}
          placeholder="Type here to send a message"
          onChangeText={(text) => this.setState({messageTyped: text})}>
        </TextInput>

        <Button
          onPress={() => {
            Alert.alert('You tapped a button!');
          }}
          title="Press ME"
        ></Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationMenu: {
    flexDirection: 'row',
    color: 'gray',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  member: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
