import Card from '../components/Card';
import React, { useState, useRef, useEffect } from 'react';
import NumberContainer from '../components/NumberContainer';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return random;
  }
};

const GameScreen = ({ userChoice, onGameOver}) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));

  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert(
        'Don\'t lie',
        'You know this is incorrect guess...',
        [{text: 'Sorry', style: 'cancel'}]
      );
      return
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(currentRounds => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={() => nextGuessHandler('lower')} />
        <Button title="Greater" onPress={() => nextGuessHandler('greater')} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    width: 300,
    marginTop: 20,
    maxWidth: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})

export default GameScreen;
