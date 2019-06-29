import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated,
  ScrollView
} from "react-native";

const { width, height } = Dimensions.get("window");

class SlackProfile extends Component {
  constructor(props) {
    super(props);
    this.slideInAnimation = new Animated.Value(0);
    this.state = {};
  }

  handleScroll = event => {
    if (event.nativeEvent.contentOffset.y === 0) {
      this.hideModal();
    }
  };

  showModal = () => {
    Animated.spring(this.slideInAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      friction: 100,
      tension: 100
    }).start();
  };

  hideModal = () => {
    Animated.spring(this.slideInAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
      friction: 100,
      tension: 100
    }).start();
  };

  render() {
    const translateY = this.slideInAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [height, 0]
    });

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"tomato"} />
        <Animated.View
          style={[
            {
              backgroundColor: "transparent",
              height: height,
              translateY,
              position: "absolute",
              width: width,
              zIndex: 1
            }
          ]}
        >
          <ScrollView
            contentContainerStyle={{
              height: height + height / 3.8
            }}
            onScroll={this.handleScroll}
            ref={scroll => (this.scroll = scroll)}
          >
            <TouchableOpacity
              style={{ height: height / 3.8, backgroundColor: "#222222b0" }}
              onPress={() => this.hideModal()}
            />
            <View
              style={{
                height: height / 3,
                backgroundColor: "tomato"
              }}
            />
          </ScrollView>
        </Animated.View>
        <TouchableOpacity onPress={() => this.showModal()}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              overflow: "hidden",
              backgroundColor: "#2222229c"
            }}
          >
            <Image
              source={{
                uri:
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              }}
              style={{ flex: 1, width: null, height: null }}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SlackProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
    // backgroundColor: "tomato"
  }
});
