import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { UserProvider } from "./src/data/UserContext";
import Root from './src/Root';


export default function App() {
  return (
    <UserProvider>
      <Root/>
      <StatusBar style="auto"/>
    </UserProvider>
  );
}
