import { router } from "expo-router";
import { Button, Div, Image, ScrollDiv, Text } from "react-native-magnus";
import { Header } from "@/components";
import { SafeAreaStyled } from "../style";
import { CircleFadingArrowUp, LockKeyhole, Palette } from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

export default function Index() {  
  const [photo, setPhoto] = useState<any>(null);

  const openImageGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0]);
      router.push('/styleQuiz/result');
    }
  };

  const functionalities = [
    {
      icon: <CircleFadingArrowUp color={'#232636'} />,
      text: 'Stella will improve your outfit recommendations'
    },
    {
      icon: <Palette color={'#232636'} />,
      text: 'Personalize your wardrobe based on your own color palette'
    },
    {
      icon: <LockKeyhole color={'#232636'} />,
      text: 'This selfie is private and will never be shared with other users'
    },
  ];

  return (
    <SafeAreaStyled $bg="#fff">
      <Header title="Style quiz" navBack/>

      <ScrollDiv
        showsVerticalScrollIndicator={false}
        mx={"xl"}
        mt={"sm"}
        style={{
          flex: 1,
        }}
      >
        <Image
          source={require('@/assets/images/selfieGirl.png')}
          w={125}
          h={143}
          alignSelf="center"
        />

        <Text
          fontWeight="900"
          fontSize={24}
          mt={24}
          style={{
            fontFamily: 'Manrope'
          }}
        >
          Help us give you better recommendations
        </Text>

        <Text
          fontSize={16}
          mt={16}
          style={{
            fontFamily: 'Roboto'
          }}
        >
          Help us give you better recommendations
        </Text>

        <Div
          flexDir="column"
          mt={24}
          style={{
            gap: 16
          }}
        >
          {functionalities.map((item, index) => (
            <Div
              row
              key={index}
            >
              {item.icon}

              <Text
                ml={16}
              >
                {item.text}
              </Text>
            </Div>
          ))}
        </Div>
     </ScrollDiv>

     <Button
        bg={"#AB5B0B"}
        mx={"xl"}
        my={"sm"}
        alignSelf="stretch"
        rounded={"circle"}
        onPress={() => {
          router.push('/styleQuiz/camera');
        }}
      >
        <Text 
          fontWeight="bold" 
          color={'white'}
          fontSize={16}
        >
          Take selfie
        </Text>
      </Button>

     <Button
        bg={"#F9F4EE"}
        mx={"xl"}
        my={"sm"}
        alignSelf="stretch"
        rounded={"circle"}
        onPress={openImageGallery}
      >
        <Text 
          fontWeight="bold" 
          color={'#AB5B0B'}
          fontSize={16}
        >
          Upload from gallery
        </Text>
      </Button>
    </SafeAreaStyled>
  );
}