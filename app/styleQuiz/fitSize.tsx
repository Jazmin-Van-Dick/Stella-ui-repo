import { router } from "expo-router";
import { Button, Div, ScrollDiv, Text } from "react-native-magnus";
import Logo from "@/components/Logo";
import { Header, SelectionCard } from "@/components";
import { PlusSize, Hourglass, Regular, Fitness, Thin, } from "@/components/Icons";
import { useState } from "react";
import { SafeAreaStyled } from "../style";

export default function Index() {
  const [selectedFitSize, setSelectedFitSize] = useState<string>('');

  const handleSelect = (occasion: string) => {
    setSelectedFitSize(occasion);
  };

  const Options = [
    {
      icon: <Regular />,
      text: 'Regular'
    },
    {
      icon: <PlusSize />,
      text: 'Plus size'
    },
    {
      icon: <Fitness />,
      text: 'Fitness'
    },
    {
      icon: <Thin />,
      text: 'Thin'
    },
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
          textAlign="center"
          style={{
            fontFamily: 'Manrope'
          }}
        >
          What’s your fit size?
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
              isSelected={selectedFitSize === item.text}
              onSelect={() => handleSelect(item.text)}
            />
          ))}
        </Div>
     </ScrollDiv>

     <Button
        bg={selectedFitSize ? "#AB5B0B" : '#ECEDF1'}
        mx={"xl"}
        my={"sm"}
        alignSelf="stretch"
        rounded={"circle"}
        disabled={!selectedFitSize}
        onPress={() => router.push('/styleQuiz/fitSize')}
      >
        <Text 
          fontWeight="bold" 
          color={selectedFitSize ? 'white' : '#898C9C'}
          fontSize={16}
        >
          Next
        </Text>
      </Button>
    </SafeAreaStyled>
  );
}