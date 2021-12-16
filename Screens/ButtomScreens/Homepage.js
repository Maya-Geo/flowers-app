import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const Homepage = ({ navigation }) => {
  const info = [
    {
      backgroundColor: "#FEDCE7",
      topicImage: require("../../assets/1.jpeg"),
      title: "Is Love as it's known an action or a feeling?",
      writerName: " Maya Hagan",
      writerImage: require("../../assets/bek.jpg"),
      timeStamp: "4 min read",
    },

    {
      backgroundColor: "#FEDCE7",
      topicImage: require("../../assets/2.jpeg"),
      title: "Does it dry January Actually Improve your Health",
      writerName: " Johny Vino",
      writerImage: require("../../assets/old.jpg"),
      timeStamp: "4 min read",
    },

    {
      backgroundColor: "#FEDCE7",
      topicImage: require("../../assets/3.jpeg"),
      title: "How to seem like you always have a shot together",
      writerName: "Subash Chilo",
      writerImage: require("../../assets/merlin.jpg"),
      timeStamp: "4 min read",
    },

    {
      backgroundColor: "#FEDCE7",
      topicImage: require("../../assets/4.jpeg"),
      title: "Do you hire a designer to make something.You hire them.",
      writerName: "Kyra Chamdra",
      writerImage: require("../../assets/jk.jpg"),
      timeStamp: "4 min read",
    },
  ];
  return (
    <View>
      <FlatList
        data={info}
        keyExtractor={(item, index) => {
          return index;
        }}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.flatListItems}
              onPress={() => navigation.navigate("Details", { details: item })}
            >
              <View
                style={{
                  backgroundColor: item.backgroundColor,
                  height: 10,
                  width: 70,
                }}
              ></View>

              <View style={styles.postCard}>
                <View style={styles.imageTextView}>
                  <Image source={item.topicImage} style={styles.topicImage} />
                </View>
                <View style={styles.TitleWriterNames}>
                  <Text style={styles.topicTitle}>{item.title}</Text>

                  <View style={styles.writerImageName}>
                    <View>
                      <Image
                        source={item.writerImage}
                        style={styles.writerImage}
                      />
                      <Text style={styles.writerName}> {item.writerName}</Text>
                    </View>

                    <Text style={styles.timeStamp}>
                      <Entypo name="dot-single" size={24} style={styles.dot} />
                      {item.timeStamp}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    height: 150,
    backgroundColor: "snow",
    flex: 1,
  },

  PostsCard: {
    position: "absolute",
    backgroundColor: "white",
    marginLeft: 10,
    marginTop: 10,
    flex: 1,
  },
  ImageTextView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TitleWriterNames: {
    justifyContent: "space-between",
    height: 80,
    width: 200,
    marginLeft: 115,
  },
  writerImageName: {
    flexDirection: "row",
    alignItems: "center",
  },

  topicTitle: {
    fontSize: 16,
    bottom: 90,
    fontWeight: "bold",
    color: "#324558",
  },
  topicImage: {
    height: 110,
    width: 90,
    marginLeft: 7,
    marginTop: 7,
  },
  writerImage: {
    height: 30,
    width: 30,
    bottom: 70,
    marginRight: 10,
    borderRadius: 50,
  },
  writerName: {
    fontSize: 11,
    marginLeft: 35,
    bottom: 90,
    color: "#324558",
  },
  timeStamp: {
    marginLeft: 30,
    bottom: 75,
    color: "#98A2AB",
  },
  dot: {
    fontSize: 15,
  },
});
