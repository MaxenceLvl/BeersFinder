import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, style } from "react-native";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import SearchBeers from "./screens/SearchBeers";
import BeerDetails from "./components/BeerDetails";
import CameraScan from "./components/CameraScan";
import Profile from "./screens/Profile";

const LoginStack = createNativeStackNavigator();
const RootTab = createBottomTabNavigator();
const ScanStack = createNativeStackNavigator();
const BeerStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Profile") {
              iconName = focused ? "beer" : "beer-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Scan") {
              iconName = focused ? "camera" : "camera-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FFA701",
          tabBarInactiveTintColor: "#000000",
        })}
      >
        <RootTab.Screen
          name="Profile"
          options={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
          }}
        >
          {() => (
            <LoginStack.Navigator>
              {/* <LoginStack.Screen
                name="Profile"
                options={() => {
                  return {
                    title: "Profil utilisateur",
                  };
                }}
                component={Profile}
              /> */}
              <LoginStack.Screen
                name="Login"
                options={() => {
                  return {
                    title: "",
                  };
                }}
                component={Login}
              />
              <LoginStack.Screen name="SignUp" component={SignUp} />
            </LoginStack.Navigator>
          )}
        </RootTab.Screen>
        <RootTab.Screen
          name="Search"
          options={{ title: "Search", headerShown: false }}
        >
          {() => (
            <BeerStack.Navigator>
              <BeerStack.Screen name="Search Beer" component={SearchBeers} />
              <BeerStack.Screen name="BeerDetails" component={BeerDetails} />
            </BeerStack.Navigator>
          )}
        </RootTab.Screen>
        <RootTab.Screen
          name="Scan"
          options={{ title: "ScanSearch", headerShown: false }}
        >
          {() => (
            <ScanStack.Navigator>
              <ScanStack.Screen name="ScanSearch" component={CameraScan} />
              <ScanStack.Screen name="BeerDetails" component={BeerDetails} />
            </ScanStack.Navigator>
          )}
        </RootTab.Screen>
      </RootTab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
