import React, { Component } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import CustomActionButton from "../../components/CustomActionButton";
import colors from "../../assets/colors";
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default class SettingsScreen extends Component {


  onSignOut = async () => {
    try {

      const response = await firebase.auth().signOut
      console.log(response, 'signout')
      if (response) {
        this.props.navigation.navigate('WelcomeScreen')
        Alert.alert('Successfully logged out')
      } else {
        Alert.alert('Unable to log out, Please Try again')
      }
    } catch (error) {
      Alert.alert('Unable to log out, Please Try again')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomActionButton
          style={{
            width: 200,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: colors.bgPrimary,
          }}
          title="Log Out"
          onPress={() => this.onSignOut()}
        >
          <Text style={{ fontWeight: "100", color: colors.white }}>
            Log Out
          </Text>
        </CustomActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.bgMain,
  },
});
