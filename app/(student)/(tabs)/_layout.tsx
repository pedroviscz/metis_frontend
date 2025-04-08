import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { colors } from '@/src/constants/colors';
import { montserrat } from '@/src/constants/montserrat';
import { Platform, Pressable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      animation: 'shift',
      tabBarActiveTintColor: colors.pcian,
      tabBarInactiveTintColor: colors.gray,
      headerShown: false,
      tabBarLabelStyle: {
        fontFamily: montserrat.regular,
        fontSize: 11
      },
      tabBarStyle: {
        backgroundColor: colors.offwhite,
        ...(Platform.OS === 'android' && {
          elevation: 0,
          borderWidth: 0,
          height: 60,
          paddingTop: 5,
        })
      },
      tabBarItemStyle: {
        opacity: 1,
      },
      tabBarButton: (props) => <Pressable {...props} android_ripple={{ color: null }}/>
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={27}  name="person-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="frequency"
        options={{
          title: 'Frequência',
          tabBarIcon: ({ color }) => <FontAwesome str size={28} name="clock-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: 'Horário',
          tabBarIcon: ({ color }) => <FontAwesome size={27} name="calendar" color={color} />,
        }}
      />
    </Tabs>
  );
}