import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

const Likes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageHeading} Likes Page></Text>
      <Image style={styles.gif} source={require("../../assets/love.gif")} />
    </SafeAreaView>
  );
};

export default Likes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  pageHeading: {
    fontSize: 25,
    fontWeight: "bold",
  },

  gif: {
    width: 400,
    height: 400,
  },
});
