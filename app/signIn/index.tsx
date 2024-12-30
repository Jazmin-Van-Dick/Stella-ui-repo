import { Button, Div, Text } from "react-native-magnus";
import { SafeAreaStyled } from "../style";
import { CountryCodePicker } from "@/components/index";
import { Header } from "@/components/index";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaStyled $bg="white">
      <Header title="Sign In" progress={50} navBack/>

      <Div
        mx={"xl"}
        mt={"30%"}
        style={{
          flex: 1,
        }}
      >
        <Text
          fontSize={'4xl'}
          fontWeight="bold"
          mb={'xl'}
        >
          Verify Your Phone Number
        </Text>
        
        <CountryCodePicker />
      </Div>

      <Button
        bg="#AB5B0B"
        mx={"xl"}
        my={"sm"}
        alignSelf="stretch"
        rounded={"circle"}
      >
        <Text 
          fontWeight="bold" 
          color="#fff"
          fontSize={16}
          onPress={() => router.push('/signIn/verifyPhone')}
        >
          Next
        </Text>
      </Button>
    </SafeAreaStyled>
  );
}