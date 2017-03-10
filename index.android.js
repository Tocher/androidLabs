import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import Lab1Screen from './lab1.js';
import Lab2Screen from './lab2.js';
import Lab3Screen from './lab3.js';
import KRScreen from './kr.js';

import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Меню',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigate('Lab1')}
                        title="Лабораторная 1"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigate('Lab2')}
                        title="Лабораторная 2"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigate('Lab3')}
                        title="Лабораторная 3"
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigate('KR')}
                        title="Контрольная"
                    />
                </View>
            </View>
        );
    }
}

const androidLabs = StackNavigator({
    Home: { screen: HomeScreen },
    Lab1: { screen: Lab1Screen },
    Lab2: { screen: Lab2Screen },
    Lab3: { screen: Lab3Screen },
    KR: { screen: KRScreen },
});

const styles = StyleSheet.create({
    button: {
        width: '50%',
        margin: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('androidLabs', () => androidLabs);
