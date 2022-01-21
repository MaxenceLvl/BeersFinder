import React, { useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import Constants from "expo-constants";
import Button from "../components/Button";
import screensStyles from "./Styles";
import { UserContext } from "../data/UserContext";
import SignUp from "./SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackActions } from "@react-navigation/native";

const LoginStack = createNativeStackNavigator();

const loginStyles = StyleSheet.create({
  card: {
    padding: 32,
  },
});

const inputStyle = [screensStyles.input, screensStyles.margin];

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);
  return (
    <View
      style={[
        screensStyles.container,
        { paddingTop: Constants.statusBarHeight + 8 },
      ]}
    >
      <Card style={loginStyles.card}>
        <Text style={screensStyles.title}>Welcome Back!</Text>
        <Text style={[screensStyles.title, screensStyles.margin]}>
          Please Login
        </Text>
        <TextInput
          placeholder="Login"
          style={inputStyle}
          value={email}
          onChangeText={(txt) => setEmail(txt)}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={inputStyle}
          value={password}
          onChangeText={(txt) => setPassword(txt)}
          secureTextEntry
        />
        <Button
          title="Sign In"
          style={inputStyle}
          onPress={() => {
            login(email, password);
          }}
        />
        <Button
          title="Register"
          style={inputStyle}
          onPress={() => {
            props.navigation.navigate("SignUp");
          }}
        />
      </Card>
    </View>
  );
};

export default Login;
