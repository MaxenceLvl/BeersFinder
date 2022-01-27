import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  Keyboard,
  Alert,
  Image,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Card } from "react-native-paper";
import Button from "../components/Button";
import { UserContext } from "../data/UserContext";
import BeerCard from "../components/BeerCard";
import screensStyles from "./Styles";
import { getBeerBy } from "../data/api";
import beers from "../data/beers";

const inputStyle = [screensStyles.input2, screensStyles.margin];

const Profile = () => {
  const { user, userid, logout, modifyUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [editing, setEditing] = useState(false);
  // const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  // useEffect(() => {
  //   Keyboard.addListener("keyboardDidShow", () => setIsKeyboardOpen(true));
  //   Keyboard.addListener("keyboardDidHide", () => setIsKeyboardOpen(false));
  //   return () => {
  //     Keyboard.removeAllListeners("keyboardDidShow");
  //     Keyboard.removeAllListeners("keyboardDidHide");
  //   };
  // }, []);

  const beerIds = [];

  if (userid != null && user != null) {
    for (let index = 0; index < user.beers.length; index++) {
      const element = user.beers[index]._path.segments[1];
      beerIds.push(element);
    }
  }

  console.log(beers);

  // const example = async (beersIds) => {
  //   if (beersIds) {
  //     for (const b of beersIds) {
  //       console.log(b);
  //       const res = await getBeerBy(b);
  //       console.log(res);
  //     }
  //   }
  // };

  // example(beerIds);
  // console.log(beers);

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
      <ScrollView>
        <ImageBackground
          source={require("../img/beer_background.png")}
          style={[screensStyles.image]}
        >
          <Card style={{ borderWidth: 2, borderRadius: 14 }}>
            <View>
              <View>
                {user.avatar ? (
                  <Image
                    source={{ uri: user.avatar }}
                    style={screensStyles.avatar}
                  />
                ) : (
                  <Ionicons name="person" color="#FFFFFF" size={32} />
                )}
              </View>
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
              {/* <Button
              title={editing ? "Valider" : "Editer mon profil"}
              style={[screensStyles.button]}
              onPress={editing ? validate : () => setEditing(true)}
            /> */}
              <Button
                title="Me déconnecter"
                style={[screensStyles.button]}
                onPress={logout}
              />
            </View>
          </Card>
          <Card style={{ marginTop: 10 }}>
            <View>
              {user != null ? (
                beers.map((b) => (
                  <BeerCard
                    beer={b}
                    onPress={() => {
                      props.navigation.navigate("BeerDetails", { beer: b });
                    }}
                  />
                ))
              ) : (
                <Text>No favorite beer add one ! </Text>
              )}
            </View>
          </Card>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Profile;
