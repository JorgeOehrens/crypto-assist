import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipButtonText}>Saltar</Text>
      </TouchableOpacity>
      <Image
        source={require("@/assets/images/home.png")} // Cambia la ruta de la imagen por la correcta
        style={styles.illustration}
      />
      <Text style={styles.title}>Comienza a invertir como experto</Text>
      <Text style={styles.subtitle}>
        Instrumentos y métodos para recomendar tu portafolio ideal
      </Text>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => router.push("/(welcome)/welcome2")}
      >
        <Text style={styles.nextButtonText}>SIGUIENTE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  skipButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  skipButtonText: {
    color: "#000000",
    fontSize: 16,
  },
  illustration: {
    width: 300,
    height: 400,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 32,
  },
  nextButton: {
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
