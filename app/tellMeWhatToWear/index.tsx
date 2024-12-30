// import Purchases from 'react-native-purchases';
import { Button, Div, Text } from "react-native-magnus";
import { SafeAreaStyled } from "../style";
import { router } from "expo-router";
import LogoSquared from "@/components/LogoSquared";

export default function Index() {
  return (
    <SafeAreaStyled $bg="#F9F4EE">
      <Div
        mx={"lg"}
        mt={"sm"}
        justifyContent="center"
        alignItems="center"
        style={{
          flex: 1,
        }}
      >
        <LogoSquared />

        <Text 
          fontSize={'6xl'}
          textAlign="center"
          fontWeight="900"
          color="#0C0D12"
          mt={9}
        >
          Yes, having great style is really this simple
        </Text>

        <Text 
          fontSize={16}
          textAlign="center"
          color="#232636"
          mt={9}
          mb={20}
        >
          Answer a few questions and Stella will help you choose what you should wear based on the occasion, weather, or anything in between.
        </Text>
      </Div>

      <Button
        bg="#AB5B0B"
        mx={"xl"}
        my={"sm"}
        alignSelf="stretch"
        rounded={"circle"}
        onPress={() => router.push('/tellMeWhatToWear/occasion')}
      >
        <Text 
          fontWeight="bold" 
          color="#fff"
          fontSize={16}
        >
          Get Started
        </Text>
      </Button>
    </SafeAreaStyled>
  );
}