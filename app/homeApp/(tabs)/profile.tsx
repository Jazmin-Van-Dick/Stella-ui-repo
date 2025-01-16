import { Button, Div, Image, Radio, ScrollDiv, Text } from "react-native-magnus";
import React, { useState } from "react";
import { SafeAreaStyled } from "@/app/style";
import { BottomSheet, Chip } from "@/components/index";
import LogoSquared from "@/components/LogoSquared";
import { ChevronLeft, ChevronRight, Delete, Mail } from "lucide-react-native";
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Linking, Pressable, Share, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { router } from "expo-router";

interface Language {
  name: string;
  code: string;
  flag: string;
}

interface SocialMediaProps {
  icon: any;
  onPress: () => void;
}

interface Option {
  text: string;
  icon: React.ReactNode;
  onPress: () => void;
} 

type ModalContent = 'Language' | 'Logout' | 'Delete account' | null;

export default function Index() {
  const [language, setLanguage] = useState<Language>({
    name: "English",
    code: "en",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1280px-Flag_of_Canada_%28Pantone%29.svg.png",
  });

  const [modalContent, setModalContent] = useState<ModalContent>(null);

  const Languages: Language[] = [
    {
      name: "English",
      code: "en",
      flag: "https://flagpedia.net/data/flags/w580/ca.webp",
    },
    {
      name: "Spanish",
      code: "es",
      flag: "https://flagcdn.com/w320/es.png",
    },
    {
      name: "French",
      code: "fr",
      flag: "https://flagpedia.net/data/flags/w580/fr.webp",
    },
    {
      name: "Chinese",
      code: "zh",
      flag: "https://flagpedia.net/data/flags/w580/cn.webp",
    },
    {
      name: "Arabic",
      code: "ar",
      flag: "https://flagpedia.net/data/flags/w580/sa.webp",
    },
  ];

  const options: Option[] = [
    {
      text: 'Email Us',
      icon: <Mail color={'black'} />,
      onPress: () => {
        const email = 'support@yourapp.com'; 
        const subject = 'Support Request';
        const body = 'Hi Team,\n\nI would like to request support regarding...';
        const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
        Linking.openURL(url).catch((error) => {
          console.error('Error opening email client:', error.message);
        });
      },
    },
    {
      text: 'Share App',
      icon: <SimpleLineIcons name="action-redo" size={24} color="black" />,
      onPress: async () => {
        try {
          const result = await Share.share({
            message: 'Check out this amazing app! Download it here: [your-app-link]',
          });
        } catch (error: any) {
          console.error('Error sharing the app: ', error.message);
        }
      },
    },
    {
      text: 'Language',
      icon: <Image source={{ uri: language.flag }} w={22} h={12} />,
      onPress: () => {setModalContent('Language')},
    },
    {
      text: 'Survey',
      icon: <MaterialCommunityIcons name="text-box-search-outline" size={24} color="black" />,
      onPress: () => {},
    },
  ]

  const SocialMedia: SocialMediaProps[] = [
    {
      icon: require('@/assets/images/Instagram.png'),
      onPress: () => {Linking.openURL('https://www.instagram.com/')},
    },
    {
      icon: require('@/assets/images/TikTok.png'),
      onPress: () => {Linking.openURL('https://www.tiktok.com/')}
    },
    {
      icon: require('@/assets/images/X.png'),
      onPress: () => {Linking.openURL('https://twitter.com/')}
    },
  ]

  const Logout = () => {
    return (
      <>
        <Button
          bg="#AB5B0B"
          alignSelf="stretch"
          rounded="circle"
          onPress={() => {
          }}
          mt={15}
        >
          <Text fontWeight="bold" color="#fff" fontSize={16}>
            Logout
          </Text>
        </Button>

        <Button
          bg="#ECEDF1"
          alignSelf="stretch"
          rounded="circle"
          onPress={() => {
            setModalContent(null)
          }}
          mt={15}
        >
          <Text fontWeight="bold" color="#020617" fontSize={16}>
            Cancel
          </Text>
        </Button>
      </>
    )
  }

  const DeleteAccount = () => {
    return (
      <>
        <Button
          bg="red600"
          alignSelf="stretch"
          rounded="circle"
          onPress={() => {
          }}
          mt={15}
        >
          <Text fontWeight="bold" color="#fff" fontSize={16}>
            Delete account
          </Text>
        </Button>

        <Button
          bg="#ECEDF1"
          alignSelf="stretch"
          rounded="circle"
          onPress={() => {
            setModalContent(null)
          }}
          mt={15}
        >
          <Text fontWeight="bold" color="#020617" fontSize={16}>
            Cancel
          </Text>
        </Button>
      </>
    )
  }

  const renderOnboardingStep = () => {
    switch (modalContent) {
    case 'Language':
      return <Language />;
    case 'Logout':
      return <Logout />;
    case 'Delete account':
      return <DeleteAccount />;
    }
  };

  const Language = () => {
    return (
      <>
        {Languages.map((language, index) => (
          <TouchableOpacity
            onPress={() => {
              setLanguage({
                name: language.name,
                flag: language.flag,
                code: language.code
              });


              setModalContent(null);
            }}
            key={index}
          >
            <Div
              row
              px={32}
              h={56}
              mx={-16}
              alignItems="center"
              borderBottomWidth={1}
              borderBottomColor={'gray300'}
            >
              <Image
                source={{ uri: language.flag }} 
                w={22} 
                h={12}
              />
    
              <Text
                fontWeight="bold"
                fontSize={16}
                flex={1}
                style={{
                  fontFamily: 'Manrope'
                }}
                mx={8}
              >
                {language.name}
              </Text>
            </Div>
          </TouchableOpacity>
        ))}
      </>
    )
  }

return (
  <SafeAreaStyled $bg="white">
      <BottomSheet 
        title={modalContent || ''}
        isVisible={!!modalContent}
        onClose={() => {setModalContent(null)}}
        closeButton
      >
        {renderOnboardingStep()}
      </BottomSheet>

      <Header />

      <Text
        px={16}
        my={8}
        fontSize={24}
        fontWeight="900"
        style={{
          fontFamily: 'Manrope'
        }}
        color="#3A405A"
      >
        Profile
      </Text>

      <Div
        px={16}
        py={20}
      >
        <Text
          fontSize={20}
          fontWeight="900"
          style={{
            fontFamily: 'Manrope',
          }}
        >
          Your Name
        </Text>

        <Text
          fontSize={16}
          style={{
            fontFamily: 'Roboto',
          }}
        >
          Stella Premium
        </Text>
      </Div>

      {options.map((item, index) => (
        <TouchableOpacity
          onPress={item.onPress}
          key={index}
        >
          <Div
            row
            px={16}
            h={56}
            alignItems="center"
            w={'100%'}
            borderBottomWidth={1}
            borderBottomColor={'#D8D9DE'}
          >
            {item.icon}
  
            <Text
              fontWeight="bold"
              fontSize={16}
              flex={1}
              style={{
                fontFamily: 'Manrope'
              }}
              mx={8}
            >
              {item.text}
            </Text>
  
            <ChevronRight color={'black'} />
          </Div>
        </TouchableOpacity>
      ))}

      <Div
        row
        justifyContent="center"
        my={32}
        style={{
          gap: 10,
        }}
      >
        {SocialMedia.map((item, index) => (
          <Pressable
            onPress={item.onPress}
            key={index} 
          >
            <Image 
              w={36}
              h={36}
              source={item.icon} 
            />
          </Pressable>
        ))}
      </Div>

      <Button
        bg="#ECEDF1"
        mx="xl"
        my="sm"
        h={40}
        py={0}
        alignSelf="stretch"
        rounded="circle"
        onPress={() => {
          setModalContent('Logout');
        }}
        borderWidth={1}
        borderColor="#D8D9DE"
      >
        <Text fontWeight="bold" color="#020617" fontSize={16}>
          Log out
        </Text>
      </Button>

      <Button
        bg="#ECEDF1"
        mx="xl"
        h={40}
        py={0}
        alignSelf="stretch"
        rounded="circle"
        onPress={() => {
          setModalContent('Delete account')
        }}
        mt={15}
        borderWidth={1}
        borderColor="#D8D9DE"
      >
        <Text fontWeight="bold" color="#020617" fontSize={16}>
          Delete account
        </Text>
      </Button>
    </SafeAreaStyled>
  );
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