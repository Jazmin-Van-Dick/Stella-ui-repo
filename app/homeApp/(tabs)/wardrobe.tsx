import { Button, Div, Image, Radio, ScrollDiv, Text } from "react-native-magnus";
import React, { useState } from "react";
import { SafeAreaStyled } from "@/app/style";
import { BottomSheet } from "@/components/index";
import { ClothRack } from "@/components/Icons";
import { router } from "expo-router";
import LogoSquared from "@/components/LogoSquared";
import { ListFilter, Plus, StepBack } from "lucide-react-native";
import { Camera } from "@/components/index";
import * as ImagePicker from 'expo-image-picker';
import { Pressable } from "react-native";

export default function Section() {
    const [modalVisible, setModalVisible] = useState(false);

    const [photo, setPhoto] = useState<any>(null);
  
    const openImageGallery = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        setPhoto(result.assets[0]);
      }
    };
    return (
      <SafeAreaStyled $bg="white">
        <BottomSheet
          title="Add to wardrobe"
          isVisible={modalVisible}
          onClose={() => {}}
        >
          <Button
              bg="#AB5B0B"
              alignSelf="stretch"
              h={56}
              rounded="circle"
              onPress={() => {
                router.push('/homeApp/addToWardrobe')
              }}
          >
            <Text fontWeight="bold" color="#fff" fontSize={16}>
              Take a picture
            </Text>
          </Button>

          <Button
              bg="#F9F4EE"
              mt={16}
              h={56}
              alignSelf="stretch"
              rounded="circle"
              onPress={() => {
                openImageGallery()
              }}
          >
            <Text fontWeight="bold" color="#AB5B0B" fontSize={16}>
              Upload from device
            </Text>
          </Button>
        </BottomSheet>

        <Div row m={"xl"}>
          <LogoSquared w="32" h="32" inverted />
  
          <Text fontSize={18} fontWeight="900" color="#AB5B0B" ml={5}>
              Stella
          </Text>
        </Div>
  
        <ScrollDiv
          scrollEnabled={true}
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps={'always'}
          keyboardDismissMode='on-drag'
        >
          <Div 
            mx="xl" 
            row 
            justifyContent="space-between"
            alignItems="center"
          >
            <Div
              row
              alignItems="center"
              flex={1}
            >
              <Text fontSize={24} fontWeight="bold" mr={8}>
                Wardrobe
              </Text>
            </Div>
  
            <Pressable
              style={{
                padding: 8 
              }}
            >
              <ListFilter color={'#3A405A'} />
            </Pressable>
            
            <Pressable
              style={{
                padding: 8 
              }}
            >
              <Plus color={'#3A405A'} />
            </Pressable>
          </Div>
              
          <Div
            mt="25%" 
            alignSelf="center"
          >
            <ClothRack />
  
            <Text
              mt={24}
              fontSize={20}
              fontWeight="900"
              textAlign="center"
              style={{
                fontFamily: 'Manrope'
              }}
            >
              Let’s help you dress your best
            </Text>
  
            <Text
              mt={24}
              fontSize={14}
              textAlign="center"
              style={{
                fontFamily: 'Manrope'
              }}
            >
              Start building your wardrobe, and Stella will assist in crafting the perfect styles for you to wear.
            </Text>
          </Div>
  
          <Button
              bg="#F9F4EE"
              mx="xl"
              mt={24}
              alignSelf="stretch"
              rounded="circle"
              onPress={() => {
                setModalVisible(true)
              }}
          >
            <Text fontWeight="bold" color="#AB5B0B" fontSize={16}>
              Add to wardrobe
            </Text>
          </Button>
        </ScrollDiv>
      </SafeAreaStyled>
    );
}