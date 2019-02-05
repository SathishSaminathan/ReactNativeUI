import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Colors from "../assets/styles/Colors";

class MButton extends Component {
  constructor(props) {
    super(props);
  }

  getTheme() {
    console.log("type value...");
    const { theme } = this.props;
    // if (theme === "RED") {
    //   // return Success;
    // }
    return theme;
  }

  getSize() {
    const { size } = this.props;
    if (size === "XSmall") {
      return XSmall;
    }
    if (size === "Small") {
      return Small;
    }
    if (size === "Medium") {
      return Medium;
    }
    if (size === "Large") {
      return Large;
    }
    return Default;
  }

  getType() {
    console.log("type value...");
    const { type } = this.props;
    if (type === "Icon") {
      return Icon;
    }
    if (type === "CircularIcon") {
      return CircularIcon;
    }
    if (type === "NotificationButton") {
      return NotificationButton;
    }
    if (type === "CircularButton") {
      return CircularButton;
    }
    if (type === "RegularButton") {
      return RegularButton;
    }
    if (type === "SubTextButton") {
      return SubTextButton;
    }
    if (type === "BottomButton") {
      return BottomButton;
    }
    if (type === "ActionButton") {
      return ActionButton;
    }
  }

  render() {
    const theme = this.getTheme();
    const buttonType = this.getType();
    // const sizes = this.getSize();
    const { icon, onPress, label, enabled, type, number } = this.props;
    return (
      <View
        style={[
          {
            alignItems: "center"
          },
          type === "BottomButton" ? buttonType.outerButton : null
        ]}
      >
        <TouchableOpacity
          disabled={!enabled}
          style={[
            styles.btn,
            buttonType.button,
            !enabled && type !== "Icon" ? buttonType.disabledButton : null,
            type === "RegularButton" && icon ? { width: 81, height: 32 } : null,
            buttonType.sizes,
            theme === "INVERTED_RED" && {
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: Colors.themeRed
            },
            theme === "INVERTED_RED" &&
              !enabled && { borderColor: Colors.disabledIcon }
          ]}
          onPress={onPress}
          activeOpacity={0.2}
        >
          {type === "NotificationButton" ? (
            <Text
              style={[
                buttonType.icon,
                !enabled ? buttonType.disabledIcon : null
              ]}
            >
              {number}
            </Text>
          ) : (
            icon && (
              <FontAwesome
                style={[
                  buttonType.icon,
                  !enabled ? buttonType.disabledIcon : null,
                  theme === "INVERTED_RED" && {
                    color: Colors.themeRed
                  },
                  theme === "INVERTED_RED" &&
                    !enabled && { color: Colors.disabledButton }
                ]}
                name={icon === "DELETE" ? "trash" : "heart"}
              />
            )
          )}
          {label &&
            type !== "SubTextButton" &&
            type !== "CircularIcon" &&
            type !== "Icon" &&
            type !== "NotificationButton" && (
              <Text
                style={[
                  buttonType.text,
                  !enabled ? buttonType.disabledText : null,
                  theme === "INVERTED_RED" && {
                    color: Colors.themeRed
                  },
                  theme === "INVERTED_RED" &&
                    !enabled && { color: Colors.disabledButton }
                ]}
              >
                {label}
              </Text>
            )}
        </TouchableOpacity>
        {type === "SubTextButton" && <Text style={buttonType.text}>{label}</Text>}
      </View>
    );
  }
}
export default MButton;

const styles = StyleSheet.create({
  btn: {
    alignSelf: "center"
  }
});

const Icon = StyleSheet.create({
  icon: {
    fontSize: 24,
    color: Colors.themeRed
  },
  button: {
    backgroundColor: "transparent"
  },
  disabledIcon: {
    color: Colors.disabledIcon
  },
  disabledButton: {
    backgroundColor: Colors.disabledButton
  }
});

const CircularIcon = StyleSheet.create({
  icon: {
    fontSize: 24,
    color: Colors.white
  },
  button: {
    backgroundColor: Colors.themeRed,
    width: 40,
    height: 40,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20
  },
  disabledIcon: {
    color: Colors.disabledIcon
  },
  disabledButton: {
    backgroundColor: Colors.disabledButton
  }
});

const NotificationButton = StyleSheet.create({
  icon: {
    fontSize: 12,
    color: Colors.white
  },
  button: {
    backgroundColor: Colors.themeRed,
    width: 24,
    height: 24,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20
  },
  disabledIcon: {
    color: Colors.disabledIcon
  },
  disabledButton: {
    backgroundColor: Colors.disabledButton
  }
});

const CircularButton = StyleSheet.create({
  icon: {
    fontSize: 12,
    color: Colors.white
  },
  text: {
    color: Colors.white,
    marginLeft: 10
  },
  button: {
    backgroundColor: Colors.themeRed,
    width: 81,
    height: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13
  },
  disabledIcon: {
    color: Colors.disabledIcon
  },
  disabledButton: {
    backgroundColor: Colors.disabledButton
  },
  disabledText: {
    color: Colors.disabledIcon
  }
});

const RegularButton = StyleSheet.create({
  icon: {
    fontSize: 12,
    color: Colors.white
  },
  text: {
    color: Colors.white,
    marginLeft: 10
  },
  button: {
    backgroundColor: Colors.themeRed,
    width: 64,
    height: 32,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
  disabledIcon: {
    color: Colors.disabledIcon
  },
  disabledButton: {
    backgroundColor: Colors.disabledButton
  },
  disabledText: {
    color: Colors.disabledIcon
  }
});

const ActionButton = StyleSheet.create({
  icon: {
    fontSize: 16,
    color: Colors.white
  },
  text: {
    color: Colors.white,
    fontSize: 12
  },
  button: {
    backgroundColor: Colors.themeRed,
    width: 60,
    height: 120,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
  disabledIcon: {
    color: Colors.white
  },
  disabledButton: {
    backgroundColor: Colors.disabledButton
  },
  disabledText: {
    color: Colors.white
  }
});

const BottomButton = StyleSheet.create({
  icon: {
    fontSize: 24,
    color: Colors.white
  },
  text: {
    color: Colors.white,
    marginLeft: 10,
    fontSize: 16
  },
  button: {
    backgroundColor: Colors.themeRed,
    width: 359,
    height: 48,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
  disabledIcon: {
    color: Colors.disabledIcon
  },
  disabledButton: {
    backgroundColor: Colors.disabledButton
  },
  disabledText: {
    color: Colors.disabledIcon
  },
  outerButton: {
    backgroundColor: Colors.white,
    width: 375,
    height: 64,
    bottom: 0,
    position: "absolute",
    left: 0,
    flexDirection: "row",
    alignItems: "center"
  }
});

const SubTextButton = StyleSheet.create({
  icon: {
    fontSize: 24,
    color: Colors.themeRed
  },
  text: {
    color: Colors.disabledIcon,
    fontSize: 14
  },
  button: {
    backgroundColor: Colors.white,
    width: 40,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13
  },
  disabledIcon: {
    color: Colors.disabledIcon
  },
  disabledButton: {
    backgroundColor: Colors.disabledButton
  },
  disabledText: {
    color: Colors.disabledIcon
  }
});

MButton.defaultProps = {
  enabled: true,
  size: "Default"
};
