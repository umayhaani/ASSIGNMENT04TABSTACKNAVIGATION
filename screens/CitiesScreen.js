import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../CityContext";

const CitiesScreen = (props) => {
  const list = useTheme();

  return (
    <>
      <ScrollView style={styles.bac}>
        {list.map((c, index) => (
          <View key={index} style={styles.screen}>
            <Text
              onPress={() => {
                props.navigation.navigate("LocationCity", {
                  headerTitle: c.city,
                });
              }}
            >
              {c.city}
            </Text>
            <Text
              onPress={() => {
                props.navigation.navigate("LocationCity", {
                  headerTitle: c.city,
                });
              }}
            >
              {c.country}
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "blue",
    borderBottomWidth: 2,
    // backgroundColor: "red",
    marginVertical: 2,
  },
  bac: {
    backgroundColor: "white",
  },
});

export default CitiesScreen;
