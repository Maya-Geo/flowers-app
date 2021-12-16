import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Files from "../Screens/ButtomScreens/Files";
import Likes from "../Screens/ButtomScreens/Likes";
import Profile from "../Screens/ButtomScreens/Profile";
import Settings from "../Screens/ButtomScreens/Settings";
import HomeIcon from "react-native-vector-icons/Octicons";
import FolderIcon from "react-native-vector-icons/AntDesign";
import HeartIcon from "react-native-vector-icons/Feather";
import UserIcon from "react-native-vector-icons/AntDesign";
import SettingsIcon from "react-native-vector-icons/Feather";
import Homepage from "../Screens/ButtomScreens/Homepage";

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerShown: false,
        activeTintColor: "#FD6592",
      }}
    >
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon name="home" size={24} style={{ color: color }} />
          ),
          headerTitleStyle: { fontSize: 30, color: "#324558" },
        }}
      />
      <Tab.Screen
        name="Files"
        component={Files}
        options={{
          tabBarIcon: ({ color }) => (
            <FolderIcon name="folderopen" size={24} style={{ color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={Likes}
        options={{
          tabBarIcon: ({ color }) => (
            <HeartIcon name="heart" size={24} style={{ color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <UserIcon name="user" size={24} style={{ color: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <SettingsIcon name="settings" size={24} style={{ color: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  headerIcons: {
    paddingHorizontal: 15,
    color: "#324558",
  },
});
