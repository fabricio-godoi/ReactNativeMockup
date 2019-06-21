/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, FlatList, StatusBar } from "react-native";
import { Header, FriendIndicator, Paginator, Balance } from "./components";
import { Theme } from "./styles";

type Props = {};
export default class App extends Component<Props> {
  render() {
    // Create some mockup data for display
    let balances = [];
    let friends = [];
    for (let i = 0; i < 8; i++) {
      balances.push(
        <Balance invoiceValue={"539,22"} availableValue={"539,22"} />
      );
      friends.push({ key: "" + i, content: <FriendIndicator /> });
    }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Theme.colors.purple} />

        <Header style={styles.header} name="Sara" />
        <View style={styles.body}>
          <Paginator style={styles.body} components={balances} />
        </View>
        <View style={styles.footer}>
          <FlatList
            style={{ flex: 1 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={friends}
            renderItem={({ item }) => item.content}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: Theme.colors.purple,
    color: "white"
  },
  header: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 20
  },
  body: {
    justifyContent: "space-around",
    alignItems: "center",
    flex: 20,
    // Cannot use margin left|right to not mess with the Paginator
    marginTop: 10,
    marginBottom: 10
  },
  footer: {
    flex: 5,
    margin: 10,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
