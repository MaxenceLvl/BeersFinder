import { initializeApp, getApps } from "firebase/app";
import {
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Alert } from "react-native";
import { updateUser } from "./data/api";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXX",
  authDomain: "xxxxxxxxxxxxxxxxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxxxxxxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

export const signUp = async (login, password, firstName, lastName) =>
    createUserWithEmailAndPassword(getAuth(), login, password).then( (res) => {
        if (getAuth().currentUser) {
            userId = getAuth().currentUser.uid;
            if (userId) {
                updateUser({
                    firstName: firstName,
                    lastName: lastName,
                    id: login,
                    avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
                    beers: [],
                })
            }
          }
        }).catch(() => 
          Alert.alert(
            "Register failed",
            "User already exist"
          )
        );

export const signUserIn = async (login, password) =>
  signInWithEmailAndPassword(getAuth(), login, password).catch(() =>
    Alert.alert(
      "Authentification échouée",
      "Vos identifiants n'ont pas été reconnus"
    )
  );

export const signUserOut = async () => signOut(getAuth());
