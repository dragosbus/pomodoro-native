import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Timer = props => {
    return(
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
        fontSize: 40
    }
});

export default Timer;