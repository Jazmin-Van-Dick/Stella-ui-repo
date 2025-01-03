import { HomeIcon, ProfileIcon, WardrobeIcon } from '@/components/Icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: '#232636', 
        tabBarInactiveTintColor: '#B0B3BD', 
        headerShown: false,
        tabBarStyle: {
          height: 64,
          display: 'flex',
          elevation: 0,
          paddingTop: 5,
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon bg={color} />,
        }}
      />
      <Tabs.Screen
        name="wardrobe"
        options={{
          title: 'Wardrobe',
          tabBarIcon: ({ color }) => <WardrobeIcon bg={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <ProfileIcon bg={color} />,
        }}
      />
    </Tabs>
  );
}
