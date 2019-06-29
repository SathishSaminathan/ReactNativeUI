import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";

const { width, height } = Dimensions.get("window");

class Walkthrough extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          bounces={false}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{ width: width, height: height, backgroundColor: "red" }}
          >
            <Text>One</Text>
          </View>
          <View
            style={{ width: width, height: height, backgroundColor: "blue" }}
          >
            <Text>Two</Text>
          </View>
          <View
            style={{ width: width, height: height, backgroundColor: "green" }}
          >
            <Text>Three</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Walkthrough;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
