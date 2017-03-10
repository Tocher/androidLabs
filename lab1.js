import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Lab1Screen extends React.Component {
    static navigationOptions = {
        title: 'Лабораторная 1',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Казаков Сергей Георгиевич</Text>
                <Text>группа: 6M2312</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});