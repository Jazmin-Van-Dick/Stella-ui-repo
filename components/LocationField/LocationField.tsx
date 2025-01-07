import 'react-native-get-random-values';
import React, { useRef } from "react";
import { Div, Text } from "react-native-magnus";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { PinIcon } from '../Icons';

interface LocationAutocompleteProps {
    label?: string;
    placeholder: string;
    onSelect?: (location: { description: string; details: any }) => void;
}

const LocationAutocomplete: React.FC<LocationAutocompleteProps> = ({
    label,
    placeholder,
    onSelect,
}) => {
    const inputRef = useRef<any>(null);

    const handleLocationSelect = (data: any, details: any) => {
        onSelect && onSelect({ description: data.description, details });
    };

    const api_key = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;    ;

    return (
        <Div mb="xl">
            {label && (
                <Text fontSize={16} fontWeight="bold" mb="lg">
                    {label}
                </Text>
            )}

            <GooglePlacesAutocomplete
                ref={inputRef}
                placeholder={placeholder}
                fetchDetails
                onPress={handleLocationSelect}
                query={{
                    key: api_key,
                    language: "en",
                }}
                styles={{
                    textInput: {
                        height: 56,
                        fontSize: 16,
                        borderColor: "#e2e8f0",
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingHorizontal: 16,
                        backgroundColor: "#fff",
                        color: "#000",
                    },
                    textInputContainer: {
                        padding: 0,
                        margin: 0,
                    },
                }}
                debounce={200}
            />

            <Div
                position="absolute"
                left={12}
                top={4}
            >
                <Text
                    color="#64748B"
                >
                    Location
                </Text>
            </Div>

            <Div
                position="absolute"
                right={12}
                top={3.5}
                h={50}
                justifyContent='center'
                bg='white'
            >
                <PinIcon />
            </Div>
        </Div>
    );
};

export default LocationAutocomplete;