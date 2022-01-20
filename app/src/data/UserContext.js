import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signUserIn, signUserOut, signUp } from "../firebase";
import { getUser, updateUser } from "./api";

const UserIdKey = "USERID_KEY";

export const UserContext = createContext({
  user: null,
  userid: "",
  isLoading: true,
  checkUser: async () => {},
  login: async () => {},
  register: async () => {},
  logout: () => {},
  modifyUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [userid, setUserid] = useState("");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUserId = async (userId) => {
    if (userId) {
      setIsLoading(true);
      setUserid(userId);
      const apiUser = await getUser(userId);
      setUser(apiUser);
      setIsLoading(false);
    }
  };

  const checkUser = async () => {
    const localId = await AsyncStorage.getItem(UserIdKey);
    handleUserId(localId);
  };

  const login = async (email, password) => {
    const userCred = await signUserIn(email, password);
    if (userCred && userCred.user) {
      handleUserId(userCred.user.email);
      AsyncStorage.setItem(UserIdKey, userCred.user.email);
    }
  };

  const logout = () => {
    signUserOut();
    setUserid("");
    AsyncStorage.removeItem(UserIdKey);
  };

  const modifyUser = (newUserProps, sendToServer = true) => {
    const newUser = { ...user, ...newUserProps };
    setUser(newUser);
    if (sendToServer) updateUser({ id: user.id, ...newUserProps });
  };

  const register = async (email, password, firstName, lastName) => {
    await signUp(email, password, firstName, lastName);
    login(email, password);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userid,
        isLoading,
        checkUser,
        login,
        register,
        logout,
        modifyUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
