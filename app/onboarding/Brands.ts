interface Brand {
    name: string;
    logo: any;  
}

const brands: Brand[] = [
    { name: 'HyM', logo: require('@/assets/images/brands/HM.png') },
    { name: 'Zara', logo: require('@/assets/images/brands/Zara.png') },
    { name: 'Aritzia', logo: require('@/assets/images/brands/Aritzia.png') },
    { name: 'Nike', logo: require('@/assets/images/brands/Nike.png') },
    { name: 'Garage', logo: require('@/assets/images/brands/Garage.png') },
    { name: 'Lululemon', logo: require('@/assets/images/brands/Lululemon.png') },
    { name: 'Banana Republic', logo: require('@/assets/images/brands/BananaRepublic.png') },
    { name: 'Dynamite', logo: require('@/assets/images/brands/Dynamite.png') },
    { name: 'Sephora', logo: require('@/assets/images/brands/Sephora.png') },
    { name: 'Gymshark', logo: require('@/assets/images/brands/Gymshark.png') },
    { name: 'Abercrombie & Fitch', logo: require('@/assets/images/brands/AbercrombieandFitch.png') },
    { name: 'Ralph Lauren', logo: require('@/assets/images/brands/RalphLauren.png') },
    { name: 'Uniqlo', logo: require('@/assets/images/brands/Uniqlo.png') },
    { name: 'Calvin Klein', logo: require('@/assets/images/brands/CalvinKlein.png') },
    { name: 'Gucci', logo: require('@/assets/images/brands/Gucci.png') },
];

export default brands;