import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const TextBox = props => {
  return (
    <View style={styles.bottomView}>
      <TextInput
        style={styles.input}
        placeholder="Type a message...."
        onChangeText={textInput => props.textChange(textInput)}
        value={props.textInput}
      />
      <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
        <Text style={styles.addButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
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

export default TextBox;
