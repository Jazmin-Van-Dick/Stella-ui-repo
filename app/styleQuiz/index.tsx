import { router } from "expo-router";
import { Button, Div, ScrollDiv, Text } from "react-native-magnus";
import Logo from "@/components/Logo";
import { Header, SelectionCard } from "@/components";
import { Apple, Hourglass, InvertedTriangle, Rectangle, Triangle } from "@/components/Icons";
import { useState } from "react";
import { SafeAreaStyled } from "../style";

export default function Index() {
  const [selectedBodyType, setSelectedBodyType] = useState<string>('');

  const handleSelect = (occasion: string) => {
    setSelectedBodyType(occasion);
  };

  const Options = [
    {
      icon: <InvertedTriangle />,
      text: 'Inverted Triangle'
    },
    {
      icon: <Apple />,
      text: 'Apple'
    },
    {
      icon: <Triangle />,
      text: 'Triangle'
    },
    {
      icon: <Hourglass />,
      text: 'Hourglass'
    },
    {
      icon: <Rectangle />,
      text: 'Rectangle'
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
          What is your body type?
        </Text>

        <Div
          row
          flexWrap="wrap"
          justifyContent="center"
        >
          {Options.map((item, index) => (
            <SelectionCard 
              key={index}
              icon={item.icon}
              text={item.text}
              isSelected={selectedBodyType === item.text}
              onSelect={() => handleSelect(item.text)}
            />
          ))}
        </Div>
     </ScrollDiv>

     <Button
        bg={selectedBodyType ? "#AB5B0B" : '#ECEDF1'}
        mx={"xl"}
        my={"sm"}
        alignSelf="stretch"
        rounded={"circle"}
        disabled={!selectedBodyType}
        onPress={() => router.push('/styleQuiz/fitSize')}
      >
        <Text 
          fontWeight="bold" 
          color={selectedBodyType ? 'white' : '#898C9C'}
          fontSize={16}
        >
          Next
        </Text>
      </Button>
    </SafeAreaStyled>
  );
}