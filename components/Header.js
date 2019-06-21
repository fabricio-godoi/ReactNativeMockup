import React, { Component } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { Theme } from "../styles";

// Display the Logo and the user name
export default class Header extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <View style={styles.container}>
          <View style={styles.containerIconName}>
            <Image
              source={require("../assets/nubanklogo_white.png")}
              style={styles.nubank}
              resizeMode="contain"
            />
            <Text style={styles.name}>{this.props.name}</Text>
          </View>
          <Icon
            name="keyboard-arrow-down"
            color="white"
            style={styles.downArrow}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerIconName: {
    flexDirection: "row",
    alignSelf: "center"
  },
  nubank: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  name: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: Theme.textSize.title
  },
  downArrow: {
    alignSelf: "center"
  }
});
