import { AfternoonIcon, CasualIcon, CoffeeIcon, EveningIcon, EventIcon, MorningIcon, NightIcon, PoolIcon, SportsIcon, WorkIcon } from "@/components/Icons/index";

interface RadioCard {
    occasion: string;
    icon: React.ReactNode;  
    iconActive: React.ReactNode;  
}

export const occasions: RadioCard[] = [
    { 
        occasion: 'Work',
        icon: <WorkIcon />,
        iconActive: <WorkIcon bg="#AB5B0B"/>
    },
    { 
        occasion: 'Casual daily',
        icon: <CasualIcon />,
        iconActive: <CasualIcon bg="#AB5B0B" />
    },
    { 
        occasion: 'Coffee date',
        icon: <CoffeeIcon />,
        iconActive: <CoffeeIcon bg="#AB5B0B" />
    },
    { 
        occasion: 'Sport activites',
        icon: <SportsIcon />,
        iconActive: <SportsIcon bg="#AB5B0B" />
    },
    { 
        occasion: 'Special events',
        icon: <EventIcon />,
        iconActive: <EventIcon bg="#AB5B0B" />
    },
    { 
        occasion: 'Pool day',
        icon: <PoolIcon />,
        iconActive: <PoolIcon bg="#AB5B0B" />
    },
];

export const events: RadioCard[] = [
    { 
        occasion: 'Morning',
        icon: <MorningIcon />,
        iconActive: <MorningIcon bg="#AB5B0B"/>
    },
    { 
        occasion: 'Evening',
        icon: <EveningIcon />,
        iconActive: <EveningIcon bg="#AB5B0B" />
    },
    { 
        occasion: 'Afternoon',
        icon: <AfternoonIcon />,
        iconActive: <AfternoonIcon bg="#AB5B0B" />
    },
    { 
        occasion: 'Night',
        icon: <NightIcon />,
        iconActive: <NightIcon bg="#AB5B0B" />
    },
];

export default occasions;