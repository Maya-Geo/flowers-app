import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Details from "../Screens/Details.";
import MoreIcon from "react-native-vector-icons/Ionicons";
import Home from "../Screens/ButtomScreens/Home";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

const Navigator = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Discover"
          component={Home}
          options={{
            headerLeft: () => (
              <MoreIcon name="apps" style={styles.headerIcons} size={24} />
            ),
            headerRight: () => (
              <Feather
                name="search"
                size={22}
                color="black"
                style={styles.serachBar}
              />
            ),
            headerTitleStyles: { fontSize: 30, color: "#324558" },
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  detailsIcons: {
    flexDirection: "row",
  },

  serachBar: {
    marginRight: 10,
  },

  headerIcons: {
    paddingHorizontal: 30,
    color: "#324558",
  },
});
