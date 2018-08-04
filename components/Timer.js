import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Timer = props => {
    return(
        <Text style={styles.textTimer}>{props.timer}</Text>
    );
};

const styles = StyleSheet.create({
    textTimer: {
        fontSize: 40
    }
});

export default Timer;