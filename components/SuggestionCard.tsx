import { Div, Image, Text } from "react-native-magnus"
import { SaveIcon } from "./Icons";

interface SuggestionCardProps {
    image?: any,
    productName: string,
    productPrice: string;
    saved?: boolean,
    onSave?: () => void,
}

const SuggestionCard = ({
    image, 
    productName, 
    productPrice, 
    saved,
    onSave
} : SuggestionCardProps ) => {
    return (
        <Div
            flexDir="column"
            w={'48.7%'}
        >
            <Div
                bg="#F3F3F3"
                rounded={8}
                h={164}
                justifyContent="center"
                alignItems="center"
            >

                <Image 
                    w={'80%'}
                    h={'80%'}
                    source={image}
                    resizeMode="contain"
                 />

                <Div
                    position="absolute"
                    bg={ saved ? "#AB5B0B" : "#fff"}
                    rounded={'circle'}
                    top={10}
                    right={10}
                    w={32}
                    h={32}
                    justifyContent="center"
                    alignItems="center"
                    style={{
                        elevation: 6,
                    }}
                >
                    <SaveIcon bg={saved ? '#fff' : '#7C4D1E'} />
                </Div>

            </Div>

            <Text
                mt={10}
                fontWeight="bold"
                fontSize={12}
                style={{
                    fontFamily: 'Manrope',
                }}
            >
                {productName}
            </Text>

            <Text
                fontSize={12}
                style={{
                    fontFamily: 'Manrope',
                }}
            >
                {productPrice}
            </Text>
        </Div>
    )
}

export default SuggestionCard;