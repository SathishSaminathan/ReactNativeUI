import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";

import Colors from "../assets/styles/Colors";
import { Icons } from "../assets/styles/themes";

const { width, height } = Dimensions.get("window");

class MListButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trueSwitchIsOn: true,
      isSwitchOn: false,
      colorTrueSwitchIsOn: true,
      colorFalseSwitchIsOn: false,
      eventSwitchIsOn: false
    };
  }

  render() {
    const { icon, iconText, isExpand, buttonStatus, actionButton } = this.props;
    const { isSwitchOn } = this.state;
    const ActionButton = actionButton;
    return (
      <View style={styles.container}>
        <View style={styles.listArea}>
          <View style={styles.leftIcon}>
            {/* <Text> */}
            {/* {icon} */}
            {/* {iconText} {isExpand} {buttonStatus} {actionButton} */}
            {/* </Text> */}
            <FontAwesome style={styles.iconStyle} name={icon} />
          </View>
          <View style={styles.rightArea}>
            <View style={styles.rightContent}>
              <View style={styles.iconTextArea}>
                <Text style={styles.iconText}>{iconText}</Text>
              </View>
              <View style={styles.isExpandButtonStatus}>
                {buttonStatus && (
                  <Text style={styles.buttonStatusStyle}>{buttonStatus}</Text>
                )}
                {actionButton ? (
                  <ActionButton
                    style={styles.actionButtonStyle}
                    onValueChange={isSwitchOn => this.setState({ isSwitchOn })}
                    thumbTintColor={Colors.white}
                    onTintColor={
                      isSwitchOn ? Colors.themeRed : Colors.disabledButton
                    }
                    // tintColor="#ff0000"
                    value={this.state.isSwitchOn}
                  />
                ) : (
                  <Icon
                    style={styles.isExpandStyle}
                    name={Icons.ARROWRIGHT}
                  />
                )}
              </View>
              <View />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default MListButton;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: 200,
    // backgroundColor: Colors.white,
    // marginVertical: 10,
    // borderTopWidth: 1,
    // borderTopColor: Colors.darkGrey,
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.darkGrey
  },
  listArea: {
    width: 375,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white
  },
  leftIcon: {
    backgroundColor: Colors.green,
    width: 30,
    height: 30,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "space-around",
    marginLeft: 15,
    marginRight: 15
  },
  iconStyle: {
    color: Colors.white,
    fontSize: 20
  },
  rightArea: {
    flex: 1,
    marginRight: 16
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.disabledIcon,
    justifyContent: "space-between",
    paddingBottom: 3
  },
  iconTextArea: {
    flex: 1
  },
  iconText: {
    fontSize: 16,
    color: Colors.black
  },
  isExpandButtonStatus: {
    alignItems: "center",
    flexDirection: "row"
  },
  buttonStatusStyle: {
    fontSize: 16,
    color: Colors.disabledButton
  },
  actionButtonStyle: {
    paddingHorizontal: 2
  },
  isExpandStyle: {
    fontSize: 20,
    paddingHorizontal: 15,
    color: Colors.disabledButton
  }
});

MListButton.propTypes = {
  // actionButton : PropTypes.object
};
