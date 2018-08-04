import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from './components/Timer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      activeTimer: 'work'
    }
  }
  render() {
    return (
      <View style={styles.container}>
       <Timer timer={this.state.timer}/>
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
