import React, { useState } from 'react';
import Header from './src/components/Header';
import StartGame from './src/screens/StartGame';
import GameScreen from './src/screens/GameScreen';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (userNumber) => {
    setUserNumber(userNumber);
  }

  let activeScreen = <StartGame onStartGame={startGameHandler} />;

  if (userNumber) {
    activeScreen = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.container}>
      <Header title="Guess A Number" />
      {activeScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
