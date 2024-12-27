import { Button, Div, Input, Text } from "react-native-magnus";
import { SafeAreaStyled } from "../style";
import { Header, TextField } from "@/components/index";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaStyled $bg="white">
      <Header title="Sign up" progress={60} navBack />

      <Div mx="xl" mt="20%" flex={1}>
        <TextField label="What's your first name?" placeholder="Your first name" />
        <TextField label="What's your last name?" placeholder="Your last name" />
      </Div>

      <Button
        bg="#AB5B0B"
        mx="xl"
        my="sm"
        alignSelf="stretch"
        rounded="circle"
        onPress={() => router.push("/onboarding/chooseGender")}
      >
        <Text fontWeight="bold" color="#fff" fontSize={16}>
          Next
        </Text>
      </Button>
    </SafeAreaStyled>
  );
}