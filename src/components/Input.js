import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
  return (
    <TextInput {...props} style={{...styles.input, ...props.style}} />
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    borderColor: 'dodgerblue',
  },
})

export default Input;