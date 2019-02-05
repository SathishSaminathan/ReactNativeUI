import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MBubble from './MBubble';

export default class PlayGround extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View style={{
          flex:1,
          justifyContent:'space-around'
        }}>
        <MBubble status="Read"  />
        <MBubble status="UnRead"  />
        <MBubble status="Read" action="Delete" />
        <MBubble status="Read" action="More" />
        </View>
      </View>
    );
  }
}
