import React, { Component } from "react";
import { View, Text, Alert } from "react-native";

import MBubble from "./MBubble";
import MPage from "./MPage";
import MCard from "./MCard";
import Colors from "../assets/styles/Colors";
import MButton from "./MButton";

export default class PlayGround extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _sample=()=>{
    Alert.alert("hai")
  }
  _sample1=()=>{
    Alert.alert("Tamil")
  }


  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.lightgrey,
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

        {/* <MButton type="CircularIcon" icon="Save" onPress={()=>this._sample()}/>
        <MButton type="ActionButton" icon="Save" onPress={()=>this._sample1()}/> */}

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

      </View>
    );
  }
}
