import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Colors } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const App = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              props.navigation.navigate("BeerDetails", { beer: test });
            }}
          >
            <Ionicons name="camera-outline" size={32} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  button2: {
    flex: 0.78,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: Colors.blue100,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});

const test = {
  slugs: ["de-brabandere-wittekerke"],
  prices: [],
  awards: [],
  galleryImages: [],
  privateGalleryImages: [],
  available_shops: [],
  categories: [],
  deleted: false,
  hops: [],
  communityNumberOfRatings: 4,
  communityCalculatedRating: 275,
  communityCheerCount: 1,
  communityReviewCount: 1,
  communityCalculatedLookRating: 262.5,
  communityCalculatedTasteRating: 262.5,
  communityCalculatedSmellRating: 287.5,
  communityCalculatedColorRating: 312.5,
  _id: "5cf0365a126cc21263f60e82",
  IBU: 11,
  alcohol: 500,
  rating: 303.3333333333333,
  reviews: 0,
  numberOfRatings: 3,
  description: "",
  int_description:
    "Strong dark orange color with creamy white head. The aroma is light and fruity with a fine bitterness and a dry fruity finish.",
  taste: 300,
  smell: 300,
  look: 266.6666666666667,
  color: 333.3333333333333,
  original_word: 0,
  ratedByUser: false,
  name: "Wittekerke",
  display_name: "De Brabandere Wittekerke",
  brewery: {
    slugs: ["de-brabandere-brouwerij"],
    createdAt: "2017-05-23T19:15:52.029Z",
    deleted: false,
    galleryImages: ["ybntdbaxzza1odrulkw9"],
    _id: "59248a688b6d466eaca5e036",
    name: "De Brabandere Brouwerij",
    country: "BEL",
    region: "West-Vlaanderen",
    homepage: "www.brouwerijdebrabandere.be",
    ZIP: "8531",
    city: "Bavikhove ",
    sinceYear: 1894,
    numberOfRatings: 529,
    rating: 318.14,
    __v: 1,
    int_description:
      "The love of brewing is in the genes of the De Brabandere family. With the best brewers at their side, tradition continues for generation and builds on the rich selection of beers. We have shared this passion with all our employees for years: they literally bring &quot;life to the brewery&quot;. And live in your glass, at home or with friends. Because our passion gives pleasant and sparkling moments with friends a taste.",
    numberOfBeers: 0,
    numberOfCheers: 0,
    reviews: 0,
    image_public_id: "m8x8n5ozxccaz9ycrcfm",
    profile_image:
      "https://res.cloudinary.com/dzt4ytngw/image/upload/v1595503050/m8x8n5ozxccaz9ycrcfm.png",
    description:
      'Die Liebe zum Brauen liegt in den Genen der Familie De Brabandere. Mit den besten Braumeistern an ihrer Seite setzt Generation für Generation die Tradition fort und baut auf der reichen Auswahl an Bieren auf.\n\nDiese Leidenschaft teilen wir seit all den Jahren mit all unseren Mitarbeitern: Sie bringen buchstäblich "Leben in die Brauerei". Und lebe in deinem Glas, zu Hause oder mit Freunden. Weil unsere Leidenschaft angenehmen und prickelnden Momenten mit Freunden Geschmack verleiht.\n\n',
    facebook: "https://www.facebook.com/brouwerijdebrabandere/",
    street: "Rijksweg 33",
    public_url: "https://web.beertasting.club/brewery/de-brabandere-brouwerij",
    primary_slug: "de-brabandere-brouwerij",
    id: "59248a688b6d466eaca5e036",
  },
  beerType: "Wit Bier",
  beerTypeObject: "5a1183c277739c6809e34c0b",
  EAN: "",
  fermentation: "obergärig",
  fermentationObject: "5a1183c2cdaa50c5d9a457f5",
  typeFamily: "Ale (belgisch)",
  typeFamilyObject: "583441e3e009ca5b34c8b682",
  addedFromUser: "581e0e1489148efdcb693ada",
  createdBy: "581e0e1489148efdcb693ada",
  createdAt: "2019-05-30T20:00:26.326Z",
  updatedAt: "2019-05-30T20:00:49.099Z",
  __v: 1,
  image_public_id: "nlzxpoprxrmvmnn56efb",
  profile_image:
    "https://res.cloudinary.com/dzt4ytngw/image/upload/v1559246444/nlzxpoprxrmvmnn56efb.png",
  updatedBy: "581e0e1489148efdcb693ada",
  calculatedRatingCommunityDynamic: 275,
  id: "5cf0365a126cc21263f60e82",
};
