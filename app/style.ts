import { SafeAreaView } from 'react-native';
import { Button, ButtonProps } from 'react-native-magnus';
import styled from 'styled-components';

interface SafeAreaVariables {
    $bg?: string;
}

export const SafeAreaStyled = styled(SafeAreaView)<SafeAreaVariables>`
    flex: 1;
    ${({$bg}) => $bg && `
        background: ${$bg};
    `}
`;