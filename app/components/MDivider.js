import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import Colors from "../assets/styles/Colors";

const { width, height } = Dimensions.get("window");

class MDivider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { padding } = this.props;
    return (
      <View style={[styles.container, { padding: padding }]}>
        <View style={styles.dividerLine} />
      </View>
    );
  }
}
export default MDivider;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  dividerLine: {
    height: 1,
    backgroundColor: Colors.grey
  }
});

MDivider.defaultProps = {
  padding: 0
};
