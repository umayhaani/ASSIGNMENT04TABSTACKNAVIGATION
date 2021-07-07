import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

const CityContext = (props) => {
  const [list, setList] = useState([]);
  const cityHandler = (city, country) => {
    console.log("im called");
    console.log(city, "  ", country);

    setList([
      ...list,
      {
        city: city,
        country: country,
      },
    ]);
  };

  return (
    <ThemeContext.Provider value={list}>
      <ThemeUpdateContext.Provider value={cityHandler}>
        {props.children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default CityContext;
