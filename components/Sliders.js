import React from 'react';
import {View,Text,Slider, StyleSheet} from 'react-native';

const WorkSLider = props => {
    return(
        <View style={styles.container}>
            <Text>Set work time</Text>
            <Slider
                style={styles.workSlider}
                thumbTintColor="#ea0e5e"
                minimumTrackTintColor="#ea0e5e"
                maximumValue={200}
                value ={props.workTimer}
                step={1}
                onValueChange={props.changeWorkTimerHandler}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },
    workSlider: {
        width: '90%',
    }
});

export default WorkSLider;
