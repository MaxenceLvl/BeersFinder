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
} from "react-native";
import { Card } from "react-native-paper";
import Button from "../components/Button";
import { UserContext } from "../data/UserContext";
import screensStyles from "./Styles";

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
        <ActivityIndicator color="#FFA701" />
      </View>
    );
  }

  return (
    <View style={screensStyles.container}>
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
          <View style={[screensStyles.center, { alignItems: "stretch" }]}>
            {editing ? (
              <TextInput
                value={firstName}
                onChangeText={setFirstName}
                style={[
                  screensStyles.input,
                  { marginVertical: 16, width: 160 },
                ]}
              />
            ) : (
              <Text style={[{ marginVertical: 26 }]}>
                Bonjour {user.firstName} !
              </Text>
            )}
          </View>
          <View style={[{ alignItems: "stretch" }]}>
            {editing ? (
              <TextInput
                value={lastName}
                onChangeText={setLastName}
                style={[{ marginVertical: 16, width: 160 }]}
              />
            ) : (
              <Text style={[{ marginVertical: 26 }]}>
                Bonjour {user.lastName} !
              </Text>
            )}
          </View>
          <Button
            title={editing ? "Valider" : "Editer mon profil"}
            style={[{ width: 160 }]}
            onPress={editing ? validate : () => setEditing(true)}
          />
          <Button
            title="Me déconnecter"
            style={{ width: 160 }}
            onPress={logout}
          />
        </View>
      </Card>
    </View>
  );
};

export default Profile;
