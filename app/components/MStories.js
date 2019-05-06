import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Colors from "../assets/styles/Colors";

const { width, height } = Dimensions.get("window");
const WIDTH = 345;
const HEIGHT = 2;
const LOOPSTART = 0;

class MStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  renderLine = () => {
    const { numberOfSeenStories, numberOfStories, customStories } = this.state;
    let text = [];
    for (i = LOOPSTART; i <= numberOfStories; i++) {
      text.push(
        <View
          style={[
            styles.lineStyle,
            i < numberOfSeenStories && { backgroundColor: Colors.deepLight },
            customStories &&
              customStories[i] && { backgroundColor: customStories[i] },
            { width: WIDTH / numberOfStories }
          ]}
        />
      );
    }
    return text;
  };

  render() {
    return <View style={styles.container}>{this.renderLine()}</View>;
  }
}
export default MStories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: WIDTH
    // alignSelf:'center'
  },
  lineStyle: {
    height: HEIGHT,
    backgroundColor: Colors.iconBackground,
    marginHorizontal: 2
  }
});
