import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { UserContext } from "./data/UserContext";

import Navigation from "./Navigation";
import Login from "./screens/Login";
import screensStyles from "./screens/Styles";

export default function Root() {
  const [loading, setLoading] = useState(true);
  const { checkUser, userid } = useContext(UserContext);

  const image = { uri: "https://reactjs.org/logo-og.png" };

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
        <ActivityIndicator color="#FFA701" />
      </View>
    );

  return userid.length > 0 ? <Navigation /> : <Login />;
}
