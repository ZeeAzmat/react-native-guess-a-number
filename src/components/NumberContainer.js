import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'dodgerblue',
    backgroundColor: 'dodgerblue',
  },
  number: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  }
})

export default NumberContainer;
