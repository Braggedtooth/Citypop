import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp } from '@react-navigation/native'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
export type RootNavigation = {
  Home: undefined
  Details: { query: string }
}
export type BottomNavigation = {
  Country: undefined
  Home: undefined
}

export type homeScreenProps = CompositeNavigationProp<
  NativeStackNavigationProp<RootNavigation>,
  BottomTabNavigationProp<BottomNavigation>
>

export type countryScreenProps = BottomTabNavigationProp<BottomNavigation, 'Country'>

export type cityScreenProps = {
  querry: string
} & NativeStackScreenProps<RootNavigation, 'Details'>
