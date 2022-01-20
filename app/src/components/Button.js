import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: "#FFA701",
    borderRadius: 8,
    padding: 8,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFFFFF",
  },
});

const Button = (props) => (
  <TouchableHighlight
    onPress={props.onPress}
    underlayColor="#FFA701"
    style={[buttonStyles.container, props.style]}
  >
    <Text style={buttonStyles.title}>{props.title}</Text>
  </TouchableHighlight>
);

export default Button;
