import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useColorScheme } from "@/hooks/useColorScheme";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[styles.iconContainer, focused && styles.iconFocused]}
              >
                {focused ? (
                  <LinearGradient
                    colors={["#F21CC8", "#FD9FEB"]}
                    style={styles.gradientBackground}
                  >
                    <FontAwesome size={28} name="home" color="white" />
                  </LinearGradient>
                ) : (
                  <FontAwesome size={28} name="home" color={color} />
                )}
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="portfolio"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[styles.iconContainer, focused && styles.iconFocused]}
              >
                {focused ? (
                  <LinearGradient
                    colors={["#F21CC8", "#FD9FEB"]}
                    style={styles.gradientBackground}
                  >
                    <FontAwesome size={28} name="briefcase" color="white" />
                  </LinearGradient>
                ) : (
                  <FontAwesome size={28} name="briefcase" color={color} />
                )}
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="createPortfolio"
          options={{
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[styles.iconContainer, focused && styles.iconFocused]}
              >
                {focused ? (
                  <LinearGradient
                    colors={["#F21CC8", "#FD9FEB"]}
                    style={styles.gradientBackground}
                  >
                    <FontAwesome size={28} name="plus-circle" color="white" />
                  </LinearGradient>
                ) : (
                  <FontAwesome size={28} name="plus-circle" color={color} />
                )}
              </View>
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    padding: 5,
  },
  gradientBackground: {
    borderRadius: 15,
    padding: 5,
  },
  iconFocused: {
    borderRadius: 15,
  },
});
