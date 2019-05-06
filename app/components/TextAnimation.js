import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, Button } from "react-native";
import Sound from "react-native-sound";

import { playButtonPress } from "./audio";

class TextAnimation extends Component {
  constructor(props) {
    super(props);
    this.animated = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
    // this.playMusic();
  }

  playMusic = () => {
    const music = new Sound("introsound.mp3", Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
      // loaded successfully, play
      music.play(success => {
        if (success) {
          console.log("successfully finished playing");
        } else {
          console.log("playback failed due to audio decoding errors");
        }
      });
    });
  };

  animate = () => {
    this.playMusic();
    console.log("animating");
    this.animated.setValue(0);
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 300
    }).start();
  };

  render() {
    const opacity = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    const translateX = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [-10, 1]
    });

    const scale = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [1000, 1]
    });

    const transform = [{ scale }];
    return (
      <View>
        <Animated.Text
          style={[
            styles.textStyle,
            { backgroundColor: "transparent" },
            { opacity, transform }
          ]}
        >
          Sachu Keethu
        </Animated.Text>
        <Button title="Click Me" onPress={() => this.animate()} />
      </View>
    );
  }
}
export default TextAnimation;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
