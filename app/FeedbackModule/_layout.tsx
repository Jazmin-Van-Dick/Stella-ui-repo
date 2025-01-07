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
            name="review"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="result"
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="saved"
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}