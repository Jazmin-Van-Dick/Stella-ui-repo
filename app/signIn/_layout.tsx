import { Stack } from "expo-router";
import { ThemeProvider } from "react-native-magnus";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="index"
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="verifyPhone"
            options={{ gestureEnabled: false }}
          />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}