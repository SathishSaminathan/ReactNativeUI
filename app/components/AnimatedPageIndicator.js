import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Animated,
  View,
  TouchableOpacity
} from "react-native";

const items = [0, 1, 2, 3];

class AnimatedPageIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: new Animated.Value(0),
      track: new Animated.Value(0)
    };
  }

  componentDidMount = () => {
    Animated.spring(this.state.index, {
      toValue: this.state.track,
      duration: 500,
      useNativeDriver: true,
      friction: 100,
      tension: 100
    }).start();
  };

  render() {
    const { index } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.background}>
          {items.map(i => {
            const translateX = Animated.multiply(
              Animated.subtract(index, i),
              40
            );
            const transform = [{ translateX }];

            return (
              <TouchableOpacity
                style={styles.circle}
                key={i}
                onPress={() => this.state.track.setValue(i)}
              >
                <Animated.View style={[styles.mover, transform]} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}
export default AnimatedPageIndicator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  background: {
    flexDirection: "row"
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: "#ddd",
    borderRadius: 20,
    marginRight: 4,
    overflow: "hidden"
  },
  mover: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "tomato"
  }
});
