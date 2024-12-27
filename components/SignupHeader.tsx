import React from "react";
import { Button, Div, Header, Text } from "react-native-magnus";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

interface SignUpHeaderProps {
  title?: string;
  percentage: number;
}

const SignUpHeader: React.FC<SignUpHeaderProps> = ({ title, percentage }) => {
  return (
    <>
      <Header
        p={"lg"}
        alignment="center"
        bg="transparent"
        shadow={0}
        prefix={
          <Button bg="transparent" onPress={() => router.back()}>
            <Feather name="chevron-left" size={24} color="black" />
          </Button>
        }
      >
        {title}
      </Header>

      {/* Progress Bar */}
      <Div
        bg="transparent"
        borderWidth={1}
        mx={"xl"}
        rounded={"circle"}
        overflow="hidden"
      >
        <Div h={8} bg="#000" w={`${percentage}%`} rounded={"circle"}></Div>
      </Div>
    </>
  );
};

export default SignUpHeader;
