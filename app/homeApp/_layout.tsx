import { Stack } from "expo-router";
import { ThemeProvider } from "react-native-magnus";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
          <Stack.Screen name="addToWardrobe" options={{ headerShown: false }}/>
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}