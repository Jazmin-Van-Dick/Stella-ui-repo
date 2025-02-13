import { ChevronRight } from '@/components/Icons';
import { PhotoPreviewSection } from '@/components/index';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Button, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Div, Text } from 'react-native-magnus';

interface CameraProps {
  onConfirmPhoto: () => void;
}

export default function Camera({onConfirmPhoto}: CameraProps) {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const cameraRef = useRef<CameraView | null>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    requestPermission();
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        exif: false,
      };
      const takedPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(takedPhoto);
    }
  };
  

  const handleRetakePhoto = () => setPhoto(null);

  if (photo) 
    return <PhotoPreviewSection 
              photo={photo} 
              handleRetakePhoto={handleRetakePhoto} 
              onButtonPress={() => {
                onConfirmPhoto()
              }}
            />

  return (
    <Div
      flex={1}
      bg='#00000040'
    >
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
            router.back();
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
        >Take Photo</Text>

        <Div></Div>
      </Div>
      <CameraView style={styles.camera} facing={'back'} ref={cameraRef}>
        <Pressable 
          onPress={() => {
            handleTakePhoto()
          }}
          style={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: [{translateX: '-50%'}]
          }}
        >
          <Div
            w={80}
            h={80}
            rounded={'circle'}
            borderColor='#fff'
            borderWidth={4}
            justifyContent='center'
            alignItems='center'
          >
            <Div
              w={60}
              h={60}
              rounded={'circle'}
              bg='#fff'
            ></Div>
          </Div>
        </Pressable>
      </CameraView>
    </Div>
  );
}

const styles = StyleSheet.create({  
  camera: {
    flex: 1,
  },
});