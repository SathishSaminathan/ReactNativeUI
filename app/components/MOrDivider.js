import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Colors from "../assets/styles/Colors";

const { width, height } = Dimensions.get("window");
const HEIGHT = {
  CONTAINERHEIGHT: 32,
  DIVIDERHEIGHT: 1
};

class MOrDivider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { padding } = this.props;
    return (
      <View style={[styles.container, { padding: padding }]}>
        <View>
          <View style={styles.dividerLine} />
          <Text style={styles.text}>or</Text>
        </View>
      </View>
    );
  }
}
export default MOrDivider;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: HEIGHT.CONTAINERHEIGHT,
    position: "relative",
  },
  dividerLine: {
    height: 1,
    backgroundColor: Colors.grey,
    marginTop: HEIGHT.CONTAINERHEIGHT / 2
  },
  text: {
    fontSize: 16,
    backgroundColor: Colors.grey,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: Colors.white,
    borderRadius: 20,
    alignSelf: "center",
    position: "absolute",
    top: HEIGHT.DIVIDERHEIGHT 
  }
});

MOrDivider.defaultProps = {
  padding: 0
};
