import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { colors, textSize } from "../styles";

export default class Balance extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.balance_info}>
              <Icon
                style={styles.credit_card_icon}
                name="credit-card"
                color={colors.lightgrey}
                size={40}
              />
              <View style={styles.text_panel}>
                <Text style={styles.invoice}>Fatura Atual</Text>
                <Text style={styles.invoice_value}>
                  R$: {this.props.invoiceValue}
                </Text>
                <View style={styles.available_container}>
                  <Text style={styles.available}>Limite disponível </Text>
                  <Text style={styles.available_value}>
                    R$ {this.props.availableValue}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.colorbar}>
              <View style={styles.colorbar_red} />
              <View style={styles.colorbar_blue} />
              <View style={styles.colorbar_green} />
            </View>
          </View>

          <View style={styles.footer}>
            <Icon
              style={styles.footer_icons}
              name="food"
              type="material-community"
              color={colors.lightgrey}
              size={40}
            />
            <Text style={styles.footer_text}>
              Compra mais recente em Pag*Sorvetesrequibom no valor de R$ 6,30
              terça
            </Text>
            <Icon
              style={styles.footer_icons}
              name="keyboard-arrow-right"
              color={colors.lightgrey}
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
  balance_info: {
    flex: 10,
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10
  },
  text_panel: {
    alignItems: "stretch",
    margin: 10
  },
  invoice: {
    fontSize: textSize.enphasis,
    color: colors.lightblue,
    textTransform: "uppercase"
  },
  invoice_value: {
    fontSize: textSize.big,
    color: colors.lightblue
  },
  available_container: {
    flexDirection: "row"
  },
  available: {
    fontSize: textSize.normal,
    color: colors.darkgrey
  },
  available_value: {
    fontSize: textSize.normal,
    color: colors.lightgreen
  },
  credit_card_icon: {
    flex: 1
  },
  colorbar: {
    flex: 0,
    width: 0,
    margin: 20
  },
  colorbar_red: {
    flex: 1,
    width: 0,
    borderColor: colors.lightred,
    borderLeftWidth: barwidth,
    borderRightWidth: barwidth,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5
  },
  colorbar_blue: {
    flex: 2,
    width: 0,
    borderColor: colors.lightblue,
    borderLeftWidth: barwidth,
    borderRightWidth: barwidth
  },
  colorbar_green: {
    flex: 2,
    width: 0,
    borderColor: colors.lightgreen,
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
  footer_text: {
    flex: 4,
    margin: 20,
    fontSize: textSize.normal,
    color: colors.darkgrey
  },
  footer_icons: {
    flex: 1
  }
});
