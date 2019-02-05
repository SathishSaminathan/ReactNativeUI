import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MBubble from './MBubble';
import MPage from './MPage';

export default class PlayGround extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{
        flex:1,
      }}>
        {/* <View style={{
          flex:1,
          justifyContent:'space-around'
        }}>
        <MBubble status="Read"  />
        <MBubble status="UnRead"  />
        <MBubble status="Read" action="Delete" />
        <MBubble status="Read" action="More" />
        </View> */}

        <MPage button="Back" title="Notifications" subtitle="Create an account to continue Create an account to continue.."/>
      </View>
    );
  }
}
