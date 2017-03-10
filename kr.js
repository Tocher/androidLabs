import React, {Component} from 'react';
import {Text, View, ListView, Image, Dimensions, StyleSheet} from 'react-native';

export default class KRScreen extends React.Component {
    static navigationOptions = {
        title: 'Контрольная',
    };
    
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    name: 'Эдвард Нортон',
                    avatar: {
                        uri: 'https://1.avatars.mds.yandex.net/get-entity_search/49811/226420095/S122x162Face',
                        width: 100,
                        height: 100,
                    },
                    sex: 'пол: мужской'
                },
                {
                    name: 'Брэд Питт',
                    avatar: {
                        uri: 'https://1.avatars.mds.yandex.net/get-entity_search/117753/149560168/S122x162Face',
                        width: 100,
                        height: 100,
                    },
                    sex: 'пол: мужской'
                },
                {
                    name: 'Хелена Бонем Картер',
                    avatar: {
                        uri: 'https://1.avatars.mds.yandex.net/get-entity_search/127219/135141106/S122x162Face',
                        width: 100,
                        height: 100,
                    },
                    sex: 'пол: женский'
                },
                {
                    name: 'Мит Лоуф',
                    avatar: {
                        uri: 'https://1.avatars.mds.yandex.net/get-entity_search/60958/130301638/S122x162Face',
                        width: 100,
                        height: 100,
                    },
                    sex: 'пол: мужской'
                }
            ]),
            flexDirection: 'column',
            value: 1
        };
        
        this._onLayout = function() {
            var {height, width} = Dimensions.get('window');
            
            if (height > width) {
                this.setState({
                    flexDirection: 'column',
                    justifyContent: 'center',
                    value: 3,
                    width: undefined
                });
            } else {
                this.setState({
                    flexDirection: 'row',
                    justifyContent: 'center',
                    value: 2,
                    width: width/2
                });
            }
        };
        
        this._renderRow = function(rowData) {
            return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: this.state.flexDirection,
                        justifyContent: this.state.justifyContent,
                        margin: 20
                    }}
                >
                    <View style={{
                        width: this.state.width
                    }}>
                        <Text>{rowData.name}</Text>
                        <Text>{rowData.sex}</Text>
                    </View>
                    <Image source={rowData.avatar}/>
                </View>
            );
        };
    }
    
    render() {
        return (
            <View onLayout={this._onLayout.bind(this)}
                  style={{
                      width: '100%',
                      flex: 1,
                      alignItems: 'center',
                  }}>
                <ListView
                    key={this.state.value}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                />
            </View>
        );
    }
}
