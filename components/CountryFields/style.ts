import styled from "styled-components";
import { Image, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export const PickerStyled = styled(View)`
    position: absolute !important;
    left: 0;
    top: -15px;
    width: 115px;
    height: 50px;
    opacity: 0;
`;

export const SelectorStyled = styled(View)`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-right: 1px solid #00000010;
    margin-right: .5rem;
    background: red;
`;

export const TextInputStyled = styled(TextInput)`
    flex: 1;
    font-size: 16px;
`;

export const CountryFlag = styled(Image)`
    width: 25px;
    height: 15px;
    margin-right: 10;
    margin-left: 5;
`;