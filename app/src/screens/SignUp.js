import React, { useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import { Card } from "react-native-paper";
import Constants from "expo-constants";
import Button from "../components/Button";
import screensStyles from "./ScreensStyles";
import { UserContext } from "../data/UserContext";

const loginStyles = StyleSheet.create({
  card: {
    padding: 32,
  },
});

const inputStyle = [screensStyles.input, screensStyles.margin];

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { register } = useContext(UserContext);

  return (
    <View
      style={[
        screensStyles.container,
        { paddingTop: Constants.statusBarHeight + 8 },
      ]}
    >
      <Card style={loginStyles.card}>
        <Text style={screensStyles.title}>Welcome !</Text>
        <Text style={[screensStyles.title, screensStyles.margin]}>
          Merci de vous authentifier
        </Text>
        <TextInput
          placeholder="First Name"
          style={inputStyle}
          value={firstName}
          onChangeText={(txt) => setFirstName(txt)}
        />
        <TextInput
          placeholder="Last Name"
          style={inputStyle}
          value={lastName}
          onChangeText={(txt) => setLastName(txt)}
        />
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
        <TextInput
          placeholder="Confirm Password"
          style={inputStyle}
          value={confirmPassword}
          onChangeText={(txt) => setConfirmPassword(txt)}
          secureTextEntry
        />
        <Button
          title="Register Now"
          onPress={() => {
            if (password === confirmPassword) {
              register(email, password, firstName, lastName);
            } else {
              Alert.alert(
                "Password doesn't match",
                "Check your password"
              )
            }
          }}
        />
      </Card>
    </View>
  );
};

export default SignUp;
