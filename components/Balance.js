import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { Theme } from "../styles";

export default class Balance extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.balanceInfo}>
              <Icon
                style={styles.iconCreditCard}
                name="credit-card"
                color={Theme.colors.lightgrey}
                size={40}
              />
              <View style={styles.textPanel}>
                <Text style={styles.invoice}>Fatura Atual</Text>
                <Text style={styles.invoiceValue}>
                  R$: {this.props.invoiceValue}
                </Text>
                <View style={styles.availableContainer}>
                  <Text style={styles.available}>Limite disponível </Text>
                  <Text style={styles.availableValue}>
                    R$ {this.props.availableValue}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.colorbar}>
              <View style={styles.colorbarRed} />
              <View style={styles.colorbarBlue} />
              <View style={styles.colorbarGreen} />
            </View>
          </View>

          <View style={styles.footer}>
            <Icon
              style={styles.footerIcons}
              name="food"
              type="material-community"
              color={Theme.colors.lightgrey}
              size={40}
            />
            <Text style={styles.footerText}>
              Compra mais recente em Pag*Sorvetesrequibom no valor de R$ 6,30
              terça
            </Text>
            <Icon
              style={styles.footerIcons}
              name="keyboard-arrow-right"
              color={Theme.colors.lightgrey}
              size={20}
            />
          </View>
        </View>
      </View>
    );
  }
}

const barwidth = 7;

// Check the width of the component based on the screen width, even when in landscape the width should be the same
// Unless the screen is too small to place the component, then use the screen width
const balanceWidth = () => {
  if (Dimensions.get("screen").width > 350) {
    return 350;
  } else {
    return Dimensions.get("screen").width - 50; // Margin of 50
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: balanceWidth(),
    backgroundColor: "white"
  },
  body: {
    flex: 4,
    flexDirection: "row",
    padding: 15
  },
  balanceInfo: {
    flex: 10,
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10
  },
  textPanel: {
    alignItems: "stretch",
    margin: 10
  },
  invoice: {
    fontSize: Theme.textSize.enphasis,
    color: Theme.colors.lightblue,
    textTransform: "uppercase"
  },
  invoiceValue: {
    fontSize: Theme.textSize.big,
    color: Theme.colors.lightblue
  },
  availableContainer: {
    flexDirection: "row"
  },
  available: {
    fontSize: Theme.textSize.normal,
    color: Theme.colors.darkgrey
  },
  availableValue: {
    fontSize: Theme.textSize.normal,
    color: Theme.colors.lightgreen
  },
  iconCreditCard: {
    flex: 1
  },
  colorbar: {
    flex: 0,
    width: 0,
    margin: 20
  },
  colorbarRed: {
    flex: 1,
    width: 0,
    borderColor: Theme.colors.lightred,
    borderLeftWidth: barwidth,
    borderRightWidth: barwidth,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5
  },
  colorbarBlue: {
    flex: 2,
    width: 0,
    borderColor: Theme.colors.lightblue,
    borderLeftWidth: barwidth,
    borderRightWidth: barwidth
  },
  colorbarGreen: {
    flex: 2,
    width: 0,
    borderColor: Theme.colors.lightgreen,
    borderLeftWidth: barwidth,
    borderRightWidth: barwidth,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5
  },
  footer: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "lightgrey"
  },
  footerText: {
    flex: 4,
    margin: 20,
    fontSize: Theme.textSize.normal,
    color: Theme.colors.darkgrey
  },
  footerIcons: {
    flex: 1
  }
});
