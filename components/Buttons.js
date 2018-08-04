import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const BasicButtons = props => {
    return (
        <TouchableOpacity 
            style={[styles.btn, props.btnStyle]}
            onPress={props.btnType}
        >
            <Text style={styles.textBtn}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

const WrapperButtons = props => {
    return (
        <View style={styles.container}>
            <BasicButtons btnStyle={styles.startBtn} title={'Start'} btnType={props.startBtn}/>
            <BasicButtons btnStyle={styles.stopBtn} title={'Stop'} btnType={props.stopBtn}/>
            <BasicButtons btnStyle={styles.resetBtn} title={'Reset'} btnType={props.resetBtn}/>
        </View>
    );
};

const styles= StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5
    },
    startBtn: {
        backgroundColor: '#08d14e',
              
    },
    stopBtn: {
        backgroundColor: '#d62a66',
        
    },
    resetBtn: {
        backgroundColor: '#3c20d8',
        
    },
    textBtn: {
        color: '#fff',
        fontSize: 20
    }
});

export default WrapperButtons;