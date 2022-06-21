import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp } from '@react-navigation/native'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
export type RootNavigation = {
  CityPop: undefined
  Details: { name: string; population: number }
}
export type BottomNavigation = {
  Country: undefined
  Home: undefined
}

export type HomeScreenProps = CompositeNavigationProp<
  NativeStackNavigationProp<RootNavigation>,
  BottomTabNavigationProp<BottomNavigation>
>

export type countryScreenProps = BottomTabNavigationProp<BottomNavigation, 'Country'>

export type cityScreenProps = {
  name: string
  population: number
} & NativeStackScreenProps<RootNavigation, 'Details'>
