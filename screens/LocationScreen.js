import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";

const LocationScreen = (props) => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");

  const LocationHandler = () => {
    setList([
      ...list,
      {
        name: name,
        info: info,
      },
    ]);
  };

  return (
    <>
      {list.length != 0 ? (
        <ScrollView style={styles.bac}>
          {list.map((c, index) => (
            <View key={index} style={styles.screen1}>
              <Text>{c.name}</Text>
              <Text>{c.info}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View>
          <Text>No Location for this City</Text>
        </View>
      )}

      <View style={styles.screen}>
        <View
          style={
            (styles.btn,
            {
              marginVertical: 2,
            })
          }
        >
          <TextInput
            placeholder="Location name"
            onChangeText={setName}
            value={name}
          />
          <TextInput
            placeholder="Location info"
            onChangeText={setInfo}
            value={info}
          />
        </View>
        <View style={styles.btn}>
          <Button title="ADD LOCATION" onPress={LocationHandler} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: "absolute",

    bottom: 0,
  },
  btn: {
    textAlign: "center",
    width: 400,
    color: "white",
    fontWeight: "bold",
  },

  screen1: {
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

export default LocationScreen;
