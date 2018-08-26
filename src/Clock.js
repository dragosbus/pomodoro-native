import React from 'react';
import { StyleSheet, View } from 'react-native';
import {connect} from 'react-redux';

import Timer from '../components/Timer';
import Sliders from '../components/Sliders';
import WrapperButtons from '../components/Buttons';

const setClock = timer => {
  let hour = Math.floor(timer / 3600);
    let minute = Math.floor(timer / 60 - hour * 60);
    let seconds = timer % 60;
    //convert them to string
    hour = hour < 10 ? `0${hour}` : `${hour}`;
    minute = minute < 10 ? `0${minute}` : `${minute}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    let clock = `${hour}:${minute}:${seconds}`;

    return clock;
};

class Clock extends React.Component {

  render() {
    let {workTimer, pauseTimer} = this.props;
    let clock = setClock(workTimer);
    
    return (
      <View style={styles.container}>
        <Timer timer={clock}/>
        <Sliders
          workTimer={workTimer}
          pauseTimer={pauseTimer}
        />
        <WrapperButtons
        
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
    justifyContent: 'center'
  }
});

const mapStateToProps = state => ({
  workTimer: state.workTimer,
  pauseTimer: state.pauseTimer
});

export default connect(mapStateToProps)(Clock);