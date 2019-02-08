import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Colors from "../assets/styles/Colors";

const { width, height } = Dimensions.get("window");

class MFormField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isFocused: props.isActive,
      showPassword: false
    };
  }

  checkValid() {
    const { isValid } = this.props;
    if (isValid) {
      return IsValid;
    } else {
      return IsNotValid;
    }
  }

  // onChangeText = e => {
  //   console.log("Label...", this.props.labelName);
  //   this.props.getValue(this.props.labelName, e)
  // };

  render() {
    const IsValidOrNot = this.checkValid();
    const {
      label,
      icon,
      type,
      isActive,
      isValid,
      validationErrors
    } = this.props;

    const { showPassword, isFocused, value } = this.state;

    return (
      <View
        style={[
          styles.formFieldArea,
          isFocused && { backgroundColor: Colors.disabledButton }
        ]}
      >
        <View style={styles.iconArea}>
          <Icon style={styles.iconStyle} name={icon} />
        </View>
        <View style={styles.textInputArea}>
          <Text style={styles.labelStyle}>{label}</Text>
          <TextInput
            style={styles.inputStyle}
            ref="Name"
            autoCorrect={false}
            autoCapitalize="sentences"
            placeholder={`${label.toLowerCase()}`}
            onChangeText={value => {
              this.setState({ value });
            }}
            value={value}
            returnKeyType="next"
            onSubmitEditing={() => this.refs.Name.blur()}
            underlineColorAndroid={isValid ? "transparent" : Colors.themeRed}
            selectionColor={Colors.themeRed}
            autoCorrect={false}
            keyboardType={type === "EMAIL" ? "email-address" : "default"}
            secureTextEntry={type === "PASSWORD" && !showPassword && true}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() =>
              this.setState({
                isFocused: false
              })
            }
          />
          {!isValid && (
            <Text style={styles.errorStyle}>{validationErrors.join()}</Text>
          )}
        </View>
        <View
          style={[
            styles.validationArea,
            type === "PASSWORD" && { paddingRight: 10 }
          ]}
        >
          {type === "PASSWORD" && (
            <FontAwesome
              onPress={() => this.setState({ showPassword: !showPassword })}
              style={[
                IsValidOrNot.iconStyle,
                isFocused
                  ? { backgroundColor: Colors.disabledIcon }
                  : {
                      backgroundColor: Colors.disabledButton,
                      color: Colors.disabledIcon
                    }
              ]}
              name={showPassword ? "eye" : "eye-slash"}
            />
          )}
          <Icon
            style={IsValidOrNot.iconStyle}
            name={isValid ? "done" : "close"}
          />
        </View>
      </View>
    );
  }
}
export default MFormField;

const styles = StyleSheet.create({
  formFieldArea: {
    backgroundColor: Colors.disabledIcon,
    width: 339,
    height: 80,
    borderRadius: 10,
    flexDirection: "row",
    overflow: "hidden"
  },
  iconArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1
  },
  iconStyle: {
    fontSize: 32
  },
  textInputArea: {
    // backgroundColor: "yellow",
    flex: 4,
    paddingTop: 5.5
  },
  labelStyle: {
    height: 24,
    // backgroundColor:'red',
    fontSize: 16,
    paddingLeft: 5,
    paddingTop: 5
  },
  inputStyle: {
    fontSize: 16,
    // backgroundColor:'green',
    paddingTop: 5,
    paddingBottom: 8,
    paddingLeft: 5,
    marginBottom: -10
  },
  errorStyle: {
    // backgroundColor:'white',
    height: 16,
    alignSelf: "flex-start",
    paddingLeft: 5,
    color: Colors.themeRed
  },
  validationArea: {
    // backgroundColor: "pink",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1
  }
});

const IsValid = StyleSheet.create({
  iconStyle: {
    backgroundColor: Colors.darkGreen,
    padding: 5,
    borderRadius: 14,
    color: Colors.white
  }
});

const IsNotValid = StyleSheet.create({
  iconStyle: {
    backgroundColor: Colors.themeRed,
    padding: 5,
    borderRadius: 14,
    color: Colors.white
  }
});
