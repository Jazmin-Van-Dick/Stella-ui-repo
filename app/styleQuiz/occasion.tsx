import { router } from "expo-router";
import { Button, Div, ScrollDiv, Text } from "react-native-magnus";
import { CheckboxCardList, Header, RadioCard, SelectionCard } from "@/components";
import { useState } from "react";
import { SafeAreaStyled } from "../style";
import { Briefcase, Coffee, Haze, Sun, VenetianMask } from 'lucide-react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Index() {
  const [selectedOccasion, setSelectedOccasion] = useState<string[]>([]);

  const handleSelect = (occasion: string) => {
    setSelectedOccasion((prevSelected) =>
      prevSelected.includes(occasion)
        ? prevSelected.filter((item) => item !== occasion)
        : [...prevSelected, occasion]
    );
  };

  const Options = [
    {
      icon: <Briefcase color={'#000'} />,
      activeIcon: <Briefcase color={'#AB5B0B'} />,
      text: 'Work'
    },
    {
      icon: <Sun color={'#000'} />,
      activeIcon: <Sun color={'#AB5B0B'} />,
      text: 'Casual daily'
    },
    {
      icon: <Coffee color={'#000'} />,
      activeIcon: <Coffee color={'#AB5B0B'} />,
      text: 'Coffee date'
    },
    {
      icon: <MaterialCommunityIcons name="dumbbell" size={24} color="#000" />,
      activeIcon: <MaterialCommunityIcons name="dumbbell" size={24} color="#AB5B0B" />,
      text: 'Sport activities'
    },
    {
      icon: <VenetianMask color={'#000'} />,
      activeIcon: <VenetianMask color={'#AB5B0B'} />,
      text: 'Special events'
    },
    {
      icon: <Haze color={'#000'} />,
      activeIcon: <Haze color={'#AB5B0B'} />,
      text: 'Pool day'
    }
  ]
  
  return (
    <SafeAreaStyled $bg="#fff">
      <Header title="Style quiz" navBack progress={16}/>

      <ScrollDiv
        showsVerticalScrollIndicator={false}
        mx={"xl"}
        mt={"sm"}
        style={{
          flex: 1,
        }}
      >
        <Text
          fontWeight="900"
          fontSize={24}
          mb={32}
          mt={32}
          style={{
            fontFamily: 'Manrope'
          }}
        >
          Which occasions you find difficult to dress for
        </Text>

        <Div
          style={{
            gap: 10,
          }}
        >
          {Options.map((item, index) => (
            <CheckboxCardList 
              key={index}
              icon={item.icon}
              iconActive={item.activeIcon}
              text={item.text}
              isSelected={selectedOccasion.includes(item.text)}
              onSelect={() => handleSelect(item.text)}
            />
          ))}
        </Div>
     </ScrollDiv>

     <Button
        bg={selectedOccasion.length ? "#AB5B0B" : '#ECEDF1'}
        mx={"xl"}
        my={"sm"}
        alignSelf="stretch"
        rounded={"circle"}
        disabled={!selectedOccasion.length}
        onPress={() => {
          router.push('/styleQuiz/preCamera')
        }}
      >
        <Text 
          fontWeight="bold" 
          color={selectedOccasion.length ? 'white' : '#898C9C'}
          fontSize={16}
        >
          Next
        </Text>
      </Button>
    </SafeAreaStyled>
  );
}