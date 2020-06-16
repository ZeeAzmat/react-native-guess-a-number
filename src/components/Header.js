import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    width: '100%',
    paddingTop: 36,
    alignItems: 'center',
    backgroundColor: 'teal',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
  }
})

export default Header;
