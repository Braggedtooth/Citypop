import { View } from 'react-native'
import React from 'react'
import { CountryResponse } from '../types/Response'
import { Text, useTheme } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { homeScreenProps } from '../types/Navigator'
import { CountryResultsProps } from '../types/Components'
import useNavigate from '../utils/useNavigate'

const CountryResults = ({ results, details }: CountryResultsProps) => {
  const { theme } = useTheme()

  return (
    <View style={{ width: '100%' }}>
      <Text
        testID="countryInfo"
        style={{
          color: theme.colors.white,
          backgroundColor: theme.colors.black,
          marginVertical: 5,
          padding: 15,
          marginHorizontal: 50,
          borderRadius: 5
        }}
        onPress={() => details({ results })}
      >
        {`${results.name}, ${results.countryName}`}
      </Text>
    </View>
  )
}

export default CountryResults
