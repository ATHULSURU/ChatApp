import React from 'react';
import {
  View,
  StyleSheet,
  Alert,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from './components/Header';
import Messages from './components/Messages';
import {Client as TwilioChatClient} from 'twilio-chat';
import TextBox from './components/TextBox';

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

export default class Flex extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: '',
      Name: 'Inspector',
      loaded: false,
    };
  }

  addNewTodo() {
    Alert.alert(this.state.textInput);
    this.setState({
      textInput: '',
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Header title={this.state.Name} />
        {/* <Text>Channels:</Text>
        <ChannelList channels={this.state.channels} selectChannel={this.selectChannel}/> */}
        {/* <Text>Messages:</Text>
        <MessageList messages={this.state.messages}/> */}
        <Messages />
        {/* <TextBox
          textChange={textInput => this.setState({textInput})}
          addNewTodo={() => this.addNewTodo()}
        /> */}
        <View style={styles.bottomView}>
          <TextInput
            style={styles.input}
            placeholder="Type a message...."
            onChangeText={textInput => this.setState({textInput})}
            value={this.state.textInput}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => this.addNewTodo()}>
            <Text style={styles.addButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  bottomView: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // bottom: 0,
  },
  input: {
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    flex: 1,
    fontSize: 20,
    height: 45,
    padding: 10,
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'column',
    marginTop: 10,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 3},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
  },
  addButton: {
    width: 100,
    backgroundColor: '#165e54',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
    height: 40,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
