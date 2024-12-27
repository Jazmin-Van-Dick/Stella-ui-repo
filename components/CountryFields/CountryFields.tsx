import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import countriesData from './countries';
import { PickerStyled, SelectorStyled, TextInputStyled,CountryFlag } from './style';
import { ChevronDownFilled } from '../icon/ChevronDownFilled';
import { Div, Text } from 'react-native-magnus';

export default function App() {
  const defaultCountry = countriesData.findIndex((country) => country.name === 'Canada');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(
    defaultCountry !== -1 ? countriesData[defaultCountry].mobile_code : null
  );

  const selectedCountryData = countriesData.find(
    (country) => country.mobile_code === selectedCountry
  );

  return (
    <>
      {selectedCountryData && (
        <Div
            row
            px={16}
            py={9}
            borderColor='gray300'
            borderWidth={1}
            rounded={'lg'}
            maxW={'100%'}
            bg='white'
        >
          <Div
            row
            position='relative'
            alignItems='center'
            pr={'lg'}
            mr={'lg'}
            borderRightColor='gray300'
            borderRightWidth={1}
          >
            <CountryFlag source={{ uri: selectedCountryData.flag }} />
            
            <Text
              mr={'lg'}
              color='#898A8D'
              fontSize={16}
              fontFamily='Roboto'
              fontWeight='bold'
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
            keyboardType='numeric'
          />
        </Div>
      )}
    </>
  );
}