import React from 'react';
import Card from '../components/Card';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameOver = ({numberOfRounds, userNumber, onRestart}) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text>Game Over!</Text>
        <Text>Number of rounds: {numberOfRounds}</Text>
        <Text>Number to guess was: {userNumber}</Text>

        <Button title="Restart Game" onPress={onRestart} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  }
})

export default GameOver;
