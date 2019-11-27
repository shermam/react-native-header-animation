import React from "react";
import { View, Text, Animated, StyleSheet, FlatList } from "react-native";

const array = new Array(75).fill(0).map((e, i) => `Row #${i}`);

const Body = ({ scrollYAnimatedValue }) => {
  return (
    <View>
      <FlatList
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollYAnimatedValue } } }
        ])}
        style={styles.container}
        data={array}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        keyExtractor={item => item}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    backgroundColor: "yellow"
  },
  item: {
    backgroundColor: "white",
    margin: 8,
    height: 45,
    justifyContent: "center",
    alignItems: "center"
  },
  itemText: {
    color: "black",
    fontSize: 16
  }
});

export default Body;
