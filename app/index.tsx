// import Purchases from 'react-native-purchases';
import { Button, Div, Text } from "react-native-magnus";
import { SafeAreaStyled } from "./style";
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
          color="#AB5B0B"
          mt={9}
        >
          Meet Stella
        </Text>

        <Text 
          fontSize={'6xl'}
          textAlign="center"
          fontWeight="bold"
          color="#232636"
          mt={9}
          mb={20}
        >
          Your personal AI stylist
        </Text>
      </Div>

      <Button
        bg="#AB5B0B"
        mx={"xl"}
        my={"sm"}
        alignSelf="stretch"
        rounded={"circle"}
        onPress={() => {
          router.push('/tellMeWhatToWear')
        }}
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
