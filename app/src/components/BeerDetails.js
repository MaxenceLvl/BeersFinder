import React, { useContext, useState } from "react";
import { View, Image, Text, Alert } from "react-native";
import screensStyles from "../screens/Styles";
import FavoriteButton from "./FavoriteButton";
import { createBeer, updateBeersUser } from "../data/api";
import { UserContext } from "../data/UserContext";
import Flag from "react-native-round-flags";

const BeerDetails = (props) => {
  const { userid, user } = useContext(UserContext);

  const beer = props.route.params.beer;
  const brewery = props.route.params.beer.brewery;

  const breweryImages = brewery.galleryImages;
  const breweryGallery = [];
  const beerIds = [];

  if (userid != null && user != null) {
    for (let index = 0; index < user.beers.length; index++) {
      const element = user.beers[index]._path.segments[1];
      beerIds.push(element);
    }
  }

  const [userBeerIds, setUserBeerIds] = useState(beerIds);
  // REGEX to get URL fot the futur images
  let re =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*\/)/;
  var regex = new RegExp(re);
  if (brewery.profile_image != null) {
    const url = brewery.profile_image;
    const urlBrewery = url.match(regex)[0];
    for (let step = 0; step < breweryImages.length; step++) {
      breweryGallery.push(`${urlBrewery}${breweryImages[step]}.png`);
    }
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

  const UserNull = () => (
    <FavoriteButton
      title="Add to Favorite"
      onPress={() => {
        Alert.alert(
          "You are not connected",
          "You need to be connect to add this beer to your favorite"
        );
      }}
    />
  );

  const UserNotNull = () =>
    userBeerIds.includes(beer.id) ? (
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
    );

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
        <View style={{ flexDirection: "row", backgroundColor: "#f6da7c" }}>
          <View style={screensStyles.beerdetailsView}>
            <Text style={screensStyles.breweryText}>{beer.name}</Text>
            <View style={screensStyles.beerDetailsView2}>
              <Flag
                code={breweryCode}
                style={{ width: 32, height: 32, marginRight: 10 }}
              />
              <View style={screensStyles.verticleLine} />
              <Text style={{ marginLeft: 10 }}>{brewery.name}</Text>
            </View>
          </View>
          <View style={screensStyles.beerDetailsView3}>
            {beer.profile_image != null ? (
              <Image
                style={screensStyles.imageDetails}
                source={{
                  uri: beer.profile_image,
                }}
                resizeMode="contain"
              />
            ) : (
              <View style={screensStyles.image}>
                <Text style={screensStyles.beerDetailsText}>
                  Photo Unavailable
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={screensStyles.beerDetailsView4}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={screensStyles.label}>Alcool :</Text>
            <Text style={screensStyles.text}>{beer.alcohol / 100}%</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={screensStyles.label}>Type :</Text>
            <Text style={screensStyles.text}>{beer.typeFamily}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={screensStyles.label}>Description :</Text>
            {beer.int_description != "" ? (
              <Text style={screensStyles.text}>{beer.int_description}</Text>
            ) : (
              <Text style={screensStyles.text}>No description for this</Text>
            )}
          </View>
        </View>
        {user == null ? <UserNull /> : <UserNotNull />}
        {/* {userBeerIds.includes(beer.id) ? (
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
        )} */}
      </View>
    </View>
  );
};

export default BeerDetails;
