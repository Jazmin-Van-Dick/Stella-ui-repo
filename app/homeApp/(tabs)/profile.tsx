import { Button, Div, Image, Radio, ScrollDiv, Text } from "react-native-magnus";
import React, { useState } from "react";
import { SafeAreaStyled } from "@/app/style";
import { Header, Chip, LoadingSection, BottomSheet, TextField } from "@/components/index";
import { CloudIcon, EditIcon, InfoIcon, PinIconChip, PlusIcon } from "@/components/Icons";
import Logo from "@/components/Logo";
import { router } from "expo-router";
import { Images, Images2 } from "@/assets/resultImages/ResultImages";
import LogoSquared from "@/components/LogoSquared";
import { ChevronDownFilled } from "@/components/icon/ChevronDownFilled";

export default function Index() {

return (
  <SafeAreaStyled $bg="white">
      <Div row m={"xl"}>
        <LogoSquared w="32" h="32" />

        <Text fontSize={18} fontWeight="900" color="#AB5B0B" ml={5}>
            Stella
        </Text>
      </Div>

      <ScrollDiv
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={true}
        keyboardDismissMode='on-drag'
      >

        <Div 
          mx="xl" 
          mt="10%" 
          flex={1} 
          row 
          justifyContent="space-between"
          alignItems="center"
        >
          <Div
            row
            alignItems="center"
          >
            <Text fontSize={24} fontWeight="bold" mr={8}>
              December 14th
            </Text>

            <ChevronDownFilled />
          </Div>

          <PlusIcon />
        </Div>
      
        <Div
            row
            style={{
                gap: 4,
            }}
            px={16}
            pt={12}
        >
            <Chip icon={<PinIconChip />} text="Toronto" />
            <Chip icon={<CloudIcon />} text="2 °C" />
        </Div>

      </ScrollDiv>

      <Button
        bg="#AB5B0B"
        mx="xl"
        my="sm"
        alignSelf="stretch"
        rounded="circle"
        onPress={() => {
        }}
        mt={24}
      >
        <Text fontWeight="bold" color="#fff" fontSize={16}>
          Save outfit
        </Text>
      </Button>

      <Button
          bg="#F9F4EE"
          mx="xl"
          my="sm"
          alignSelf="stretch"
          rounded="circle"
          onPress={() => {
          }}
      >
        <Text fontWeight="bold" color="#AB5B0B" fontSize={16}>
            Make changes
        </Text>
      </Button>
    </SafeAreaStyled>
  );
}