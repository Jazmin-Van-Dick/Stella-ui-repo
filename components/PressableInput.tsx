import React from "react";
import { Pressable, TextInput } from "react-native";
import { Input, InputProps } from "react-native-magnus";

export default function PressableInput(props: InputProps) {
  const inputRef = React.useRef<TextInput>(null);

  const handlePress = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <Pressable onPress={handlePress}>
      <Input ref={inputRef} {...props} />
    </Pressable>
  );
}
