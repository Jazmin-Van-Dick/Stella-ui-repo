import { Div, Text } from "react-native-magnus"
import Logo from "./Logo"
import { ViewStyle } from "react-native";

interface StellaSaysCardProps {
    result?: string | null,
    mt?: string | number,
    mb?: string | number,
    style?: ViewStyle,
    title?: string,
    isLoading?: boolean;
}

const StellaSaysCard = ({result, mt, mb, style, title} : StellaSaysCardProps ) => {
    return (
        <Div
            flexDir="column"
            bg="#F9F4EE"
            px={8}
            pt={8}
            pb={12}
            rounded={10}
            mt={ mt || 24}
            mb={ mb || 16}
            style={style}
        >
            <Div row>
                <Logo w={9} h={20} bg="#AB5B0B" />

                <Text
                    color="#AB5B0B"
                    fontSize={12}
                    fontWeight="bold"
                    ml={8}
                >
                    {title || 'Stella says ...'}
                </Text>
            </Div>

            <Text
                color="#AB5B0B"
                fontSize={12}
                fontWeight="bold"
                mt={8}
            >
                {result || '...'}
            </Text>
        </Div>
    )
}

export default StellaSaysCard;