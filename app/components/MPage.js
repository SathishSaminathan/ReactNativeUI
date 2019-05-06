import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import MButton from "../components/MButton";
import Colors from "../assets/styles/Colors";
import {ButtonConst} from "../assets/styles/themes";

class MPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { button, title, subtitle } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.buttonArea}>
          <MButton type={ButtonConst.Type.CIRCULARICON} icon={button} />
        </View>
        <View style={styles.titleArea}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.subtitleArea}>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    );
  }
}
export default MPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingTop: 18,
    paddingLeft: 10,
    backgroundColor: Colors.white
  },
  buttonArea: {},
  titleArea: {
    paddingTop: 18,
    paddingBottom: 5
  },
  title: { fontSize: 28 },
  subtitleArea: { width: "80%" },
  subtitle: {}
});
