import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

const { width, height } = Dimensions.get("window");

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);

class MTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "first", title: "First" },
        { key: "second", title: "Second" }
      ]
    };
  }

  componentWillMount() {
    let routes = {};
    const { tabs } = this.props;
    console.log("Tabs...", tabs);
    // tabs.forEach(element => {
    //     var route = [];
    //   console.log("element...", element.toLowerCase());
    //   routes.key = `${element.toLowerCase()}`;
    //   routes.title = `${element}`;
    //   console.log("routes...", routes)
    //   route.push(routes)
    //   console.log('outside routes...', route)
    // });
    var route = [];
    for (let i = 0; i < tabs.length; i++) {
      console.log(i);
      routes.key = tabs[i].toLowerCase();
      routes.title = tabs[i];
      route.push(routes);
      console.log("tabs[i]...", tabs[i].toLowerCase());
    }
    console.log("outside routes...", route);

    // this.setState({ routes: route },()=> console.log("routes...", routes));
  }

  render() {
    return (
      <TabView
        style={{
          color: "red"
        }}
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{
          width: width,
          height: height
        }}
      />
    );
  }
}
export default MTab;

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  tabBar: {
    flexDirection: "row",
    paddingTop: 10
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16
  }
});
