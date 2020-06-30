import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
import colors from "../../assets/colors";
import CustomActionButton from "../../components/CustomActionButton";
import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database'

export default class LogInScreen extends Component {
  state = {
    email: "",
    password: "",
    isLoading: false,
  };

  signIn = async () => {
    if (this.state.email && this.state.password) {
      this.setState({ isLoading: true })
      try {
        console.log("entered catch");
        const response = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
        console.log(response, "signIn");
        if (response) {
          this.setState({ isLoading: false })
          // navigate to screen
          this.props.navigation.navigate('LoadingScreen')
        }
      } catch (error) {
        console.log(error, "error");
        this.setState({ isLoading: false })
        switch (error.code) {
          case "auth/user-not-found":
            Alert.alert(
              "A user with that email does not exists, Try signing up"
            );
            break;
          case "auth/invalid-email":
            Alert.alert("Please enter an email address");
            break;
          case "auth/network-request-failed":
            Alert.alert('Network request failed')
        }
      }
    } else {
      Alert.alert("Please enter email and Password");
    }
  };

  signUp = async () => {
    if (this.state.email && this.state.password) {
      this.setState({ isLoading: true })
      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
          );
        console.log(response);
        if (response) {
          this.setState({ isLoading: false })
          // login the user
          const user = await firebase.database().ref("/users").child(response.user.uid).set({ email: response.user.email, uid: response.user.uid })

          this.props.navigation.navigate('LoadingScreen')

          // this.signIn(this.state.email, this.state.password)
        }

      } catch (error) {
        this.setState({ isLoading: false })
        console.log(error, 'error in signUp')
        if (error.code == "auth/email-already-in-use") {
          Alert.alert("User already exists, Try Loggin in");
        } else if (error.code == "auth/weak-password") {
          Alert.alert('Password should be atleast 6 in characters')
        }
      }
    } else {
      Alert.alert("Please enter email and password");
    }
  };

  render() {
    return (
      <View style={styles.container}>

        {this.state.isLoading ?
          <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center', zIndex: 1000, elevation: 1000 }]}>
            <ActivityIndicator size="large" color={colors.logoColor} />
          </View>
          : null}

        <View style={{ flex: 1, justifyContent: "center" }}>
          <TextInput
            style={styles.textInput}
            placeholder="abc@example.com"
            placeholderTextColor={colors.bgTextInputDark}
            keyboardType="email-address"
            keyboardAppearance="light"
            onChangeText={(email) => this.setState({ email: email })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="enter password"
            placeholderTextColor={colors.bgTextInputDark}
            secureTextEntry
            onChangeText={(password) => this.setState({ password: password })}
          />
          <View style={{ alignItems: "center" }}>
            <CustomActionButton
              onPress={() => this.signIn()}
              style={[styles.loginButtons, { borderColor: colors.bgSuccess }]}
            >
              <Text style={{ fontWeight: "100", color: colors.white }}>
                Login
              </Text>
            </CustomActionButton>

            <CustomActionButton
              onPress={() => this.signUp()}
              style={[styles.loginButtons, { borderColor: colors.bgError }]}
            >
              <Text style={{ fontWeight: "100", color: colors.white }}>
                Sign Up
              </Text>
            </CustomActionButton>
          </View>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgMain,
  },
  textInput: {
    height: 50,
    borderWidth: 0.5,
    marginHorizontal: 40,
    marginBottom: 10,
    borderColor: colors.borderColor,
    color: colors.white,
    paddingHorizontal: 10,
  },
  loginButtons: {
    borderWidth: 0.5,
    width: 200,
    marginTop: 10,
    backgroundColor: "transparent",
  },
});
