import React from 'react';
import { StyleSheet, View } from 'react-native';
import {connect} from 'react-redux';

import Timer from './components/Timer';
import WorkSlider from './components/Sliders';
import WrapperButtons from './components/Buttons';

class Clock extends React.Component {

  render() {
    let {workTimer, pauseTimer} = this.props;
    return (
      <View style={styles.container}>
        <Timer timer={clock} />
        <WorkSlider
          workTimer={workTimer}
          pauseTimer={pauseTimer}
        />
        <WrapperButtons
          workTimer={workTimer}
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