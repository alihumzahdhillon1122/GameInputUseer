import { Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/FirstStartGmaeScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/color';










const App = () => {

  const [userNumber, setUserNumber] = useState();    // we have set it null so it is confirmed that we dont have any number inittially
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }                                       // to use this function we have to make prop like onPickedNUmber and then pass it into FirstGameScreen


  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />
  }




  return (
    <LinearGradient colors={[Colors.primary500, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/images.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};











export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.15
  },
});
