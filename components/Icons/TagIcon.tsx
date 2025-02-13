import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    bg?: string;
};

export default function TagIcon({ bg } : IconProps) {
    return (
        <Svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M11.8284 0C11.0328 0 10.2697 0.31607 9.70711 0.878679L1.70711 8.87868C0.535539 10.0503 0.535535 11.9497 1.70711 13.1213L6.87868 18.2929C8.05026 19.4645 9.94975 19.4645 11.1213 18.2929L19.1213 10.2929C19.6839 9.73028 20 8.96722 20 8.17157V3C20 1.34315 18.6569 0 17 0H11.8284ZM11.1213 2.29289C11.3089 2.10536 11.5632 2 11.8284 2H17C17.5523 2 18 2.44772 18 3V8.17157C18 8.43679 17.8946 8.69114 17.7071 8.87868L9.70711 16.8787C9.31659 17.2692 8.68342 17.2692 8.2929 16.8787L3.12132 11.7071C2.7308 11.3166 2.7308 10.6834 3.12132 10.2929L11.1213 2.29289ZM13 9C14.1046 9 15 8.10457 15 7C15 5.89543 14.1046 5 13 5C11.8954 5 11 5.89543 11 7C11 8.10457 11.8954 9 13 9Z" 
                fill={bg || "#AB5B0B"}
            />
        </Svg>
    );
}