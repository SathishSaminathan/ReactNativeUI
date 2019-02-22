import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Pie from "react-native-pie";
import Colors from "../assets/styles/Colors";

const { width, height } = Dimensions.get("window");
const RESULT_AREA_HEIGHT = 100;
const CHART_AREA_HEIGHT = 500;

class MPieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  calculatePercentage(correct, wrong) {
    if (correct < wrong) return parseInt((correct / wrong) * 100);
    else return parseInt((wrong / correct) * 100);
  }

  render() {
    const { correct, wrong } = this.state;
    const percent = this.calculatePercentage(correct, wrong);
    return (
      <View style={styles.container}>
        <View style={styles.resultArea}>
          <View style={styles.resultTitle}>
            <Text style={styles.title}>Result</Text>
            <View style={styles.indicationArea}>
              <View style={styles.indications}>
                <View style={[styles.indicationIcon, correctAnswer.style]} />
                <Text style={styles.indicationText}>Correct</Text>
              </View>
              <View style={styles.indications}>
                <View style={[styles.indicationIcon, wrongAnswer.style]} />
                <Text style={styles.indicationText}>Wrong</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.chartArea]}>
          <View style={styles.chartStyle}>
            <Pie
              radius={90}
              innerRadius={80}
              //to make donut pie chart define inner radius
              series={
                correct < wrong
                  ? [100 - percent, percent]
                  : [percent, 100 - percent]
              }
              //values to show and color sequentially
              colors={[Colors.red, Colors.darkGreen]}
            />
          </View>
          <View style={styles.percentArea}>
            <Text style={styles.percent}>
              {`${correct < wrong ? percent : 100 - percent}%`} Correct Answers
            </Text>
          </View>
        </View>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}> Play Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}> Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default MPieChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white"
  },
  resultArea: {
    flex: 20,
    paddingHorizontal: 10
  },
  resultTitle: {},
  title: { paddingVertical: 10, fontSize: 30, fontWeight: "bold" },
  indicationArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  indications: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center"
  },
  indicationIcon: {
    width: 15,
    height: 15,
    borderRadius: 7.5
  },
  indicationText: {
    fontSize: 18,
    paddingLeft: 5
  },
  chartArea: {
    flex: 60,
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },
  chartStyle: {
    transform: [{ rotate: "90deg" }],
    alignItems: "center",
    height: 200,
    width: 200,
    flexDirection: "row",
    justifyContent: "center"
  },
  percentArea: {
    width: width / 3
  },
  percent: {
    fontSize: 30,
    textAlign: "center",
    color: Colors.disabledButton
  },
  buttonArea: {
    flex: 20,
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 10
  },
  buttonStyle: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: Colors.themeRed,
    alignItems: "center",
    borderRadius: 10,
    elevation: 5
  },
  buttonText: {
    color: Colors.white
  }
});

const correctAnswer = StyleSheet.create({
  style: {
    backgroundColor: Colors.darkGreen
  }
});
const wrongAnswer = StyleSheet.create({
  style: {
    backgroundColor: Colors.wrongAnswer
  }
});
