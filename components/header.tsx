import React from "react";
import { Animated, StyleSheet, Text } from "react-native";

const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 200;

const Header = ({ scrollYAnimatedValue }) => {
  const headerHeight = scrollYAnimatedValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp"
  });
  return (
    <Animated.View
      style={[styles.animatedHeaderContainer, { height: headerHeight }]}
    >
      <Text style={styles.headerText}>Animated Header</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedHeaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: "blue"
  },
  headerText: {
    color: "white",
    fontSize: 22
  }
});

export default Header;
