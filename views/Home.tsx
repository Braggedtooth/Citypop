import { Alert, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { homeScreenProps } from '../types/Navigator'
import PageTitle from '../components/LogoText'
import { Button, Text } from '@rneui/themed'
import SearchBarComponent from '../components/SearchBar'

const Home = ({}: homeScreenProps) => {
  const navigation = useNavigation<homeScreenProps>()
  const [search, setSearch] = useState('')
  const results = () => {
    if (!search) {
      Alert.alert('No Input')
      return
    }
    navigation.navigate('Details', { query: search })
  }
  return (
    <View>
      <PageTitle text="City Pop" />
      <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 10 }}>
        Arbetprov City Population React Native + Typescript
      </Text>
      <SearchBarComponent search={search} setSearch={setSearch} />
      <Button
        title="View Result"
        icon={{
          name: 'book',
          type: 'font-awesome',
          size: 24,
          color: 'white'
        }}
        onPress={results}
      />
    </View>
  )
}

export default Home
