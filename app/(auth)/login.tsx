import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/login.png")}
        style={styles.illustration}
      />
      <Text style={styles.title}>¡Bienvenido!</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Iniciar sesión con Google</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>¿Olvidaste tu contraseña?</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/(auth)/register");
        }}npm run de
      >
        <Text style={styles.subtitle}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  illustration: {
    width: 360,
    height: 300,
    marginBottom: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#656565",
  },
  form: {
    width: "100%",
    maxWidth: 400,
    paddingHorizontal: 16,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D6D6D6",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  googleButton: {
    backgroundColor: "#DB4437",
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
    marginTop: 16,
    width: "100%",
    maxWidth: 400,
  },
  googleButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
  },
});

export default Login;
