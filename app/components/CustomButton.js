import React, { Component } from "react";
import {  Text, StyleSheet,TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class CustomButton extends Component {
  getTheme() {
    const { theme } = this.props;
    if (theme === "RED") {
      return Success;
    }
    // return Info;
  }

  render() {
    const { theme, icon, onPress, label, type } = this.props;
    return (
      <TouchableOpacity
        style={[styles.btn, styles.CircularButton]}
        
      >
        <FontAwesome name={icon} onPress={onPress}/>
        {/* {label && <Text> {label} </Text>} */}
      </TouchableOpacity>
    );
  }
}
export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    alignItems: 'center',
  },
  CircularButton: {
    backgroundColor: "#FF2956"
  }
});

const Success = StyleSheet.create({
  main: {
    backgroundColor: "#1abc9c"
  }
});

const Default = StyleSheet.create({
  main: {
    backgroundColor: "#e74c3c"
  },
  label: {
    color: "#ffffff"
  }
});

const CircularButton = StyleSheet.create({
  // backgroundColor:"#FF2956"
});
