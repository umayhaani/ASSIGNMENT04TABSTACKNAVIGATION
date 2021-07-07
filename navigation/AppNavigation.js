import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AddCitiesScreen from "../screens/AddCitiesScreen";
import CitiesScreen from "../screens/CitiesScreen";
import LocationScreen from "../screens/LocationScreen";

const locationNavigator = createStackNavigator({
  City: CitiesScreen,
  LocationCity: {
    screen: LocationScreen,
    navigationOptions: ({ navigation }) => {
      console.log(navigation.state.params.headerTitle);
      return {
        title: navigation.state.params.headerTitle,
      };
    },
  },
});

const CitiesNavigator = createMaterialBottomTabNavigator({
  CITIES: locationNavigator,
  ADD_CITITES: AddCitiesScreen,
});

export default createAppContainer(CitiesNavigator);
