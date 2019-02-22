import React, { Component } from "react";
import { View, Text, Animated, StyleSheet, Button } from "react-native";

class TextAnimation extends Component {
  constructor(props) {
    super(props);
    this.animated = new Animated.Value(0);
    this.state = {};
    this.opacity = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    this.translateX = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 1]
    });
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.animated.setValue(0);
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 800
    }).start();
  }

  render() {
    const scale = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [1000, 1]
    });
  
    const {opacity,translateX} = this;
    const transform = [{ translateX }];
    return (
      <View
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "center"
        }}
      >
        <Animated.Text style={[styles.textStyle, {opacity}, {transform}]}>
          Sachu
        </Animated.Text>
        <Button
          title="Click"
          onPress={() => {
            this.animate();
          }}
        />
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
