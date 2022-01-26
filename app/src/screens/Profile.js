import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Keyboard,
  Alert,
  Image,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-paper";
import Button from "../components/Button";
import { UserContext } from "../data/UserContext";
import screensStyles from "./Styles";
import Constants from "expo-constants";

const inputStyle = [screensStyles.input2, screensStyles.margin];

const Profile = () => {
  const { user, logout, modifyUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [editing, setEditing] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => setIsKeyboardOpen(true));
    Keyboard.addListener("keyboardDidHide", () => setIsKeyboardOpen(false));
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow");
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);

  const validate = () => {
    if (firstName.length === 0) {
      Alert.alert("Erreur", "Votre nom d'utilisateur ne peut pas être vide !");
    } else {
      modifyUser({ name: firstName });
      setEditing(false);
    }
  };

  if (user == null) {
    return (
      <View style={[screensStyles.container, screensStyles.center]}>
        <ImageBackground
          source={require("../img/beer_background.png")}
          style={[screensStyles.image]}
        >
          <ActivityIndicator color="#FFA701" />
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={[screensStyles.containerDetail]}>
      <ImageBackground
        source={require("../img/beer_background.png")}
        style={[screensStyles.image]}
      >
        <Card
        // style={
        //   isKeyboardOpen ? profileStyles.cardKeyboardOpen : profileStyles.card
        // }
        >
          <View>
            {editing ? (
              <UploadButton />
            ) : (
              <View>
                {user.avatar ? (
                  <Image source={{ uri: user.avatar }} />
                ) : (
                  <Ionicons name="person" color="#FFFFFF" size={32} />
                )}
              </View>
            )}
            <View style={{ alignItems: "stretch" }}>
              <Text style={[inputStyle]}>
                Bonjour {user.firstName} {user.lastName} !
              </Text>
            </View>
            {/* <View style={[{ alignItems: "stretch" }]}>
            {editing ? (
              <TextInput
                value={lastName}
                onChangeText={setLastName}
                style={[inputStyle]}
              />
            ) : (
              <Text style={[inputStyle]}>{user.lastName} !</Text>
            )}
          </View> */}
            <Button
              title={editing ? "Valider" : "Editer mon profil"}
              style={[screensStyles.button]}
              onPress={editing ? validate : () => setEditing(true)}
            />
            <Button
              title="Me déconnecter"
              style={[screensStyles.button]}
              onPress={logout}
            />
          </View>
        </Card>
      </ImageBackground>
    </View>
  );
};

export default Profile;
