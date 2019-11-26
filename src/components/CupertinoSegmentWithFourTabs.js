import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";

function CupertinoSegmentWithFourTabs(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => console.log("Navigate to Untitled1")}
          style={styles.button}
        >
          <View style={styles.group2}>
            <TouchableOpacity
              onPress={() => console.log("Navigate to Untitled1")}
              style={styles.button2}
            >
              <TouchableOpacity style={styles.segmentTextWrapper1}>
                <Text style={styles.transcript}>Transcript</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper2}>
          <TextInput
            placeholder="Hints"
            placeholderTextColor="rgba(74,144,226,1)"
            style={styles.textInput}
          ></TextInput>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper3}>
          <Text style={styles.text3}>Solution</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper4}>
          <Text style={styles.text4}>Discussion Board</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    width: 200,
    height: 50
  },
  group2: {
    width: 200,
    height: 50
  },
  button2: {
    width: 200,
    height: 50
  },
  segmentTextWrapper1: {
    width: 200,
    height: 50,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#007AFF",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  transcript: {
    width: 132,
    height: 35,
    color: "#FFFFFF",
    alignSelf: "center",
    justifyContent: "space-between",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 35,
    textAlign: "center"
  },
  segmentTextWrapper2: {
    width: 200,
    height: 50,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    width: 49,
    height: 20,
    color: "#007AFF",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  segmentTextWrapper3: {
    width: 200,
    height: 50,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center"
  },
  text3: {
    color: "#007AFF",
    fontSize: 20,
    fontFamily: "roboto-regular"
  },
  segmentTextWrapper4: {
    width: 200,
    height: 50,
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  text4: {
    color: "#007AFF",
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "center"
  },
  buttonRow: {
    height: 50,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 8,
    marginTop: 5
  }
});

export default CupertinoSegmentWithFourTabs;
