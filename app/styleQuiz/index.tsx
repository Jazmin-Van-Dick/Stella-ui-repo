import { router } from "expo-router";

// import Purchases from 'react-native-purchases';
import { Image, SafeAreaView } from "react-native";
import { Button, Div, Text } from "react-native-magnus";
import Logo from "@/components/Logo";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Div
        mx={"xl"}
        mt={"sm"}
        justifyContent="center"
        alignItems="center"
        style={{
          flex: 1,
        }}
      >
        <Logo />
        <Text fontFamily="ClassyVouge">
          Stella
        </Text>
        <Text
          fontFamily="ClassyVouge"
          mt={"xl"}
          textAlign="center"
          letterSpacing={-0.64}
        >
          Your Personal Stylist
        </Text>

        <Text textAlign="center" m={"lg"}>
          Powered by Next-Gen Artificial Intelligence, Stella is your Fashion
          wizard in your pocket
        </Text>
      </Div>

      <Button
        bg="#1E1E20"
        mx={"xl"}
        my={"lg"}
        alignSelf="stretch"
        rounded={"sm"}
      >
        <Text fontWeight="bold" color="#fff" my={"sm"}>
          Get Started
        </Text>
      </Button>
    </SafeAreaView>
  );
}