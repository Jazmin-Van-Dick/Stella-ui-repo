import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    bg?: string;
};

export default function EventIcon({ bg } : IconProps) {
    return (
        <Svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path 
                d="M16 23.1663C12.32 23.1663 9.33331 20.1797 9.33331 16.4997C9.33331 12.8197 12.32 9.83301 16 9.83301C19.68 9.83301 22.6666 12.8197 22.6666 16.4997C22.6666 20.1797 19.68 23.1663 16 23.1663ZM16 12.4997C13.8 12.4997 12 14.2997 12 16.4997C12 18.6997 13.8 20.4997 16 20.4997C18.2 20.4997 20 18.6997 20 16.4997C20 14.2997 18.2 12.4997 16 12.4997Z" 
                fill={bg ? bg : 'black'}
            />
            
            <Path 
                d="M16 31.1663C15.2666 31.1663 14.6666 30.5663 14.6666 29.833V27.1663C14.6666 26.433 15.2666 25.833 16 25.833C16.7333 25.833 17.3333 26.433 17.3333 27.1663V29.833C17.3333 30.5663 16.7333 31.1663 16 31.1663ZM25.4266 27.2596C25.0799 27.2596 24.7466 27.1264 24.48 26.873L22.6 24.993C22.08 24.473 22.08 23.633 22.6 23.113C23.12 22.593 23.96 22.593 24.48 23.113L26.36 24.993C26.88 25.513 26.88 26.353 26.36 26.873C26.1066 27.1397 25.76 27.2596 25.4133 27.2596H25.4266ZM6.5733 27.2596C6.22664 27.2596 5.89331 27.1264 5.62665 26.873C5.10665 26.353 5.10665 25.513 5.62665 24.993L7.50665 23.113C8.02665 22.593 8.86662 22.593 9.38662 23.113C9.90662 23.633 9.90662 24.473 9.38662 24.993L7.50665 26.873C7.23999 27.1397 6.90662 27.2596 6.55996 27.2596H6.5733ZM29.3333 17.833H26.6666C25.9333 17.833 25.3333 17.233 25.3333 16.4997C25.3333 15.7663 25.9333 15.1663 26.6666 15.1663H29.3333C30.0666 15.1663 30.6666 15.7663 30.6666 16.4997C30.6666 17.233 30.0666 17.833 29.3333 17.833ZM5.33331 17.833H2.66665C1.93331 17.833 1.33331 17.233 1.33331 16.4997C1.33331 15.7663 1.93331 15.1663 2.66665 15.1663H5.33331C6.06665 15.1663 6.66665 15.7663 6.66665 16.4997C6.66665 17.233 6.06665 17.833 5.33331 17.833ZM23.5466 10.2863C23.2 10.2863 22.8666 10.1531 22.6 9.89974C22.08 9.37974 22.08 8.53969 22.6 8.01969L24.48 6.13965C25 5.61965 25.84 5.61965 26.36 6.13965C26.88 6.65965 26.88 7.49969 26.36 8.01969L24.48 9.89974C24.2266 10.1664 23.88 10.2863 23.5333 10.2863H23.5466ZM8.45331 10.2863C8.10664 10.2863 7.77332 10.1531 7.50665 9.89974L5.62665 8.01969C5.10665 7.49969 5.10665 6.65965 5.62665 6.13965C6.14665 5.61965 6.98665 5.61965 7.50665 6.13965L9.38662 8.01969C9.90662 8.53969 9.90662 9.37974 9.38662 9.89974C9.11995 10.1664 8.78663 10.2863 8.43996 10.2863H8.45331ZM16 7.16634C15.2666 7.16634 14.6666 6.56634 14.6666 5.83301V3.16634C14.6666 2.43301 15.2666 1.83301 16 1.83301C16.7333 1.83301 17.3333 2.43301 17.3333 3.16634V5.83301C17.3333 6.56634 16.7333 7.16634 16 7.16634Z" 
                fill={bg ? bg : 'black'}
            />
        </Svg>
    );
}