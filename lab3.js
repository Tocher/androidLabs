import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

export default class Lab3Screen extends React.Component {
    static navigationOptions = {
        title: 'Лабораторная 3',
    };
    
    constructor(props) {
        super(props);

        this.state = {
            timerId: undefined,
            timer: 0
        };
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.timer}</Text>
                <Button
                    onPress={() => {
                        if (this.state.timerId) {
                            clearInterval(this.state.timerId);
                            this.setState({
                                timer: 0
                            });
                        }
    
                        this.state.timerId = setInterval(function() {
                            this.state.timer++;
                            if (this.state.timer > 10) {
                                clearInterval(this.state.timerId);
                            } else {
                                this.setState({
                                    timer: this.state.timer
                                });
                            }
                        }.bind(this), 1000);
                    }}
                    title="старт"
                />
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
    text: {
        marginBottom: 20
    },
    textInput: {
        marginTop: 40,
        marginBottom: 20,
        width: '80%'
    }
});