import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import countriesData from './countries';
import { PickerStyled, SelectorStyled, TextInputStyled, CountryFlag } from './style';
import { ChevronDownFilled } from '../icon/ChevronDownFilled';
import { Div, Text, Button } from 'react-native-magnus';

export default function App() {
  const defaultCountry = countriesData.findIndex((country) => country.name === 'Canada');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(
    defaultCountry !== -1 ? countriesData[defaultCountry].mobile_code : null
  );

  const [phoneNumber, setPhoneNumber] = useState('');
  const selectedCountryData = countriesData.find(
    (country) => country.mobile_code === selectedCountry
  );

  const formatPhoneNumber = (input: string) => {
    const cleaned = input.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]}`;
    }
    return cleaned;
  };
  

  const handlePhoneNumberChange = (input: string) => {
    setPhoneNumber(formatPhoneNumber(input));
  };

  return (
    <>
      {selectedCountryData && (
        <Div
          row
          px={16}
          py={9}
          borderColor="gray300"
          borderWidth={1}
          rounded="lg"
          maxW="100%"
          bg="white"
        >
          <Div
            row
            position="relative"
            alignItems="center"
            pr="lg"
            mr="lg"
            borderRightColor="gray300"
            borderRightWidth={1}
          >
            <CountryFlag source={{ uri: selectedCountryData.flag }} />

            <Text
              mr="lg"
              color="#898A8D"
              fontSize={16}
              fontFamily="Roboto"
              fontWeight="bold"
            >
              {selectedCountryData.mobile_code}
            </Text>

            <ChevronDownFilled />

            <PickerStyled>
              <Picker
                selectedValue={selectedCountry}
                onValueChange={(itemValue) => setSelectedCountry(itemValue as string)}
              >
                {countriesData.map((country) => (
                  <Picker.Item
                    key={country.mobile_code}
                    label={country.name}
                    value={country.mobile_code}
                  />
                ))}
              </Picker>
            </PickerStyled>
          </Div>

          <TextInputStyled
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            maxLength={13}
          />
        </Div>
      )}
    </>
  );
}
