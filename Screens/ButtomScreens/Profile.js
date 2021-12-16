import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

const Profile = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.gif}
          source={require("../../assets/profiles.gif")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

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
