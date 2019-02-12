import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../assets/styles/Colors";
import { ButtonConst } from "../assets/styles/themes";

class MCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getType() {
    const { type } = this.props;

    switch (type) {
      case ButtonConst.Size.CARDLONG:
        return CardLong;

      case ButtonConst.Size.SMALL:
        return Small;

      case ButtonConst.Size.MEDIUM:
        return Medium;

      case ButtonConst.Size.LARGE:
        return Large;

      case ButtonConst.Size.XLARGE:
        return XLarge;

      default:
        return Card;
    }
  }

  render() {
    const cardType = this.getType();
    const { type, width, height } = this.props;
    return (
      <View style={styles.cardArea}>
        <View
          style={[
            styles.card,
            cardType.style,
            width && { width: width },
            height && { height: height }
          ]}
        >
          <View style={styles.cardContent}>
            <Text style={styles.text}>{type}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default MCard;

const styles = StyleSheet.create({
  cardArea: {
    // backgroundColor:Colors.white
  },
  card: {
    elevation: 5,
    backgroundColor: Colors.white,
    paddingBottom: 1
  },
  cardContent: {},
  text: {
    fontSize: 20,
    color: Colors.disabledIcon,
    padding: 10
  }
});

const Card = StyleSheet.create({
  style: {
    width: 154,
    height: 240
  }
});

const CardLong = StyleSheet.create({
  style: {
    width: 154,
    height: 193
  }
});

const Small = StyleSheet.create({
  style: {
    width: 359,
    height: 87
  }
});

const Medium = StyleSheet.create({
  style: {
    width: 359,
    height: 257
  }
});

const Large = StyleSheet.create({
  style: {
    width: 359,
    height: 368
  }
});

const XLarge = StyleSheet.create({
  style: {
    width: 359,
    height: 480
  }
});
