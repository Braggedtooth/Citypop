import React from 'react'
import Home from './Home'
import Country from './Country'
import City from './City'
import { BottomNavigation } from '../types/Navigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from '@rneui/themed'

const BottomTab = createBottomTabNavigator<BottomNavigation>()
const Screens = () => {
  const { theme } = useTheme()
  return (
    <>
    <BottomTab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
        flex: 1,
        width: '100%',
        maxWidth: 1080,
        alignSelf: 'center',
        justifyContent: 'center'
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: `${theme.colors.primary}`,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={30} />,
          tabBarStyle: { backgroundColor: `${theme.colors.secondary}` }
        }}
      />
      <BottomTab.Screen
        name="Country"
        component={Country}
        options={{
          headerShown: false,
          tabBarActiveTintColor: `${theme.colors.primary}`,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="earth" color={color} size={30} />,
          tabBarStyle: { backgroundColor: `${theme.colors.secondary}` }
        }}
      />
    </BottomTab.Navigator>
    </>
  )
}

export default Screens
