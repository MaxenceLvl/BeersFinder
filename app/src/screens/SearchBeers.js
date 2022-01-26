import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import screensStyles from "./Styles";
import { getBeers } from "../data/apiBeer";
import BeerCard from "../components/BeerCard";

const SearchBeer = (props) => {
  const [beer, setBeer] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, paddingTop: 24, backgroundColor: "#ecf0f1" }}
    >
      <View style={screensStyles.containerDetail}>
        <TextInput
          value={search}
          onChangeText={(txt) => {
            setSearch(txt);
            getBeers(txt).then((data) => setBeer(data));
          }}
          placeholder="Find a beer ..."
          style={{
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        />
        <ScrollView>
          {beer != null ? (
            beer.map((b) => (
              <BeerCard
                beer={b}
                onPress={() => {
                  props.navigation.navigate("BeerDetails", { beer: b });
                }}
              />
            ))
          ) : (
            <Text style={{ paddingLeft: 18, paddingTop: 20 }}>
              ↑ Tapez le nom de la bière que vous cherchez
            </Text>
          )}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SearchBeer;
