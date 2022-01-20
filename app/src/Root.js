import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { UserContext } from "./data/UserContext";

import Login from "./screens/Login";
import SearchBeer from "./screens/SearchBeers";
import screensStyles from "./screens/Styles";

export default function Root() {
  const [loading, setLoading] = useState(true);
  const { checkUser, userid } = useContext(UserContext);

  useEffect(() => {
    const launch = async () => {
      await checkUser();
      setLoading(false);
    };
    launch();
  }, []);

  if (loading)
    return (
      <View style={[screensStyles.container, screensStyles.center]}>
        <ActivityIndicator color="#0000BB" />
      </View>
    );

  return userid.length > 0 ? <SearchBeer /> : <Login />;
}
