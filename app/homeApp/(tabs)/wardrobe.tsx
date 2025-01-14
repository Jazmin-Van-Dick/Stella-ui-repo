import { Button, Div, Image, Radio, ScrollDiv, Text } from "react-native-magnus";
import React, { useState } from "react";
import { SafeAreaStyled } from "@/app/style";
import { BottomSheet, Camera, Chip } from "@/components/index";
import { ClothRack } from "@/components/Icons";
import { router } from "expo-router";
import LogoSquared from "@/components/LogoSquared";
import { ChevronLeft, ListFilter, Plus, PlusIcon } from "lucide-react-native";
import * as ImagePicker from 'expo-image-picker';
import { Pressable } from "react-native";

export default function Section() {
    type Views = 'index' | 'viewItem';
    const [modalVisible, setModalVisible] = useState(false);
    const [view, setView] = useState<Views>('index');
    const [selectedItem, setSelectedItem] = useState<ItemProps | null>(null);

    interface ItemProps {
      image: any,
      name: string,
      brand: string,
      description: string,
      tags: string[],
    }

    const [items, setItems] = useState<ItemProps[]>([
      {
        image: require('@/assets/images/jacket.png'),
        name: 'Moncler Parka',
        brand: 'Moncler',
        description: 'Warm parka to be used for the winter time.',
        tags: [
          'Moncler',
          'Winter Coat'
        ]
      }
    ]) 

    const [photo, setPhoto] = useState<any>(null);

    const showView = () => {
      switch (view) {
      case 'index':
        return <Index />;

      case 'viewItem':
        return <ViewItem item={selectedItem} />;
      }
    };
  
    const openImageGallery = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
  
      if (!result.canceled) {
        setPhoto(result.assets[0]);
        router.push('/homeApp/addToWardrobe')
      }
    };

    const ViewItem = ({ item }: { item: ItemProps | null }) => {
      if (!item) return null;
  
      return (
        <Div bg="#00000040" flex={1}>
          <Div bg="#fff" pt={24} pb={10} px={16} row alignItems="center">
            <Pressable
              onPress={() => {
                setView('index');
              }}
            >
              <ChevronLeft color={'black'} />
            </Pressable>
  
            <Text
              fontSize={16}
              fontWeight="bold"
              style={{
                fontFamily: 'Inter',
              }}
              ml={10}
            >
              {item.name}
            </Text>
          </Div>
  
          <Image w={'100%'} h={330} bg="red" source={item.image} />
  
          <ScrollDiv flex={1} bg="#fff" px={16} py={20}>
            <Text
              fontSize={16}
              fontWeight="bold"
              mb={4}
              style={{
                fontFamily: 'Manrope',
              }}
            >
              {item.name}
            </Text>
  
            <Text
              fontSize={14}
              mb={26}
              style={{
                fontFamily: 'Roboto',
              }}
            >
              {item.description}
            </Text>
  
            <Div row style={{ gap: 10 }}>
              {item.tags.map((tag, index) => (
                <Chip key={index} text={tag} />
              ))}
            </Div>
          </ScrollDiv>
        </Div>
      );
    };

    const AddModal = () => {
      if (modalVisible) {
        return (
          <BottomSheet
            title="Add to wardrobe"
            isVisible={modalVisible}
            onClose={() => {setModalVisible(false)}}
          >
            <Button
                bg="#AB5B0B"
                alignSelf="stretch"
                h={56}
                rounded="circle"
                onPress={() => {
                  router.push('/homeApp/camera');
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
        )
      }
    }

    const Header = () => { 
      return (
        <Div row m={"xl"}>
            <LogoSquared w="32" h="32" inverted />
    
            <Text fontSize={18} fontWeight="900" color="#AB5B0B" ml={5}>
                Stella
            </Text>
          </Div>
      )
    }

    const Index = () => {
      if (!items.length) {
        return (
          <>            
            <Div mt="25%" alignSelf="center">
              <ClothRack />
              <Text mt={24} fontSize={20} fontWeight="900" textAlign="center" style={{ fontFamily: 'Manrope' }}>
                Let’s help you dress your best
              </Text>
              <Text mt={24} fontSize={14} textAlign="center" style={{ fontFamily: 'Manrope' }}>
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
                setModalVisible(true);
              }}
            >
              <Text fontWeight="bold" color="#AB5B0B" fontSize={16}>
                Add to wardrobe
              </Text>
            </Button>
          </>
        );
      } else {
        return (
          <>
            <Div
              px={16}
              mt={16}
              row
              flexWrap="wrap"
              style={{
                gap: 16,
              }}
            >
              {items.map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => {
                    setSelectedItem(item);
                    setView('viewItem');
                  }}
                  style={{
                    width: '47.5%'
                  }}
                >
                  <Div flexDir="column">
                    <Image source={item.image} h={164} borderRadius={2} />
                    <Text
                      mt={8}
                      fontWeight="bold"
                      fontSize={12}
                      style={{
                        fontFamily: 'Manrope',
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      mt={2}
                      fontSize={12}
                      style={{
                        fontFamily: 'Manrope',
                      }}
                    >
                      {item.brand}
                    </Text>
                  </Div>
                </Pressable>
              ))}

              <Pressable
                onPress={() => {
                  setModalVisible(true);
                }}
                style={{
                  width: '47.5%'
                }}
              >
                <Div bg="#F4F5F9" rounded={16} h={164} alignItems="center" justifyContent="center">
                  <PlusIcon color={'black'} />
                  <Text fontWeight="bold" fontSize={14} textAlign="center" mt={8}>
                    Add another item
                  </Text>
                </Div>
              </Pressable>
            </Div>
          </>
        );
      }
    };

    return (
      <SafeAreaStyled $bg="white">
        <AddModal />

        { view !== 'viewItem' && (
          <Header />
        )}
        
        <ScrollDiv scrollEnabled showsVerticalScrollIndicator keyboardShouldPersistTaps="always" keyboardDismissMode="on-drag">
          {view !== 'viewItem' && (
            <Div mx="xl" row justifyContent="space-between" alignItems="center">
              <Div row alignItems="center" flex={1}>
                <Text fontSize={24} fontWeight="bold" mr={8}>
                  Wardrobe
                </Text>
              </Div>

              <Pressable style={{ padding: 8 }}>
                <ListFilter color={'#3A405A'} />
              </Pressable>

              <Pressable style={{ padding: 8 }}>
                <Plus color={'#3A405A'} />
              </Pressable>
            </Div>
          )}

          {showView()}
        </ScrollDiv>
      </SafeAreaStyled>
    );
}