import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
     bg?: string;
};

export default function SportsIcon({ bg } : IconProps) {
    return (
        <Svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path 
                d="M29.3333 30.5003H2.66665C1.93331 30.5003 1.33331 29.9003 1.33331 29.167C1.33331 28.4337 1.93331 27.8337 2.66665 27.8337H29.3333C30.0666 27.8337 30.6666 28.4337 30.6666 29.167C30.6666 29.9003 30.0666 30.5003 29.3333 30.5003ZM29.3333 25.167H2.66665C1.93331 25.167 1.33331 24.567 1.33331 23.8337C1.33331 23.1003 1.93331 22.5003 2.66665 22.5003H29.3333C30.0666 22.5003 30.6666 23.1003 30.6666 23.8337C30.6666 24.567 30.0666 25.167 29.3333 25.167ZM29.3333 19.8337H26.6666C25.9333 19.8337 25.3333 19.2337 25.3333 18.5003C25.3333 17.767 25.9333 17.167 26.6666 17.167H29.3333C30.0666 17.167 30.6666 17.767 30.6666 18.5003C30.6666 19.2337 30.0666 19.8337 29.3333 19.8337ZM21.3333 19.8337C20.6 19.8337 20 19.2337 20 18.5003C20 17.447 19.5733 16.4203 18.8267 15.6737C17.32 14.167 14.68 14.167 13.1733 15.6737C12.4267 16.4203 12 17.447 12 18.5003C12 19.2337 11.4 19.8337 10.6666 19.8337C9.93331 19.8337 9.33331 19.2337 9.33331 18.5003C9.33331 16.7403 10.04 15.0203 11.2933 13.7803C12.5466 12.5269 14.2266 11.8337 16 11.8337C17.7733 11.8337 19.4533 12.5269 20.72 13.7803C21.96 15.0203 22.6666 16.7403 22.6666 18.5003C22.6666 19.2337 22.0666 19.8337 21.3333 19.8337ZM5.33331 19.8337H2.66665C1.93331 19.8337 1.33331 19.2337 1.33331 18.5003C1.33331 17.767 1.93331 17.167 2.66665 17.167H5.33331C6.06665 17.167 6.66665 17.767 6.66665 18.5003C6.66665 19.2337 6.06665 19.8337 5.33331 19.8337ZM23.2 12.6336C22.8533 12.6336 22.52 12.5004 22.2533 12.2471C21.7333 11.7271 21.7333 10.887 22.2533 10.367L24.12 8.50033C24.64 7.98033 25.48 7.98033 26 8.50033C26.52 9.02033 26.52 9.86037 26 10.3804L24.1333 12.2471C23.8667 12.5137 23.5333 12.6336 23.1866 12.6336H23.2ZM8.79999 12.6336C8.45332 12.6336 8.11998 12.5004 7.85331 12.2471L5.98665 10.3804C5.46665 9.86037 5.46665 9.02033 5.98665 8.50033C6.50665 7.98033 7.34666 7.98033 7.86666 8.50033L9.73332 10.367C10.2533 10.887 10.2533 11.7271 9.73332 12.2471C9.47998 12.5137 9.13333 12.6336 8.78666 12.6336H8.79999ZM16 9.16699C15.2666 9.16699 14.6666 8.56699 14.6666 7.83366V4.50033C14.6666 3.76699 15.2666 3.16699 16 3.16699C16.7333 3.16699 17.3333 3.76699 17.3333 4.50033V7.83366C17.3333 8.56699 16.7333 9.16699 16 9.16699Z" 
                fill={bg ? bg : 'black'}
            />
        </Svg>
    );
}