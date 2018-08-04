import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from './components/Timer';
import WorkSlider from './components/Sliders';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      activeTimer: 'work'
    }
    this.changeTimer = this.changeTimer.bind(this);
  }

  changeTimer(value) {
    this.setState({timer: value})
  }

  render() {
    return (
      <View style={styles.container}>
       <Timer timer={this.state.timer}/>
       <WorkSlider 
        changeWorkTimerHandler={this.changeTimer}
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
