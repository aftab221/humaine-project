import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  TextInput
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonLight from "../components/MaterialButtonLight";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import CupertinoSegmentWithFourTabs from "../components/CupertinoSegmentWithFourTabs";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/Screenshot_39.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.welcomeAmmar}>Welcome, Ammar</Text>
          <EntypoIcon name="user" style={styles.icon}></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect2}>
        <View style={styles.loremIpsumRow}>
          <Text style={styles.loremIpsum}>
            Case#1235 - gasteronology : you are asked to check the patient who
            is feeling pain in abdomen tak a full history{"\n"} and suggest the
            medication.
          </Text>
          <MaterialButtonLight
            style={styles.materialButtonLight}
          ></MaterialButtonLight>
        </View>
      </View>
      <View style={styles.image2StackStackStack}>
        <View style={styles.image2StackStack}>
          <View style={styles.image2Stack}>
            <ImageBackground
              source={require("../assets/images/01-1.jpg")}
              resizeMode="cover"
              style={styles.image2}
              imageStyle={styles.image2_imageStyle}
            >
              <IoniconsIcon
                name="md-volume-off"
                style={styles.icon3}
              ></IoniconsIcon>
              <FeatherIcon name="mic" style={styles.icon4}></FeatherIcon>
            </ImageBackground>
            <MaterialUnderlineTextbox
              style={styles.materialUnderlineTextbox}
            ></MaterialUnderlineTextbox>
          </View>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.name4Row}>
                <Text style={styles.name4}>name:</Text>
                <TextInput
                  placeholder="enter name here"
                  placeholderTextColor="rgba(74,144,226,1)"
                  textBreakStrategy="highQuality"
                  style={styles.name}
                ></TextInput>
              </View>
              <View style={styles.age3Row}>
                <Text style={styles.age3}>Age:</Text>
                <TextInput
                  placeholder="enter age here"
                  placeholderTextColor="rgba(74,144,226,1)"
                  style={styles.enterAgeHere}
                ></TextInput>
              </View>
              <View style={styles.pcRow}>
                <Text style={styles.pc}>PC:</Text>
                <TextInput
                  placeholder="Abdominal pain"
                  placeholderTextColor="rgba(74,144,226,1)"
                  style={styles.abdominalPain}
                ></TextInput>
              </View>
              <View style={styles.hpcRow}>
                <Text style={styles.hpc}>HPC:</Text>
                <TextInput
                  placeholder="Started one week ago"
                  placeholderTextColor="rgba(74,144,226,1)"
                  style={styles.startedOneWeekAgo}
                ></TextInput>
              </View>
              <View style={styles.ddxRow}>
                <Text style={styles.ddx}>DDX:</Text>
                <TextInput
                  placeholder="? gastitirs"
                  placeholderTextColor="rgba(74,144,226,1)"
                  style={styles.gastitirs}
                ></TextInput>
              </View>
              <View style={styles.textInputRow}>
                <TextInput
                  placeholder="Enter Diagnosis"
                  style={styles.textInput}
                ></TextInput>
                <CupertinoButtonInfo
                  style={styles.cupertinoButtonInfo}
                ></CupertinoButtonInfo>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.rect3}>
          <View style={styles.icon2Row}>
            <MaterialIconsIcon
              name="record-voice-over"
              style={styles.icon2}
            ></MaterialIconsIcon>
            <Text style={styles.loremIpsum3}>
              hold space to talk to the patient, or type your response here.
            </Text>
          </View>
        </View>
      </View>
      <CupertinoSegmentWithFourTabs
        style={styles.cupertinoSegmentWithFourTabs}
      ></CupertinoSegmentWithFourTabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 34
  },
  rect: {
    width: 1366,
    height: 118,
    flexDirection: "row"
  },
  image: {
    width: 258,
    height: 96
  },
  welcomeAmmar: {
    color: "rgba(74,144,226,1)",
    fontSize: 25,
    fontFamily: "roboto-regular",
    lineHeight: 35,
    marginLeft: 763,
    marginTop: 31
  },
  icon: {
    color: "rgba(74,144,226,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 16,
    marginTop: 28
  },
  imageRow: {
    height: 96,
    flexDirection: "row",
    flex: 1,
    marginRight: 60,
    marginLeft: 32,
    marginTop: 16
  },
  rect2: {
    width: 1290,
    height: 107,
    backgroundColor: "rgba(245,234,182,1)",
    borderColor: "rgba(155,155,155,1)",
    borderWidth: 0,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 32
  },
  loremIpsum: {
    color: "rgba(103,65,32,1)",
    fontSize: 21,
    fontFamily: "roboto-regular",
    lineHeight: 29
  },
  materialButtonLight: {
    width: 100,
    height: 36,
    borderRadius: 100,
    marginLeft: 86,
    marginTop: 11
  },
  loremIpsumRow: {
    height: 58,
    flexDirection: "row",
    flex: 1,
    marginRight: 39,
    marginLeft: 22,
    marginTop: 26
  },
  image2: {
    top: 0,
    left: 0,
    width: 855,
    height: 553,
    position: "absolute",
    borderRadius: 28,
    overflow: "hidden"
  },
  image2_imageStyle: {},
  icon3: {
    color: "rgba(74,144,226,1)",
    fontSize: 40,
    height: 40,
    width: 30,
    marginTop: 68,
    marginLeft: 45
  },
  icon4: {
    color: "rgba(74,144,226,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 20,
    marginLeft: 40
  },
  materialUnderlineTextbox: {
    top: 64,
    left: 841,
    position: "absolute",
    height: 0,
    width: 0,
    opacity: 0
  },
  image2Stack: {
    top: 0,
    left: 0,
    width: 1065,
    height: 553,
    position: "absolute"
  },
  scrollArea: {
    top: 0,
    left: 883,
    width: 391,
    height: 680,
    backgroundColor: "rgba(245,245,245,1)",
    position: "absolute",
    borderColor: "rgba(230,230,230,1)",
    borderWidth: 0,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderLeftWidth: 3
  },
  scrollArea_contentContainerStyle: {
    width: 391,
    height: 680
  },
  name4: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 27,
    marginLeft: -3,
    marginTop: 8
  },
  name: {
    width: 160,
    height: 49,
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 35,
    marginLeft: 25,
    marginTop: -3
  },
  name4Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 95,
    marginLeft: 47,
    marginRight: 104
  },
  age3: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 27,
    marginLeft: -3,
    marginTop: -3
  },
  enterAgeHere: {
    width: 142,
    height: 34,
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 27,
    marginLeft: 5,
    marginTop: -3
  },
  age3Row: {
    height: 34,
    flexDirection: "row",
    marginLeft: 47,
    marginRight: 157
  },
  pc: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 27,
    marginLeft: -3,
    marginTop: 3
  },
  abdominalPain: {
    width: 142,
    height: 40,
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 27,
    marginLeft: 25,
    marginTop: -3
  },
  pcRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 43,
    marginLeft: 47,
    marginRight: 147
  },
  hpc: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 27,
    marginLeft: -3,
    marginTop: -3
  },
  startedOneWeekAgo: {
    width: 215,
    height: 27,
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 27,
    marginLeft: 21,
    marginTop: -3
  },
  hpcRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 47,
    marginRight: 63
  },
  ddx: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 27,
    marginLeft: -3,
    marginTop: 8
  },
  gastitirs: {
    width: 184,
    height: 38,
    color: "#121212",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 27,
    marginLeft: 21,
    marginTop: -3
  },
  ddxRow: {
    height: 38,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 49,
    marginRight: 94
  },
  textInput: {
    width: 251,
    height: 86,
    color: "#121212",
    borderRadius: 18,
    borderColor: "rgba(28,28,28,1)",
    borderWidth: 2,
    fontSize: 25,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  cupertinoButtonInfo: {
    width: 100,
    height: 86,
    marginLeft: 3
  },
  textInputRow: {
    height: 86,
    flexDirection: "row",
    marginTop: 200,
    marginLeft: 17,
    marginRight: 20
  },
  image2StackStack: {
    top: 0,
    left: 0,
    width: 1274,
    height: 680,
    position: "absolute"
  },
  rect3: {
    top: 579,
    left: 0,
    width: 855,
    height: 101,
    position: "absolute",
    borderRadius: 24,
    borderColor: "rgba(74,144,226,1)",
    borderWidth: 1,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(74,144,226,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  loremIpsum3: {
    color: "rgba(103,65,32,1)",
    fontSize: 23,
    fontFamily: "roboto-700",
    lineHeight: 25,
    marginLeft: 19,
    marginTop: 7
  },
  icon2Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 91,
    marginLeft: 85,
    marginTop: 35
  },
  image2StackStackStack: {
    width: 1274,
    height: 680,
    marginTop: 28,
    marginLeft: 32
  },
  cupertinoSegmentWithFourTabs: {
    width: 928,
    height: 71,
    marginTop: 22,
    marginLeft: 32
  }
});

export default Untitled;
