import React, { Component } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { textSize } from "../styles";

// Display the Logo and the user name
export default class Header extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <View style={styles.container}>
          <View style={styles.icon_name_container}>
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
            style={styles.down_arrow}
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
  icon_name_container: {
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
    fontSize: textSize.title
  },
  down_arrow: {
    alignSelf: "center"
  }
});
