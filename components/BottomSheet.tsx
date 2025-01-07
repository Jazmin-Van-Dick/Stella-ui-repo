import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from "react-native-gesture-handler";
import { Div, Text } from "react-native-magnus";
import { ChevronRight, CrossIcon } from "./Icons";
import { router } from "expo-router";

type BottomSheetProps = {
  title?: string;
  isVisible: boolean;
  onClose: () => void;
  height?: number;
  children: React.ReactNode;
  navBack?: boolean;
  closeButton?: boolean;
};

const BottomSheet: React.FC<BottomSheetProps> = ({
  title,
  isVisible,
  onClose,
  height,
  children,
  navBack,
  closeButton,
}) => {
  const [contentHeight, setContentHeight] = useState(0);
  const translateY = useSharedValue(height || contentHeight);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const handleGesture = useCallback((event: PanGestureHandlerGestureEvent) => {
    if (event.nativeEvent.translationY > 0) {
      translateY.value = withSpring(event.nativeEvent.translationY);
    }
  }, []);

  const handleGestureEnd = useCallback(() => {
    if (translateY.value > (height || contentHeight) / 2) {
      translateY.value = withTiming(height || contentHeight);
      onClose();
    } else {
      translateY.value = withSpring(0);
    }
  }, [height, contentHeight, onClose]);

  useEffect(() => {
    translateY.value = isVisible ? withTiming(0) : withTiming(height || contentHeight);
  }, [isVisible, translateY, height, contentHeight]);

  return (
    <>
      {isVisible && (
        <Pressable style={styles.backdrop} onPress={onClose} />
      )}
      <PanGestureHandler onGestureEvent={handleGesture} onEnded={handleGestureEnd}>
        <Animated.View
          style={[
            styles.sheet,
            { height: height || contentHeight },
            animatedStyle,
          ]}
        >
          {title && (
            <Div
              p={16}
              w="100%"
              borderBottomWidth={1.5}
              borderBottomColor="#ECEDF1"
              row
              justifyContent={navBack || closeButton ? "space-between" : 'center'}
              alignItems="center"
            >
              {navBack && (
                <Pressable
                  onPress={() => {
                    router.back();
                  }}
                >
                  <ChevronRight bg="black" rotation={180} />
                </Pressable>
              )}
              <Text textAlign="center" fontWeight="bold" fontSize={16}>
                {title}
              </Text>

              {navBack && (
                <Div></Div>
              )}

              {closeButton && (
                <Pressable onPress={() => { onClose() }}>
                  <CrossIcon />
                </Pressable>
              )}
            </Div>
          )}

          <Div
            p={16}
            onLayout={(event) => {
              if (!height) {
                const { height: measuredHeight } = event.nativeEvent.layout;
                setContentHeight(measuredHeight + (title ? 56 : 0)); // Add title height if present
              }
            }}
          >
            {children}
          </Div>
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    zIndex: 10,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9,
  },
});

export default BottomSheet;