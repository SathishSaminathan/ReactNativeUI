/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert, Button } from "react-native";
import Sound from "react-native-sound";

import MButton from "./app/components/MButton";
import RippleAnimation from "./app/components/RippleAnimation";
import TextAnimation from "./app/components/TextAnimation";

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
        {/* <MButton
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
        {/* <TextAnimation /> */}
        <MButton type="ActionButton" icon="DELETE" label="Delete"/>
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
