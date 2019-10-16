import React, {Component} from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import BookCount from './components/BookCount'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      totalCount:0,
      readingCount:0,
      readCount:0
    }
  }

  render(){
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
          <Text style={{ fontSize: 24, paddingTop:5 }}>Book Worm</Text>
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
          <BookCount title="Total" count={this.state.totalCount}/>
          <BookCount title="Reading" count={this.state.readingCount}/>
          <BookCount title="Read" count={this.state.readCount}/>
          
        </View>
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
