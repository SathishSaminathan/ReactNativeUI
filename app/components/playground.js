import React, { Component } from "react";
import {
  View,
  Text,
  Alert,
  Switch,
  ScrollView,
  Dimensions
} from "react-native";

import MBubble from "./MBubble";
import MPage from "./MPage";
import MCard from "./MCard";
import Colors from "../assets/styles/Colors";
import MButton from "./MButton";
import MDialog from "./MDialog";
import MListButton from "./MListButton";
import MFormField from "./MFormField";

const { width, height } = Dimensions.get("window");

export default class PlayGround extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Password: ""
    };
  }

  // setValue = (type, value) => {
  //   this.setState(
  //     {
  //       [type]: value
  //     },
  //     () => {
  //       console.log("Name...", this.state.Name),
  //         console.log("Email...", this.state.Email),
  //         console.log("Password...", this.state.Password);
  //     }
  //   );
  // };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.lightgrey
          // padding: 5
        }}
      >
        {/* <View style={{
          flex:1,
          justifyContent:'space-around'
        }}>
        <MBubble status="Read"  />
        <MBubble status="UnRead"  />
        <MBubble status="Read" action="Delete" />
        <MBubble status="Read" action="More" />
        </View> */}

        {/* <MButton type="CircularIcon" icon="Save" />
        <MButton type="ActionButton" icon="Save" /> */}

        {/* <MPage button="Back" title="Notifications" subtitle="Create an account to continue Create an account to continue.."/> */}

        {/* <View
          style={{
            flex: 0.9,
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <MCard type="Small" />
          <MCard type="Medium" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            paddingTop: 10
          }}
        >
          <MCard type="Card" />
          <MCard type="CardLong" />
        </View> */}
        {/* <MCard type="Large"/> */}
        {/* <MCard type="XLarge"/> */}

        {/* <MDialog type="OK_CANCEL" size="LARGE" buttonStyle="THEME"  buttonPlacement="INLINE_TOP_RIGHT"/> */}

        {/* <MListButton
          icon="plane"
          iconText="Airplane Mode"
          isExpand={true}
          buttonStatus="Connected"
          actionButton={Switch}
        />
        <MListButton
          icon="wifi"
          iconText="Wi-Fi"
          buttonStatus="Connected"
          actionButton=""
        />
        <MListButton
          icon="bluetooth"
          iconText="Bluetooth"
          buttonStatus="on"
          actionButton=""
        />
        <MListButton icon="music" iconText="Cellular" actionButton="" /> */}

        <View
          style={{
            alignItems: "center",
            justifyContent: "space-around",
            height: height / 2
          }}
        >
          <MFormField
            label="Name"
            // labelName="Name"
            icon="person"
            type="INPUT"
            isActive={false}
            isValid={true}
            defaultValue=""
            defaultValues=""
            value=""
            values=""
            validationErrors=""
            // getValue={this.setValue}
          />
          <MFormField
            label="Email Address"
            // labelName="Email"
            icon="mail"
            type="EMAIL"
            isActive={false}
            isValid={false}
            defaultValue=""
            defaultValues=""
            value=""
            values=""
            validationErrors={["Invalid Email Address"]}
            // getValue={this.setValue}
          />
          <MFormField
            label="Confirm Password"
            // labelName="Password"
            icon="lock"
            type="PASSWORD"
            isActive={false}
            isValid={true}
            defaultValue=""
            defaultValues=""
            value=""
            values=""
            validationErrors=""
            // getValue={this.setValue}
          />
        </View>
      </View>
    );
  }
}
