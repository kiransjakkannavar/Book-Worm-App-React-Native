import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import colors from '../../assets/colors'

export default class LoadingScreen extends Component {

    componentDidMount() {
        this.checkIfLoggedIn()
    }

    checkIfLoggedIn = () => {
        //onAuthStateChanged - listener that returns the user

        this.unSubscribe = firebase.auth().onAuthStateChanged(user => {
            console.log(user, 'user')
            if (user) {
                //navigate to home screen
                this.props.navigation.navigate('HomeScreen', { user })
            } else {
                //navigate to login screen
                this.props.navigation.navigate('AppStackNavigator')
            }
        })
    }

    componentWillUnmount() {
        this.unSubscribe()
    }


    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={colors.logoColor} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bgMain
    }
})
