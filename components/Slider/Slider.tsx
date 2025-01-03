import { Div, Text } from "react-native-magnus";
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
import { useState } from "react";

interface CustomSliderProps {
    min: number;
    progress: number;
    titleValues: string[];
    title: string;
    onValueChange?: (value: number) => void;
}

const CustomSlider = ({ min, progress, titleValues, title, onValueChange }: CustomSliderProps) => {
    const sliderProgress = useSharedValue(progress);
    const sliderMin = useSharedValue(0);
    const sliderMax = useSharedValue(titleValues.length - 1);

    const [sliderValue, setSliderValue] = useState(progress);

    const handleValueChange = (value: number) => {
        const roundedValue = Math.round(value);
        setSliderValue(roundedValue);
        if (onValueChange) {
            onValueChange(roundedValue);
        }
    };

    return (
        <Div>
            <Div>
                <Div
                    w={'100%'}
                    p={20}
                    bg="#F9F4EE"
                    rounded={4}
                    mb={24}
                >
                    <Text
                        color="#AB5B0B"
                        fontSize={12}
                        fontWeight="bold"
                        textAlign="center"
                        textTransform="uppercase"
                    >
                        {title}
                    </Text>

                    <Text
                        color="#AB5B0B"
                        fontSize={24}
                        fontWeight="bold"
                        textAlign="center"
                        mt={10}
                    >
                        {titleValues[sliderValue] || "Invalid Value"}
                    </Text>
                </Div>

                <Slider 
                    progress={sliderProgress} 
                    minimumValue={sliderMin} 
                    maximumValue={sliderMax} 
                    theme={{
                        minimumTrackTintColor: '#7C4D1E',
                        maximumTrackTintColor: '#EDEDED'
                    }}
                    containerStyle={{
                        borderRadius: 10,
                    }}
                    markStyle={{
                        width: 15,
                    }}
                    onValueChange={handleValueChange}
                    forceSnapToStep
                    bubbleContainerStyle={{
                        display: 'none',
                    }}
                />

                <Div
                    mt={10}
                    row
                    justifyContent="space-between"
                    pr={2}
                >
                    <Text
                        color="#7C4D1E"
                        fontSize={14}
                        fontWeight="bold"
                    >
                        {min}
                    </Text>

                    <Text
                        color="#7C4D1E"
                        fontSize={14}
                        fontWeight="bold"
                    >
                        {titleValues.length}
                    </Text>
                </Div>
            </Div>
        </Div>
    );
};

export default CustomSlider;