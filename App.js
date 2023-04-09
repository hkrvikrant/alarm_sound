import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Sound from 'react-native-sound';

export default function App() {

  const [counter, setCounter] = useState();
  const [value, setValue] = useState()

  const play = () => {
    setValue('Play')
    const correctSound = new Sound('ding.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // if loaded successfully
      correctSound.setVolume(1)
      correctSound.play(() => correctSound.release())
    });
    setCounter(10)
  }

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  if (counter === 0 && value === 'Play') { play() }

  const stop = () => {
    setValue('Stop')
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => play()}
        style={styles.buttonView}
      >
        <Text style={styles.textView}>Start</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => stop()}
        style={styles.buttonView}
      >
        <Text style={styles.textView}>Stop</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  buttonView: {
    width: 100,
    backgroundColor: 'red',
    width: Dimensions.get('screen').width / 2,
    height: Dimensions.get('screen').width / 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    borderRadius: 10
  },
  textView: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  }
})