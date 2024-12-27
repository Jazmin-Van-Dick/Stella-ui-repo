import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { ThemeProvider } from "react-native-magnus";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
  const [loaded] = useFonts({
    ClassyVouge: require("../assets/fonts/ClassyVouge.otf"),
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
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen
            name="index"
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
