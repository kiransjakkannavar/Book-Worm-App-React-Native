import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View
        style={{
          height: 70,
          borderBottomWidth: 0.5,
          borderColor: "#E9E9E9",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 24 }}>Book Worm</Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          height: 70,
          borderTopWidth: 0.5,
          borderTopColor: "#E9E9E9",
          flexDirection: "row"
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Total</Text>
          <Text>0</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Reading</Text>
          <Text>0</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Read</Text>
          <Text>0</Text>
        </View>
      </View>
      <SafeAreaView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
