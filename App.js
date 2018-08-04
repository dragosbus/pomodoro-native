import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import TimerMixin from 'react-timer-mixin';

import Timer from './components/Timer';
import WorkSlider from './components/Sliders';
import WrapperButtons from './components/Buttons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workTimer: 0,
      activeTimer: 'work'
    }
    this.changeTimer = this.changeTimer.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  decrementCounter() {
    this.setState({workTimer: this.state.workTimer - 1})
  }

  changeTimer(value) {
    this.setState({workTimer: parseInt(value)})
  }

  startTimer() {
    Alert.alert('TImer', '5')
    this.interval = setInterval(this.decrementCounter, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.setState({workTimer: 0})
  }

  render() {
    return (
      <View style={styles.container}>
       <Timer timer={this.state.workTimer}/>
       <WorkSlider 
        changeWorkTimerHandler={this.changeTimer}
        workTimer={this.state.workTimer}
       />
       <WrapperButtons
        startBtn = {this.startTimer}
        stopBtn = {this.stopTimer}
        resetBtn = {this.resetTimer}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
