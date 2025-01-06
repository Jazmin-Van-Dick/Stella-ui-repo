import { CameraCapturedPicture } from 'expo-camera';
import { router } from 'expo-router';
import React from 'react'
import { Pressable } from 'react-native';
import { Div, Text, Image, Button } from 'react-native-magnus';
import { ChevronRight } from './Icons';

const PhotoPreviewSection = ({
    photo,
    handleRetakePhoto,
    onButtonPress,
}: {
    photo: CameraCapturedPicture;
    handleRetakePhoto: () => void;
    onButtonPress: () => void;
}) => (
    <Div bg='#00000040' flex={1}>
        <Div
            bg='#fff'
            roundedTop={10}
            mt={10}
            pt={24}
            pb={10}
            px={16}
            row
            justifyContent='space-between'
            alignItems='center'
        >
            <Pressable
                onPress={() => {
                    handleRetakePhoto()
                }}
            >
                <ChevronRight bg='black' rotation={180}/>
            </Pressable>

            <Text
                fontSize={16}
                fontWeight='bold'
                style={{
                    fontFamily: 'Inter'
                }}
            >
                Take Photo
            </Text>

            <Div></Div>
        </Div>
        
        <Div
            flex={1}
        >
            <Image
                flex={1}
                source={{uri: 'data:image/jpg;base64,' + photo.base64}}
            />
        </Div>

        <Div bg='#676767' pt={24} pb={20}>
            <Button
                bg="#ECEDF1"
                borderColor='#D8D9DE'
                borderWidth={1}
                mx={16}
                
                h={56}
                alignSelf="stretch"
                rounded={"circle"}
                onPress={() => {
                    onButtonPress()
                }}
            >
                <Text 
                    fontWeight="bold" 
                    color="#020617"
                    fontSize={16}
                >
                    Confirm and upload
                </Text>
            </Button>
        </Div>
    </Div>
);

export default PhotoPreviewSection;