import React from 'react';
import { StyleSheet, View } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from './actionCreators/actionCreators';

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
    let {workTimer, pauseTimer, setWorkTime, setPauseTime} = this.props;
    let clock = setClock(workTimer);
    
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Timer timer={clock}/>
        <Sliders
          workTimer={workTimer}
          pauseTimer={pauseTimer}
          changeWorkTimerHandler={setWorkTime}
          changePauseTimerHandler={setPauseTime}
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

const mapDispatchToProps = dispatch => ({
  setWorkTime: bindActionCreators(Actions.setWorkTimer, dispatch),
  setPauseTime: bindActionCreators(Actions.setPauseTime, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock);