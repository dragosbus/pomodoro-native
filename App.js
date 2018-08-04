import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import Timer from './components/Timer';
import WorkSlider from './components/Sliders';
import WrapperButtons from './components/Buttons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workTimer: 0,
      pauseTimer: 0,
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
    this.interval = setInterval(this.decrementCounter, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.setState({workTimer: 0})
  }

  render() {
    let {workTimer} = this.state;
    workTimer = workTimer * 60;
    
    let hour = Math.floor(workTimer / 3600);
    let minute = Math.floor(timer / 60) - (hour * 60);
    let seconds = workTimer % 60;
    //convert them to string
    hour = hour < 10 ? `0${hour}` : `${hour}`;
    minute = minute < 10 ? `0${minute}` : `${minute}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    let clock = `${hour}:${minute}:${seconds}`;
    return (
      <View style={styles.container}>
       <Timer timer={clock}/>
       <WorkSlider 
        changeWorkTimerHandler={this.changeTimer}
        workTimer={this.state.workTimer}
        pauseTimer={this.state.pauseTimer}
       />
       <WrapperButtons
        startBtn = {this.startTimer}
        stopBtn = {this.stopTimer}
        resetBtn = {this.resetTimer}
        workTimer={this.state.workTimer}
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
