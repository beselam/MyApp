import React from "react";

import List from "./components/List";

import { StyleSheet, View } from "react-native";

import { MediaProvider } from "./contexts/MediaContext";
import Home from "./views/Home";
import Navigation from './navigators/Navigator'

const App = () => {
  return (
   <Navigation/>
  );
};


export default App;
