import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Header, Icon, Text, Div } from 'react-native-magnus';
import { Pressable } from 'react-native';
import { router } from 'expo-router';

interface HeaderProps {
  title: string;
  progress?: number;
  navBack?: boolean;
  onSkip?: () => void;
  bg?: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({ title, progress, navBack, bg, onSkip }) => {
  const navigation = useNavigation();
  return (
    <Div>
      <Header 
        p="lg"
        bg={bg || 'white'}
        alignment="center"
        h={73}
        prefix={
            <>
                {navBack && (
                    <Button 
                        bg="transparent"
                        onPress={() => navigation.goBack()}
                    >
                        <Icon name="chevron-left" fontFamily="Feather" fontSize="4xl" color="#020617" />
                    </Button>
                )}
            </>
        }
        suffix={onSkip && (
            <Pressable
              onPress={onSkip}
            >
              <Text fontSize={14} color="#232636" mr={4}>
                SKIP
              </Text>
            </Pressable>
          )
        }
        shadow="0"
      >
        <Text fontSize="xl" color="#020617" fontWeight="bold">
          {title}
        </Text>
      </Header>

      {progress !== undefined && (
        <Div mx="lg" mt="sm">
          <Div h={8} bg="#EEDECE" rounded="circle" overflow="hidden">
            <Div
              h="100%"
              w={`${progress}%`}
              bg="#894909"
              rounded="circle"
            />
          </Div>
        </Div>
      )}
    </Div>
  );
};

export default HeaderComponent;