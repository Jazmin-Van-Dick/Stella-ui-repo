// import Purchases from 'react-native-purchases';
import { Button, Div, Text } from "react-native-magnus";
import { SafeAreaStyled } from "../style";
import GoogleLogo from "@/components/GoogleIcon";
import AppleLogo from "@/components/AppleIcon";
import { router } from "expo-router";
import LogoSquared from "@/components/LogoSquared";

export default function Index() {
  return (
    <SafeAreaStyled $bg="#F9F4EE">
      <Div row m={'xl'}>
        <LogoSquared w="32" h="32"/>

        <Text
          fontSize={18}
          fontWeight="900"
          color="#AB5B0B"
          ml={5}
        >
          Stella
        </Text>
      </Div>
      <Div
        mx={"xl"}
        mt={"sm"}
        justifyContent="center"
        alignItems="center"
        style={{
          flex: 1,
        }}
      >
        <Text 
          fontSize={'6xl'}
          textAlign="center"
          fontWeight="900"
          color="#AB5B0B"
          mt={9}
        >
          Dress your best,
        </Text>

        <Text 
          fontSize={'6xl'}
          textAlign="center"
          fontWeight="bold"
          color="#232636"
          mt={9}
          mb={20}
        >
          snow, rain or shine 
        </Text>

        <Text 
          fontFamily={"Roboto"} 
          fontSize={16}
          textAlign="center"
        >
          Powered by Next-Gen Artificial Intelligence, 
          Stella is your Fashion wizard in your pocket
        </Text>
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
        >
          Sign in
        </Text>
      </Button>

      <Button
        bg="#ECEDF1"
        mx={"xl"}
        my={"sm"}
        alignSelf="stretch"
        rounded={"circle"}
        borderColor="#D8D9DE"
        borderWidth={1}
        onPress={() => router.push('/onboarding/phoneNumber')}
      >
        <Text 
          fontWeight="bold" 
          color="#020617"
          fontSize={16}
        >
          Sign up
        </Text>
      </Button>

      <Div 
        borderBottomWidth={1}
        borderColor="#00000015"
        my={10}
        h={10}
        mx={'3xl'}
      ></Div>

      <Div 
        row
        justifyContent="center"
        mt={'sm'}
        mb={'xl'}
      >
        <GoogleLogo />

        <AppleLogo />
      </Div>
    </SafeAreaStyled>
  );
}