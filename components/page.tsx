import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import Header from "./header";
import Body from "./body";

const scrollYAnimatedValue = new Animated.Value(0);

const Page = () => {
  return (
    <View style={styles.container}>
      <Header scrollYAnimatedValue={scrollYAnimatedValue} />
      <View>
        <Body scrollYAnimatedValue={scrollYAnimatedValue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red"
  }
});

export default Page;
