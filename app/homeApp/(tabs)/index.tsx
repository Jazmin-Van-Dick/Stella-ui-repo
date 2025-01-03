import { Div, ScrollDiv, Snackbar, Text } from "react-native-magnus";
import React, { useEffect, useState } from "react";
import { Chip, SavedItemCard } from "@/components/index";
import { CloudIcon, PinIconChip, PlusIcon } from "@/components/Icons";
import { router, useGlobalSearchParams } from "expo-router";
import { Images2, NightOutInLondonImage } from "@/assets/resultImages/ResultImages";
import LogoSquared from "@/components/LogoSquared";
import { ChevronDownFilled } from "@/components/icon/ChevronDownFilled";
import { SafeAreaView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView 
      style={{
        backgroundColor: 'white',
        flex: 1
      }}
    >
      <ScrollDiv
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={true}
        keyboardDismissMode='on-drag'
        px={16}
      >
        <Div row my={"xl"}>
          <LogoSquared w="32" h="32" inverted />

          <Text fontSize={18} fontWeight="900" color="#AB5B0B" ml={5}>
            Stella
          </Text>
        </Div>

        <Div 
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
            pt={12}
            mb={16}
        >
            <Chip icon={<PinIconChip />} text="Toronto" />
            <Chip icon={<CloudIcon />} text="2 °C" />
        </Div>

        <SavedItemCard
          images={NightOutInLondonImage}
          section="OCASSION"
          title="A night out in London"
          onPress={() => {
            router.push({
              pathname: "/homeApp",
              params: {
                snackbarText: "Look saved successfully!",
              },
          });
          }}
          mb={16}
        />

        <SavedItemCard
          images={Images2}
          section="TELL ME WHAT TO WEAR"
          title="Vintage"
          onPress={() => {
            router.push('/tellMeWhatToWear/results')
          }}
          mb={16}
        />
      </ScrollDiv>
    </SafeAreaView>
  );
}