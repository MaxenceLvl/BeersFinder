import { Alert } from "react-native";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    Alert.alert(
      "Erreur lors de la récupération des données",
      err.message
    );
  }
};

const sendData = async (url, data, method) => {
  try {
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    Alert.alert(
      "Erreur lors de la mise à jour des données",
      err.message
    );
  }
};

export const createBeer = async (beerField, userId) => 
    sendData(
        `https://europe-west1-beersfinder-233e4.cloudfunctions.net/beers?id=${beerField.id}&userId=${userId}`,
        beerField,
        "POST"
    );


export const getUser = async (userId) =>
  getData(
    `https://europe-west1-beersfinder-233e4.cloudfunctions.net/user?id=${userId}`
  );

export const updateUser = async (userFields) =>
  sendData(
    `https://europe-west1-beersfinder-233e4.cloudfunctions.net/user?id=${userFields.id}`,
    userFields,
    "PATCH"
  );
