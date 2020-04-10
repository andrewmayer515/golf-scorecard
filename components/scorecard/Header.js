import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#0a7b43",
  },
  text: {
    color: "white",
  },
});

export default Header;
