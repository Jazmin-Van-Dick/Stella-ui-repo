import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    bg?: string;
};

export default function EveningIcon({ bg } : IconProps) {
    return (
        <Svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path 
                d="M17.3352 31.1673H9.33517C7.81517 31.1673 6.33517 30.7407 5.05517 29.9273C3.77517 29.114 2.7485 27.9673 2.1085 26.594C1.45517 25.2207 1.21517 23.7007 1.3885 22.2074C1.57517 20.7007 2.17517 19.2873 3.13517 18.114C4.09517 16.9407 5.36184 16.0606 6.80184 15.5806C8.24184 15.1006 9.77517 15.034 11.2552 15.4073C12.7352 15.7673 14.0552 16.5406 15.1085 17.634C15.8952 18.4606 16.5085 19.434 16.8818 20.514H17.3352C18.7618 20.514 20.0952 21.074 21.1085 22.074C22.1085 23.074 22.6685 24.4207 22.6685 25.8473C22.6685 27.274 22.1085 28.6074 21.1085 29.6207C20.1085 30.634 18.7618 31.1807 17.3352 31.1807V31.1673ZM9.33517 17.834C8.76183 17.834 8.1885 17.9273 7.64184 18.114C6.68184 18.434 5.84183 19.0206 5.20183 19.7939C4.56183 20.5806 4.16184 21.514 4.04184 22.5273C3.92184 23.5273 4.08184 24.5406 4.52184 25.4606C4.96184 26.3806 5.64184 27.1407 6.49517 27.6873C7.3485 28.234 8.33517 28.514 9.3485 28.514H17.3485C18.0552 28.514 18.7352 28.234 19.2285 27.7273C19.7352 27.2206 20.0152 26.554 20.0152 25.8473C20.0152 25.1407 19.7352 24.4606 19.2285 23.9673C18.7218 23.4606 18.0552 23.1807 17.3485 23.1807H15.8818C15.2418 23.1807 14.7085 22.7407 14.5752 22.114C14.3752 21.1273 13.8952 20.2206 13.2018 19.4873C12.5085 18.754 11.6152 18.2473 10.6285 18.0073C10.2152 17.9007 9.77517 17.8473 9.3485 17.8473L9.33517 17.834ZM21.2685 18.7007C21.2018 18.7007 21.1218 18.7007 21.0552 18.6873C20.3352 18.5673 19.8418 17.8873 19.9618 17.154C20.0818 16.4073 19.9885 15.6473 19.6952 14.9407C19.4018 14.2473 18.9218 13.6474 18.2952 13.2074C17.6685 12.7807 16.9485 12.5273 16.1885 12.5007C15.4285 12.4607 14.6818 12.6473 14.0285 13.0207C13.3885 13.3807 12.5752 13.1673 12.2152 12.5273C11.8552 11.8873 12.0685 11.0739 12.7085 10.7139C13.8018 10.0873 15.0552 9.794 16.3085 9.84733C17.5618 9.90066 18.7752 10.314 19.8152 11.034C20.8552 11.754 21.6552 12.754 22.1485 13.914C22.6418 15.074 22.7885 16.3407 22.5885 17.594C22.4818 18.2473 21.9218 18.7139 21.2685 18.7139V18.7007ZM29.3352 17.834H26.6685C25.9352 17.834 25.3352 17.234 25.3352 16.5007C25.3352 15.7673 25.9352 15.1673 26.6685 15.1673H29.3352C30.0685 15.1673 30.6685 15.7673 30.6685 16.5007C30.6685 17.234 30.0685 17.834 29.3352 17.834ZM23.5485 10.2874C23.2018 10.2874 22.8685 10.154 22.6018 9.90064C22.0818 9.38064 22.0818 8.54067 22.6018 8.02067L24.4818 6.14063C25.0018 5.62063 25.8418 5.62063 26.3618 6.14063C26.8818 6.66063 26.8818 7.50067 26.3618 8.02067L24.4818 9.90064C24.2285 10.1673 23.8818 10.2874 23.5352 10.2874H23.5485ZM8.45517 10.2874C8.1085 10.2874 7.77517 10.154 7.5085 9.90064L5.6285 8.02067C5.1085 7.50067 5.1085 6.66063 5.6285 6.14063C6.1485 5.62063 6.9885 5.62063 7.5085 6.14063L9.3885 8.02067C9.9085 8.54067 9.9085 9.38064 9.3885 9.90064C9.12183 10.1673 8.7885 10.2874 8.44183 10.2874H8.45517ZM16.0018 7.16732C15.2685 7.16732 14.6685 6.56732 14.6685 5.83398V3.16732C14.6685 2.43398 15.2685 1.83398 16.0018 1.83398C16.7352 1.83398 17.3352 2.43398 17.3352 3.16732V5.83398C17.3352 6.56732 16.7352 7.16732 16.0018 7.16732Z" 
                fill={bg ? bg : 'black'}
            />
        </Svg>
    );
}