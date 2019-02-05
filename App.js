import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert, Button } from "react-native";
import Sound from "react-native-sound";

import MButton from "./app/components/MButton";
import MBubble from "./app/components/MBubble";
import RippleAnimation from "./app/components/RippleAnimation";
import TextAnimation from "./app/components/TextAnimation";
import PlayGround from "./app/components/playground";

export default class App extends Component {
  onPress = () => {
    Alert.alert("Alert", "You have Clicked");
  };

  onPlay = () => {
    console.log("play method...");
  };
  render() {
    return (
      <View style={styles.container} onPress={this.onPlay}>
        {/* <CustomButton
          theme="RED"
          icon="heart"
          type="CircularButton"
          size="Small"
          border="Circular"
          enabled={true}
          label="Save"
          onPress={this.onPress}
        /> */}
        {/* <RippleAnimation/> */}

        <PlayGround />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
