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
import {
  Theme,
  Icons,
  Bubbles,
  FormField,
  ButtonConst
} from "../assets/styles/themes";
import MDivider from "./MDivider";
import MOrDivider from "./MOrDivider";
import MStories from "./MStories";
import TextAnimation from "./Animation/TextAnimation";
import FlipAnimation from "./Animation/FlipAnimation";
import MTab from "./MTab";

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
          backgroundColor: Colors.white
          // padding: 5
        }}
      >
        {/* <View style={{
          flex:1,
          justifyContent:'space-around'
        }}>
        <MBubble status={Bubbles.Status.READ}  />
        <MBubble status={Bubbles.Status.UNREAD}  />
        <MBubble status={Bubbles.Status.READ} action={Bubbles.Action.MORE} />
        <MBubble status={Bubbles.Status.UNREAD} action={Bubbles.Action.DELETE} />
        </View> */}

        {/* <MButton type={ButtonConst.Type.CIRCULARICON} icon="Save" /> */}
        {/* <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <MButton
              theme={Theme.RED}
              icon={Icons.SAVE}
              type={ButtonConst.Type.NOTIFICATIONBUTTON}
              number={1}
              size="Large"
              enabled={true}
              label="Save"
              onPress={this.onPress}
            />
            <MButton
              theme={Theme.RED}
              icon={Icons.SAVE}
              type={ButtonConst.Type.ICON}
              number={1}
              size="Large"
              enabled={true}
              label="Save"
              onPress={this.onPress}
            />
            <MButton
              theme={Theme.RED}
              icon={Icons.SAVE}
              type={ButtonConst.Type.CIRCULARICON}
              number={1}
              size="Large"
              enabled={true}
              label="Save"
              onPress={this.onPress}
            />
            <MButton
              theme={Theme.RED}
              icon={Icons.SAVE}
              type={ButtonConst.Type.CIRCULARBUTTON}
              number={1}
              size="Large"
              enabled={true}
              label="Save"
              onPress={this.onPress}
            />
            <MButton
              theme={Theme.RED}
              icon={Icons.SAVE}
              type={ButtonConst.Type.REGULARBUTTON}
              number={1}
              size="Large"
              enabled={true}
              label="Save"
              onPress={this.onPress}
            />

            <MButton
              theme={Theme.RED}
              icon={Icons.SAVE}
              type={ButtonConst.Type.ACTIONBUTTON}
              number={1}
              size="Large"
              enabled={true}
              label="Save"
              onPress={this.onPress}
            />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <MButton
              theme={Theme.RED}
              icon={Icons.SAVE}
              type={ButtonConst.Type.NOTIFICATIONBUTTON}
              number={1}
              size="Large"
              enabled={false}
              label="Save"
              onPress={this.onPress}
            />
            <MButton
              theme={Theme.RED}
              icon={Icons.SAVE}
              type={ButtonConst.Type.ICON}
              number={1}
              size="Large"
              enabled={false}
              label="Save"
              onPress={this.onPress}
            />
            <MButton
              theme={Theme.RED}
              icon={Icons.SAVE}
              type={ButtonConst.Type.CIRCULARICON}
              number={1}
              size="Large"
              enabled={false}
              label="Save"
              onPress={this.onPress}
            />
            <MButton
              theme={Theme.RED}
              icon={Icons.SAVE}
              type={ButtonConst.Type.CIRCULARBUTTON}
              number={1}
              size="Large"
              enabled={false}
              label="Save"
              onPress={this.onPress}
            />
            <MButton
              theme={Theme.RED}
              icon={Icons.SAVE}
              type={ButtonConst.Type.REGULARBUTTON}
              number={1}
              size="Large"
              enabled={false}
              label="Save"
              onPress={this.onPress}
            />

            <MButton
              theme={Theme.RED}
              icon={Icons.SAVE}
              type={ButtonConst.Type.ACTIONBUTTON}
              number={1}
              size="Large"
              enabled={false}
              label="Save"
              onPress={this.onPress}
            />
          </View>
          <MButton
            theme={Theme.RED}
            icon={Icons.SAVE}
            type={ButtonConst.Type.BOTTOMBUTTON}
            number={1}
            size="Large"
            enabled={false}
            label="Save"
            onPress={this.onPress}
          />
        </View> */}
        {/* <MButton type={ButtonConst.Type.CIRCULARBUTTON} icon={Icons.DELETE} theme={Theme.RED} label="Delete"/> */}

        {/* <MPage button={Icons.BACK} title="Notifications" subtitle="Create an account to continue Create an account to continue.."/> */}

        {/* <View
          style={{
            flex: 0.9,
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <MCard type={ButtonConst.Size.SMALL} />
          <MCard type={ButtonConst.Size.MEDIUM} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            paddingTop: 10
          }}
        >
          <MCard type={ButtonConst.Size.CARD} />
          <MCard type={ButtonConst.Size.CARDLONG} />
        </View> */}
        {/* <MCard type={ButtonConst.Size.LARGE}/>
        <MCard type={ButtonConst.Size.XLARGE}/> */}

        {/* <MDialog type={ButtonConst.Type.CLOSE} size={ButtonConst.Size.SMALL} buttonStyle={ButtonConst.Style.THEME}  buttonPlacement={ButtonConst.Placement.INLINE_TOP_RIGHT}/> */}

        {/* <MListButton
          icon={Icons.PLANE}
          iconText="Airplane Mode"
          isExpand={true}
          buttonStatus="Connected"
          actionButton={Switch}
        />
        <MListButton
          icon={Icons.WIFI}
          iconText="Wi-Fi"
          buttonStatus="Connected"
          actionButton=""
        />
        <MListButton
          icon={Icons.BLUETOOTH}
          iconText="Bluetooth"
          buttonStatus="on"
          actionButton=""
        />
        <MListButton icon={Icons.MUSIC} iconText="Cellular" actionButton="" /> */}

        {/* <View
          style={{
            alignItems: "center",
            justifyContent: "space-around",
            height: height / 2
          }}
        >
          <MFormField
            label="Name"
            // labelName="Name"
            icon={Icons.PERSON}
            type={FormField.Type.INPUT}
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
            icon={Icons.MAIL}
            type={FormField.Type.EMAIL}
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
            icon={Icons.PASSWORD}
            type={FormField.Type.PASSWORD}
            isActive={false}
            isValid={true}
            defaultValue=""
            defaultValues=""
            value=""
            values=""
            validationErrors=""
            // getValue={this.setValue}
          />
        </View> */}

        {/* <Text>Stories</Text>
        <MOrDivider/>
        <View
          style={{
            height: height / 2,
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          <MStories numberOfSeenStories={2} numberOfStories={3} />
          <MStories
            numberOfSeenStories={5}
            numberOfStories={6}
            customStories={["#4CD964", "#FF2956", "#4CD964", "#FF2956"]}
          />
          <MStories
            numberOfSeenStories={4}
            numberOfStories={8}
            customStories={["#4CD964", "#FF2956", "#4CD964", "#FF2956"]}
          />
        </View> */}
        {/* <TextAnimation/> */}
        <FlipAnimation/>
        {/* <MTab
          tabs={["CATEGORIES", "QUESTIONS", "TESTS"]}
          activeTab="CATEGORIES"
          disabledTab={["QUESTIONS", "TESTS"]}
        /> */}
      </View>
    );
  }
}
