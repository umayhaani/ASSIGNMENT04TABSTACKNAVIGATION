import React, { createContext, useState } from "react";

//import { StyleSheet } from "react-native";

import Navigation from "./navigation/AppNavigation";
import CityContext from "./CityContext";

export const Theme = createContext();

export default function App() {
  //  const [darrkTheme, setDarktheme] = useState("im vlaue");

  return (
    <CityContext>
      <Navigation />
    </CityContext>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
