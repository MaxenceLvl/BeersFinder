import React, { useContext, useState } from "react";
import { View, Image, Text } from "react-native";
import screensStyles from "../screens/Styles";
import FavoriteButton from "./FavoriteButton";
import { createBeer, updateBeersUser } from "../data/api";
import { UserContext } from "../data/UserContext";
import Flag from "react-native-round-flags";

const BeerDetails = (props) => {
  const { userid, user } = useContext(UserContext);

  const beerIds = [];
  for (let index = 0; index < user.beers.length; index++) {
    const element = user.beers[index]._path.segments[1];
    beerIds.push(element);
  }

  const [userBeerIds, setUserBeerIds] = useState(beerIds);

  console.log(userBeerIds);

  const beer = props.beer;
  const brewery = props.beer.brewery;

  const breweryImages = brewery.galleryImages;
  const breweryGallery = [];

  // REGEX pour chopper l'url pour les images
  let re =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*\/)/;
  var regex = new RegExp(re);
  const url = brewery.profile_image;
  const urlBrewery = url.match(regex)[0];

  for (let step = 0; step < breweryImages.length; step++) {
    breweryGallery.push(`${urlBrewery}${breweryImages[step]}.png`);
  }

  const beerField = {
    IBU: beer.IBU,
    alcohol: beer.alcohol,
    beerType: beer.beerType,
    description: beer.int_description,
    display_name: beer.name,
    fermentation: beer.fermentation,
    id: beer.id,
    profile_image: beer.profile_image,
    typeFamily: beer.typeFamily,
    brewery: {
      city: brewery.city,
      country: brewery.country,
      description: brewery.int_description,
      homepage: brewery.homepage,
      id: brewery.id,
      master_brewer: brewery.master_brewer,
      name: brewery.name,
      profile_image: brewery.profile_image,
      region: brewery.region,
      sinceYear: brewery.sinceYear,
      street: brewery.street,
      gallery: breweryGallery,
    },
  };

  const breweryCode = brewery.country.substring(0, 2);

  const updateBeer = () => {
    {
      const array = [...userBeerIds];
      const index = array.indexOf(beer.id);
      if (index !== -1) {
        array.splice(index, 1);
        setUserBeerIds(array);
      }
    }
  };

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
        <Text style={screensStyles.title}>BeerDetails</Text>
        <View style={{ flexDirection: "row", backgroundColor: "#f6da7c" }}>
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              marginTop: 30,
              marginLeft: 16,
            }}
          >
            <Text style={screensStyles.breweryText}>{props.beer.name}</Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 50,
                alignItems: "center",
              }}
            >
              <Flag
                code={breweryCode}
                style={{ width: 32, height: 32, marginRight: 10 }}
              />
              <View style={screensStyles.verticleLine} />
              <Text style={{ marginLeft: 10 }}>{props.beer.brewery.name}</Text>
            </View>
          </View>
          <View
            style={{
              height: 200,
              width: "100%",
              flex: 1,
              marginBottom: 40,
              marginTop: 30,
            }}
          >
            {props.beer.profile_image != null ? (
              <Image
                style={screensStyles.imageDetails}
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
        </View>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={screensStyles.label}>Alcool :</Text>
            <Text style={screensStyles.text}>{props.beer.alcohol / 100}%</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={screensStyles.label}>Type :</Text>
            <Text style={screensStyles.text}>{props.beer.typeFamily}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={screensStyles.label}>Description :</Text>
            {props.beer.int_description != "" ? (
              <Text style={screensStyles.text}>
                {props.beer.int_description}
              </Text>
            ) : (
              <Text style={screensStyles.text}>No description for this</Text>
            )}
          </View>
        </View>
        {userBeerIds.includes(beer.id) ? (
          <FavoriteButton
            title="Remove from Favorite"
            onPress={() => {
              updateBeersUser(user.id, beerField, beer.id);
              updateBeer();
            }}
          />
        ) : (
          <FavoriteButton
            title="Add to Favorite"
            onPress={() => {
              createBeer(beerField, userid);
              setUserBeerIds([...userBeerIds, beer.id]);
            }}
          />
        )}
      </View>
    </View>
  );
};

export default BeerDetails;
