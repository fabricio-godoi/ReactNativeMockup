import React, { Component } from "react";
import {
  View,
  Dimensions,
  Animated,
  StyleSheet,
  ScrollView
} from "react-native";

/**
 * Page Viewer.
 * Note: This component is intend to use all screen width, so it is not wise to use horizontal margin in the parent
 */
export default class Paginator extends Component {
  // Page transition between pages
  scrollX = new Animated.Value(0);

  constructor() {
    super();

    // This calculates the new width of the device screen after rotation (portrait / landscape)
    const getWidthOnRotation = () => {
      return Dimensions.get("screen").width;
    };

    // When the screen rotates, update the screen width
    this.state = {
      screenWidth: getWidthOnRotation()
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener("change", () => {
      this.setState({
        screenWidth: getWidthOnRotation()
      });
    });
  }

  render() {
    // Current pagination position (from 0 to components.length-1)
    let position = Animated.divide(this.scrollX, this.state.screenWidth);
    return (
      <View style={this.props.style}>
        <View style={styles.container}>
          <ScrollView
            style={styles.paginator}
            pagingEnabled={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            // Add animation event callback when changing the page
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: this.scrollX } } }
            ])}
            scrollEventThrottle={16} // Ensure to be called no longer than 16ms between function call
          >
            {/* Get a list of components to be inserted in the paginator */}
            {this.props.components.map((component, i) => {
              return (
                /* Set a key for each component, and make it fit the size of the window width */
                <View
                  key={i}
                  style={[styles.page, { width: this.state.screenWidth }]}
                >
                  {component}
                </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicator}>
            {this.props.components.map((_, i) => {
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
                outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
                extrapolate: "clamp" // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
              });
              return (
                <Animated.View // Animation of the indicators
                  key={i} // Using index of the array to be sure that the keys are unique
                  // style={[styles.indicator_item]}
                  style={[styles.indicatorItem, { opacity }]}
                  /* style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }} */
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  paginator: {
    flex: 0
  },
  page: {
    justifyContent: "center",
    alignItems: "center"
  },
  indicator: {
    flex: 1,
    margin: 5,
    flexDirection: "row" // Dots in a row
  },
  indicatorItem: {
    height: 10,
    width: 10,
    backgroundColor: "#f0f0f0",
    margin: 8,
    borderRadius: 5
  }
});
