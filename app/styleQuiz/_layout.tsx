import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { ThemeProvider } from "react-native-magnus";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="fitSize"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="occasion"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="preCamera"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="camera"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="result"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="style"
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}