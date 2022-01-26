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
    style={screensStyles.touchableHighlightView}
  >
    <Card style={screensStyles.cardContainer}>
      <View style={{ flexDirection: "row", paddingTop: 18 }}>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text style={screensStyles.beerCard1}>{props.beer.name}</Text>
          <Text style={screensStyles.beerTextCard}>
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
            <Text style={screensStyles.beerTextCard2}>Photo Unavailable</Text>
          </View>
        )}
      </View>
      <Text style={screensStyles.beerTextCard3}>
        {props.beer.alcohol / 100}%
      </Text>
    </Card>
  </TouchableHighlight>
);

export default BeerCard;
