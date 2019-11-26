import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonInfo(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>Submit{"\n"}&amp; End</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(78,133,196,0.54)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 5
  },
  caption: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 20
  }
});

export default CupertinoButtonInfo;
