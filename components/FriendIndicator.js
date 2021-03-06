import React, { Component } from "react";
import { Theme } from "../styles";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Alert
} from "react-native";
import { Icon } from "react-native-elements";

export default class Footer extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            Alert.alert(
              "Amigo indicado",
              "Um novo amigo foi indicado",
              [{ text: "OK", onPress: () => {} }],
              { cancelable: true }
            );
          }}
        >
          <View style={styles.container}>
            <Icon name="person-outline" color="white" />
            <Text style={styles.textInfo}>Indicar amigos</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Theme.colors.lightpurple,
    borderRadius: 5,
    alignItems: "flex-start",
    padding: 4,
    margin: 5
  },
  button: {
    width: 100,
    height: 100
  },
  iconPerson: {
    flex: 1
  },
  textInfo: {
    flex: 3,
    textAlignVertical: "bottom",
    color: "white",
    fontSize: Theme.textSize.small
  }
});
