import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ style, children }) => {
  return (
    <View style={{ ...styles.card, ...style }}>{children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    elevation: 5,
    shadowRadius: 6,
    borderRadius: 5,
    shadowOpacity: 0.26,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  }
})

export default Card;
