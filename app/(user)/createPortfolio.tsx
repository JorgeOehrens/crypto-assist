import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function CreateScreen() {
  return (
    <ImageBackground
      source={require("../../assets/images/back_home.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create Portfolio Screen</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
