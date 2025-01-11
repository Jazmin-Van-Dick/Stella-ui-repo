import { CameraFrame, ChevronRight } from '@/components/Icons';
import { PhotoPreviewSection } from '@/components/index';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Images, Info, X, Zap } from 'lucide-react-native';
import { useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Div, Text } from 'react-native-magnus';

export default function Camera() {
  const [facing, setFacing] = useState<CameraType>('front');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const [flashMode, setFlashMode] = useState<boolean>(false);
  const cameraRef = useRef<CameraView | null>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    requestPermission();
  }

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        exif: false,
      };
      const takenPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(takenPhoto);
    }
  };

  const handleRetakePhoto = () => setPhoto(null);

  const toggleFlash = () => {
    setFlashMode((prevMode) => (!prevMode));
  };

  const openImageGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0]);
    }
  };

  if (photo)
    return (
      <PhotoPreviewSection
        photo={photo}
        handleRetakePhoto={handleRetakePhoto}
        onButtonPress={() => {
          router.push('/styleQuiz/result');
        }}
      />
    );

  return (
    <Div flex={1} position="relative">
      <Div
        position="absolute"
        top={0}
        left={0}
        w={'100%'}
        roundedTop={10}
        mt={10}
        pt={24}
        pb={10}
        px={16}
        row
        zIndex={10}
        justifyContent="space-between"
        alignItems="center"
      >
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <Div
            w={40}
            h={40}
            bg="#D6C2B050"
            rounded={'circle'}
            justifyContent="center"
            alignItems="center"
          >
            <X color={'#000'} />
          </Div>
        </Pressable>

        <Div row alignItems="center">
          <Info color={'#000'} size={16} />

          <Text
            ml={6}
            fontSize={16}
            textDecorLine="underline"
            style={{
              fontFamily: 'Inter',
            }}
          >
            Help
          </Text>
        </Div>
      </Div>

      <CameraView
        style={styles.camera}
        facing={facing}
        enableTorch={flashMode}
        ref={cameraRef}
      >
        <Div position="absolute" alignSelf="center" mt={'25%'}>
          <CameraFrame />

          <Text
            fontWeight='bold'
            fontSize={16}
            textAlign='center'
            color='white'
            mt={16}
          >
            Align your face in the middle
          </Text>

          <Text
            textAlign='center'
            fontSize={12}
            color='white'
          >
            Make sure your face is inside the box and capture a photo
          </Text>
        </Div>

        <Div
          row
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          w={'100%'}
          bottom={0}
          h={72}
          mb={32}
          px={32}
        >
          <Pressable onPress={openImageGallery}>
            <Images color={'#fff'} size={40} strokeWidth={1.5} />
          </Pressable>

          <Pressable onPress={handleTakePhoto}>
            <Div
              w={75}
              h={75}
              rounded={'circle'}
              borderColor="#ffffff50"
              borderWidth={4}
              justifyContent="center"
              alignItems="center"
            >
              <Div
                w={64}
                h={64}
                rounded={'circle'}
                bg="#ffffff60"
                borderWidth={1}
                borderColor="#fff"
              ></Div>
            </Div>
          </Pressable>

          <Pressable onPress={toggleFlash}>
            <Zap
              color={flashMode ? '#FFD700' : '#fff'}
              size={40}
              strokeWidth={1.5}
            />
          </Pressable>
        </Div>
      </CameraView>
    </Div>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});