import { Div, ScrollDiv, Snackbar, Text } from "react-native-magnus";
import React, { useEffect, useState } from "react";
import { Chip, CustomSnackBar, SavedItemCard } from "@/components/index";
import { CameraIcon, CloudIcon, LockIcon, PinIconChip, PlusIcon, TagIcon } from "@/components/Icons";
import { router, useGlobalSearchParams } from "expo-router";
import { Images2, NightOutInLondonImage } from "@/assets/resultImages/ResultImages";
import LogoSquared from "@/components/LogoSquared";
import { ChevronDownFilled } from "@/components/icon/ChevronDownFilled";
import { Pressable, SafeAreaView } from "react-native";

export default function Index() {
  const [savedItem, setSavedItem] = useState<boolean>(false);
  const [hasOccasion, setHasOccasion] = useState<boolean>(false);
  const [styleQuizComplete, setStyleQuizComplete] = useState<boolean>(false);

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
        keyboardShouldPersistTaps={'always'}
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

          <Pressable
            onPress={() => {
              router.push('/FeedbackModule')
            }}
          >
            <PlusIcon />
          </Pressable>
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

        {!styleQuizComplete && (
          <CustomSnackBar 
            icon={<TagIcon />}
            onPress={() => {
              router.push('/styleQuiz')
            }}
            content={
              <Div row>
                <Text
                  fontSize={14}
                  color="#AB5B0B"
                >
                  Enhance your experience with our {""}
                </Text>

                <Text
                  fontSize={14}
                  color="#AB5B0B"
                  textDecorLine="underline"
                >
                  style quiz
                </Text>
              </Div>
            }
          />
        )}
        
        {hasOccasion ? (
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
        ) : (
          <Div
            h={194}
            bg="#F4F5F9"
            rounded={16}
            px={16}
            py={24}
            alignItems="center"
            justifyContent="center"
            mb={16}
          >
            <CameraIcon />

            <Text
              fontWeight="bold"
              fontSize={14}
              color="#232636"
              mt={8}
              textAlign="center"
            >
              We’ll help you dress your best
            </Text>

            <Text
              fontSize={14}
              color="#232636"
              mt={8}
              textAlign="center"
            >
              Take a picture and Stella will bring you outfit ideas.
            </Text>
          </Div>
        )}

        {!styleQuizComplete ? (
          <Div
            h={194}
            bg="#fff"
            rounded={16}
            px={16}
            py={24}
            alignItems="center"
            justifyContent="center"
            mb={16}
            borderWidth={1.5}
            borderColor="#ECEDF1"
          >
            <LockIcon />

            <Text
              fontWeight="bold"
              fontSize={14}
              color="#61667B"
              mt={8}
              textAlign="center"
            >
              Share your occasion, we’ll create your fit.
            </Text>

            <Text
              fontSize={14}
              color="#61667B"
              mt={8}
              textAlign="center"
            >
              Complete style quiz to unlock.
            </Text>
          </Div>
        ) : (
          <></>
        )}

        { savedItem && (
          <SavedItemCard
            images={Images2}
            section="TELL ME WHAT TO WEAR"
            title="Vintage"
            onPress={() => {
              router.push('/tellMeWhatToWear/results')
            }}
            mb={16}
          />
        )}

      </ScrollDiv>
    </SafeAreaView>
  );
}