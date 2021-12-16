import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textHeading}></Text>

      <View>
        <Image
          style={styles.img}
          source={require("../../assets/settings.gif")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  textHeading: {
    fontSize: 25,
    fontWeight: "bold",
  },

  img: {
    width: 400,
    height: 400,
  },
});
