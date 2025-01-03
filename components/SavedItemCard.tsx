import React from "react";
import { Div, Image, Text } from "react-native-magnus";
import { ChevronRight } from "./Icons";
import { Pressable } from "react-native";

interface SavedItemCardProps {
  images: any[] | any;
  section: string;
  title: string;
  onPress?: () => void;
  mt?: string | number;
  mb?: string | number;
}

const SavedItemCard = ({ images, section, title, onPress, mt, mb }: SavedItemCardProps) => {
  return (
    <Pressable
      onPress={onPress}
    >
      <Div 
        w={'100%'} 
        h={400}
        overflow="hidden"
        rounded={8}
        mt={mt}
        mb={mb}
      >
        <Div 
          w={'100%'}
          h={'100%'}
          row
          flexWrap="wrap"
        >
          <Div
            position="absolute" 
            zIndex={1}
            bg="#00000040"
            w={'100%'}
            h={'100%'}
          ></Div>

          { 
            Array.isArray(images) ? (
              <>
                {images.map((item, index) => (
                  <Div
                    flex={1}
                    minW={'50%'}
                    key={index} 
                  >
                    <Image 
                      source={item} 
                      alt={`image-${index}`} 
                      w={'100%'}
                      h={'50%'}
                    />
                  </Div>
                ))}
              </>
            ) : (
              <Image 
                source={images} 
                alt="image" 
                h={'100%'}
                w={'100%'} 
              />
            )
          }
        </Div>

        <Div
          position="absolute"
          bottom={0}
          p={16}
          zIndex={5}
          w={'100%'}
          row
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Div>
            <Text 
              color="white"
              fontWeight="bold"
              fontSize={12}
              textTransform="uppercase"
            >
              {section}
            </Text>

            <Text 
              color="white"
              fontWeight="bold"
              fontSize={20}
            > 
              {title}
            </Text>
          </Div>
          
          <ChevronRight />
        </Div>
      </Div>
    </Pressable>
  );
}

export default SavedItemCard;
