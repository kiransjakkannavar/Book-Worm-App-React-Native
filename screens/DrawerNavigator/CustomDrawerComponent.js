import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import colors from "../../assets/colors";
import { Ionicons } from "@expo/vector-icons";
import { DrawerItems } from "react-navigation";

export default class CustomDrawerComponent extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView
          style={{
            backgroundColor:
              Platform.OS == "ios" ? colors.bgMain : "transparent",
          }}
        >
          <View style={styles.container}>
            <Ionicons
              name="ios-bookmarks"
              size={100}
              color={colors.logoColor}
            />
            <Text
              style={{ fontSize: 24, fontWeight: "100", color: colors.white }}
            >
              Book Worm
            </Text>
          </View>
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    backgroundColor: colors.bgMain,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS == "android" ? 20 : 10,
  },
});
