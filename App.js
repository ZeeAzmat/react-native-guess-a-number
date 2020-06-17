import React, { useState } from 'react';
import Header from './src/components/Header';
import GameOver from './src/screens/GameOver';
import StartGame from './src/screens/StartGame';
import { StyleSheet, View } from 'react-native';
import GameScreen from './src/screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameRounds, setGameRounds] = useState(0);

  const startGameHandler = (userNumber) => {
    setUserNumber(userNumber);
    setGameRounds(0);
  }

  const configureNewGameHandler = () => {
    setGameRounds(0);
    setUserNumber(null);
  };

  const gameOverHandler = numberOfRounds => {
    setGameRounds(numberOfRounds);
  };

  let activeScreen = <StartGame onStartGame={startGameHandler} />;

  if (userNumber && gameRounds === 0) {
    activeScreen = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (gameRounds > 0) {
    activeScreen = <GameOver numberOfRounds={gameRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>;
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
