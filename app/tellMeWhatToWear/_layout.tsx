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
            name="occasion"
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="event"
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="location"
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="formality"
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="results"
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="success"
            options={{ gestureEnabled: false }}
          />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}