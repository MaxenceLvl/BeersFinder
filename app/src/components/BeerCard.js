import React from "react";
import { Card } from "react-native-paper";
import {
  TouchableHighlight,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";
import screensStyles from "../screens/Styles";

const BeerCard = (props) => (
  <TouchableHighlight
    key={props}
    onPress={props.onPress}
    underlayColor="#fac353"
    style={{
      paddingTop: 18,
      paddingLeft: 18,
      paddingRight: 18,
      paddingBottom: 18,
      borderRadius: 18,
    }}
  >
    <Card style={screensStyles.cardContainer}>
      <View style={{ flexDirection: "row", paddingTop: 18 }}>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text
            style={{
              maxHeight: 250,
              paddingLeft: 16,
              flexWrap: "wrap",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {props.beer.name}
          </Text>
          <Text
            style={{
              flexWrap: "wrap",
              fontSize: 14,
              paddingLeft: 16,
              paddingTop: 16,
            }}
          >
            {props.beer.brewery.name}
          </Text>
        </View>
        {props.beer.profile_image != null ? (
          <Image
            style={screensStyles.image}
            source={{
              uri: props.beer.profile_image,
            }}
            resizeMode="contain"
          />
        ) : (
          <View style={screensStyles.image}>
            <Text
              style={{
                flex: 1,
                fontWeight: "bold",
                fontSize: 22,
                textAlign: "center",
                paddingTop: 50,
              }}
            >
              Photo Unavailable
            </Text>
          </View>
        )}
      </View>
      <Text
        style={{
          flex: 1,
          maxHeight: 250,
          flexWrap: "wrap",
          fontWeight: "bold",
          fontSize: 16,
          color: "#53a9fa",
          paddingBottom: 30,
          paddingLeft: 16,
        }}
      >
        {props.beer.alcohol / 100}%
      </Text>
    </Card>
  </TouchableHighlight>
);

export default BeerCard;
