import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Timer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTimer}>{props.timer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTimer: {
    fontSize: 40,
    borderWidth: 3,
    borderColor: 'rgba(225, 225, 232, 0.6)',
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 100
  }
});

export default Timer;
