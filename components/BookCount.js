import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class BookCount extends Component {
    render() {
        return (
            <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{fontSize:20}}>{this.props.title}</Text>
            <Text>{this.props.count}</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({})
