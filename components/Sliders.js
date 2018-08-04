import React from 'react';
import {View,Text,Slider, StyleSheet} from 'react-native';

const WorkSLider = props => {
    return(
        <View>
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
    workSlider: {
        width: '90%',

    }
});

export default WorkSLider;
