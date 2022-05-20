import { View } from 'react-native'
import React from 'react'
import { CountryResponse } from '../types/Response'
import { Text, useTheme } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { homeScreenProps } from '../types/Navigator'

type CountryResultsProps = {
  results: CountryResponse
}
const CountryResults = ({ results }: CountryResultsProps) => {
  const { theme } = useTheme()
  const navigation = useNavigation<homeScreenProps>()
  const go = () => {
    navigation.navigate('Details', { name: results.name, population: results.population })
  }
  return (
    <View style={{ width: '100%' }}>
      <Text
        style={{
          color: theme.colors.white,
          backgroundColor: theme.colors.black,
          marginVertical: 5,
          padding: 15,
          marginHorizontal: 50,
          borderRadius: 5
        }}
        onPress={go}
      >
        {results.name}, {results.countryName}
      </Text>
    </View>
  )
}

export default CountryResults
