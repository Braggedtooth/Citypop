import { View } from 'react-native'
import { Text, Card, useTheme } from '@rneui/themed'
import { CityResponse } from '../types/Response'

type CityResultsProps = {
  results: CityResponse
}
const CityResults = ({ results }: CityResultsProps) => {
  const { theme } = useTheme()
  return (
    <Card containerStyle={{ borderRadius: 10, backgroundColor: theme.colors.searchBg }}>
      <Card.Title style={{ fontSize: 20 }}> Welcome to {results.name}</Card.Title>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.black,
          padding: 10,
          borderRadius: 5
        }}
      >
        <Text style={{ fontSize: 40, color: theme.colors.success, fontFamily: 'Baskerville', fontWeight: 'bold' }}>
          {results.population.toLocaleString()}
        </Text>
      </View>
      <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 5, color: theme.colors.greyOutline }}>
        People live here
      </Text>
    </Card>
  )
}

export default CityResults
