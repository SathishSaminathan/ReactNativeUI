import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Alert,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  TouchableWithoutFeedback
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";

import Colors from "../assets/styles/Colors";

const { width, height } = Dimensions.get("window");
const Small = {
  width: 259,
  height: 216
};
const Medium = {
  width: 359,
  height: 300
};
const Large = {
  width: 359,
  height: 400
};

const OK_CANCEL = [
  {
    yes: "Ok"
  },
  {
    no: "Cancel"
  }
];

const YES_NO = [
  {
    yes: "Yes"
  },
  {
    no: "No"
  }
];

class MDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true
    };
  }

  getSize() {
    const { size } = this.props;

    if (size === "SMALL") {
      return SMALL;
    }
    if (size === "MEDIUM") {
      return MEDIUM;
    }
    if (size === "LARGE") {
      return LARGE;
    }
  }

  getButtonStyles() {
    const { buttonStyle } = this.props;
    if (buttonStyle === "IOS") {
      return IOS;
    }
    if (buttonStyle === "THEME") {
      return THEME;
    }
  }

  getType() {
    const { type } = this.props;
    if (type === "OK_CANCEL") {
      return OK_CANCEL;
    }
    if (type === "YES_NO") {
      return YES_NO;
    }
    return OK_CANCEL;
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    const { type, size, buttonStyle, buttonPlacement } = this.props;
    const dialogSize = this.getSize();
    const buttonStyles = this.getButtonStyles();
    const buttonType = this.getType();
    console.log("buttonType", buttonType);
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.closeModal()}
        >
          <View style={styles.modelArea}>
            <View style={dialogSize.dialogStyle}>
              <View style={dialogSize.dialogCloseArea}>
                {type === "CLOSE" && buttonPlacement === "INLINE_TOP_RIGHT" && (
                  <TouchableOpacity onPress={() => this.closeModal()}>
                    <FontAwesome
                      style={dialogSize.closeIcon}
                      name={type.toLowerCase()}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <View
                style={[
                  dialogSize.dialogContentArea,
                  !buttonStyle && { flex: 1 }
                ]}
              >
                <Text>Dialog type : {type}</Text>
                <Text>Dialog Size : {size}</Text>
                <Text>Button Style : {buttonStyle}</Text>
                <Text>Button Placement : {buttonPlacement}</Text>
              </View>
              {(type === "OK_CANCEL" || type === "YES_NO") && (
                <View
                  style={[
                    dialogSize.dialogButtonArea,
                    buttonStyle === "THEME" && {
                      borderTopWidth: 0,
                      paddingTop: 8
                    }
                  ]}
                >
                  <TouchableOpacity style={buttonStyles.leftButton}>
                    <Text style={buttonStyles.text}>{buttonType[0].yes}</Text>
                  </TouchableOpacity>
                  <View style={buttonStyles.divider} />
                  <TouchableOpacity
                    style={buttonStyles.rightButton}
                    onPress={() => this.closeModal()}
                  >
                    <Text style={buttonStyles.text}>{buttonType[1].no}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {type === "CLOSE" && buttonPlacement === "ISOLATED" && (
              <View style={dialogSize.closeButtonArea}>
                <TouchableOpacity
                  style={dialogSize.closeButton}
                  onPress={() => this.closeModal()}
                >
                  <Text style={dialogSize.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </Modal>
        <Text onPress={() => this.setState({ modalVisible: true })}>Show</Text>
      </View>
    );
  }
}
export default MDialog;

const styles = StyleSheet.create({
  container: {
    // flexBasis:30,
    flex: 1,
    backgroundColor: Colors.disabledIcon
  },
  modelArea: {
    flex: 1,
    backgroundColor: Colors.darkGrey,
    paddingTop: height / 4,
    alignItems: "center"
  }
});

const SMALL = StyleSheet.create({
  dialogStyle: {
    width: Small.width,
    height: Small.height,
    backgroundColor: Colors.white,
    borderRadius: 10
  },
  dialogCloseArea: {
    flexBasis: Small.height / 5,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10
  },
  closeIcon: {
    fontSize: Small.width / 10
  },
  dialogContentArea: {
    paddingTop: 5,
    paddingHorizontal: 10,
    height: Small.height - (Small.height / 5) * 2
  },
  dialogButtonArea: {
    flexBasis: Small.height / 5,
    justifyContent: "space-around",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: Colors.darkGrey
  },
  closeButtonArea: {
    marginTop: 10,
    width: Small.width,
    borderRadius: 13,
    overflow: "hidden"
  },
  closeButton: {
    backgroundColor: Colors.white,
    flexBasis: 48,
    alignItems: "center",
    justifyContent: "space-around"
  },
  closeButtonText: {
    color: Colors.blue
  }
});

const MEDIUM = StyleSheet.create({
  dialogStyle: {
    width: Medium.width,
    height: Medium.height,
    backgroundColor: Colors.white,
    borderRadius: 10,
    overflow: "hidden"
  },
  dialogCloseArea: {
    flexBasis: Medium.height / 5,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10
  },
  closeIcon: {
    fontSize: Medium.width / 10
  },
  dialogContentArea: {
    paddingTop: 8,
    paddingHorizontal: 10,
    height: Medium.height - (Medium.height / 5) * 2
  },
  dialogButtonArea: {
    flexBasis: Medium.height / 5,
    justifyContent: "space-around",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: Colors.darkGrey
  },
  closeButtonArea: {
    marginTop: 10,
    width: Medium.width,
    borderRadius: 13,
    overflow: "hidden"
  },
  closeButton: {
    backgroundColor: Colors.white,
    flexBasis: 48,
    alignItems: "center",
    justifyContent: "space-around"
  },
  closeButtonText: {
    color: Colors.blue
  }
});

const LARGE = StyleSheet.create({
  dialogStyle: {
    width: Large.width,
    height: Large.height,
    backgroundColor: Colors.white,
    borderRadius: 10,
    overflow: "hidden"
  },
  dialogCloseArea: {
    flexBasis: Large.height / 5,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  closeIcon: {
    fontSize: Large.width / 10
  },
  dialogContentArea: {
    paddingTop: 20,
    paddingHorizontal: 10,
    height: Large.height - (Large.height / 5) * 2
  },
  dialogButtonArea: {
    flexBasis: Large.height / 5,
    justifyContent: "space-around",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: Colors.darkGrey
  },
  closeButtonArea: {
    marginTop: 10,
    width: Large.width,
    borderRadius: 13,
    overflow: "hidden"
  },
  closeButton: {
    backgroundColor: Colors.white,
    flexBasis: 48,
    alignItems: "center",
    justifyContent: "space-around"
  },
  closeButtonText: {
    color: Colors.blue
  }
});

const IOS = StyleSheet.create({
  leftButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  divider: {
    width: 1,
    backgroundColor: Colors.darkGrey
  },
  rightButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderLeftColor: Colors.darkGrey
  },
  text: {
    color: Colors.blue
  }
});

const THEME = StyleSheet.create({
  leftButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around"
  },
  divider: {
    width: 1,
    backgroundColor: Colors.white
  },
  rightButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    borderLeftColor: Colors.darkGrey
  },
  text: {
    color: Colors.white,
    backgroundColor: Colors.themeRed,
    paddingHorizontal: 15,
    paddingVertical: 2.5,
    borderRadius: 10
  }
});

MDialog.defaultProps = {
  buttonStyle: "THEME",
  type: "OK_CANCEL",
  size: "SMALL"
};
