import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get("window");

class MenuAnimation extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    // this.zIndexValue
    this.state = {
      menuOpened: false
    };
  }

  toggleMenu = () => {
    this.setState({ menuOpened: !this.state.menuOpened });
    const { menuOpened } = this.state;
    if (menuOpened) {
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 500
      }).start();
    } else {
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 500
      }).start();
    }
  };

  render() {
    const { menuOpened } = this.state;

    const translateY = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-20, 80]
    });

    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.5]
    });

    return (
      <View style={{ flex: 1, position: "relative" }}>
        <View
          style={{
            height: 60,
            width: width,
            backgroundColor: "lightblue",
            justifyContent: "center",
            padding: 10,
            position: "absolute",
            zIndex: 3
          }}
        >
          <Icon
            name="more-vertical"
            style={{ alignSelf: "flex-end", fontSize: 20 }}
            onPress={() => {
              this.toggleMenu();
            }}
          />
        </View>
        <Animated.View
          style={[
            {
              zIndex: 2,
              position: "absolute",
              height: 80,
              width: width,
              backgroundColor: "tomato",
              top: -20,
              left: 0,
              flex: 1,
              flexDirection: "row",
              translateY
            }
          ]}
        >
          <TouchableOpacity activeOpacity={0.8} style={styles.menuButtons}>
            <View style={styles.itemStyles}>
              <Icon name="send" style={{ fontSize: 24 }} />
              <Text>Send</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtons}>
            <View style={styles.itemStyles}>
              <Icon name="search" style={{ fontSize: 24 }} />
              <Text>Set as Lost</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButtons}>
            <View style={styles.itemStyles}>
              <Icon name="cloud-snow" style={{ fontSize: 24 }} />
              <Text>Send</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={[
            {
              backgroundColor: "black",
              position: "absolute",
              bottom: 0,
              height: height - 80,
              width: width
            },
            { opacity },
            !menuOpened ? { zIndex: 1 } : { zIndex: -1 }
          ]}
        />
        <View style={{ paddingTop: 60 }}>
          <Text
            style={{
              position: "absolute",
              top: height / 2 - 60,
              left: width / 3,
              zIndex: 1,
              fontSize: 30
            }}
          >
            Welcome
          </Text>
          <Image
            source={require("../../assets/images/background.png")}
            style={{ width: width, height: height }}
          />
        </View>
      </View>
    );
  }
}

export default MenuAnimation;

const styles = StyleSheet.create({
  menuButtons: {
    backgroundColor: "white",
    flex: 1
  },
  itemStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
