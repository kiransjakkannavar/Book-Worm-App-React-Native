import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../assets/colors";
import CustomActionButton from "../../components/CustomActionButton";

const WelcomeScreen = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bgMain }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="ios-bookmarks" size={150} color={colors.logoColor} />
        <Text style={{ fontSize: 50, fontWeight: "100", color: colors.white }}>
          Book Worm
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <CustomActionButton
          style={{
            width: 200,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: colors.bgPrimary,
            marginBottom: 10,
          }}
          title="Log In"
          onPress={() => props.navigation.navigate("LogInScreen")}
        >
          <Text style={{ fontWeight: "100", color: colors.white }}>Log In</Text>
        </CustomActionButton>

        {/* <CustomActionButton
          style={{
            width: 200,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: colors.bgPrimary,
          }}
          title="Sign Up"
          onPress={() => props.navigation.navigate("SignUpScreen")}
        >
          <Text style={{ fontWeight: "100", color: colors.white }}>
            Sign Up
          </Text>
        </CustomActionButton> */}
      </View>
    </View>
  );
};

export default WelcomeScreen;
