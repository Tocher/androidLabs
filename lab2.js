import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';

export default class Lab2Screen extends React.Component {
    static navigationOptions = {
        title: 'Лабораторная 2',
    };
    
    constructor(props) {
        super(props);
    
        this.state = {
            text: 'Пример текста',
            inputText: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.text}</Text>
                <Button
                    onPress={() =>
                        this.setState({
                            inputText: this.state.text
                        })}
                    title="редактировать"
                />
                <TextInput
                    onChangeText={(inputText) => {
                        this.setState({inputText});
                    }}
                    style={styles.textInput}
                    value={this.state.inputText}
                />
                <Button
                    onPress={() =>
                        this.setState({
                            text: this.state.inputText
                        })
                    }
                    title="сохранить"
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