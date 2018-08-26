import React from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';

const Slider = props => {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <Slider
        style={styles.slider}
        thumbTintColor="#ea0e5e"
        minimumTrackTintColor="#ea0e5e"
        maximumValue={200}
        value={props.timer}
        step={1}
        onValueChange={props.changeTimer}
        disabled={props.timer > 0 && props.timerIsRunning}
      />
    </View>
  );
};

const Sliders = props => {
  return (
    <View style={styles.container}>
      <Slider 
        timer={props.workTimer} 
        label="Set work timer" 
        changeTimer={props.changeWorkTimerHandler}
      />
      <Slider 
        timer={props.pauseTimer} 
        label="Set pause timer" 
        changeTimer={props.changePauseTimerHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10
  },
  slider: {
    width: '90%'
  }
});

export default Sliders;
