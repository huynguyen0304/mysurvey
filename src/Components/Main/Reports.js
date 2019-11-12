import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'

export default class Reports extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: [],
            isLoading: true
        }
    }

    renderItem = () => {}

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/huynguyen0304/Survey/db")
            .then((res) => res.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.evaluation
                })
            })
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
