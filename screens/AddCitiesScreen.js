import React, { useState, useContext, useRef } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useThemeUpdate } from "../CityContext";

const AddCitiesScreen = (props) => {
  const updateTheme = useThemeUpdate();

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <View style={styles.screen}>
      <Text>CITIES</Text>

      <View>
        <TextInput placeholder="add city" onChangeText={setCity} value={city} />
        <TextInput
          placeholder="add country"
          onChangeText={setCountry}
          value={country}
        />
      </View>
      <View>
        <Button title="ADD CITY" onPress={() => updateTheme(city, country)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
  },
});

export default AddCitiesScreen;
