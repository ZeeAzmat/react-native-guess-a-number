import React, { useState } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import { View, Text, StyleSheet, Button, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';

const StartGame = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const numberInputHandler = input => {
    setEnteredValue(input.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Numbe has to be between 0 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler }
      ]);
    }

    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(choosenNumber);
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>

        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>

          <Input
            blurOnSubmit
            maxLength={2}
            autoCorrect={false}
            style={styles.input}
            value={enteredValue}
            autoCapitalize='none'
            keyboardType='number-pad'
            onChangeText={numberInputHandler}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" color="tomato" onPress={resetInputHandler} />
            </View>

            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmInputHandler} />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    marginVertical: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
  },
  input: {
    width: '100%',
    textAlign: 'center',
  }
})

export default StartGame;