// @ts-nocheck
import { ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { homeScreenProps } from '../types/Navigator'
import PageTitle from '../components/LogoText'
import { Text, useTheme } from '@rneui/themed'
import SearchBarComponent from '../components/SearchBar'
import useCity from '../utils/useCity'
import useDebounce from '../utils/useDeboucedValue'
import CityResults from '../components/CityResults'
import Error from '../components/Error'
import { AntDesign } from '@expo/vector-icons'

const Home = ({}: homeScreenProps) => {
  const [search, setSearch] = useState('')
  const debouced = useDebounce(search, 1000)
  const { data, isError, isLoading, isFetched } = useCity(debouced)
  const { theme } = useTheme()

  return (
    <ScrollView>
      <PageTitle text="City Pop" />
      <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 10 }}>
        Arbetprov City Population React Native + Typescript
      </Text>
      <SearchBarComponent search={search} setSearch={setSearch} loading={isLoading} placeholder="Search Cities..." />
      {isError && <Error />}
      {!data && isFetched && <Error empty value={debouced} />}
      {isLoading && (
        <View style={{ alignContent: 'center', padding: 10 }}>
          <Text style={{ textAlign: 'center' }}>
            <AntDesign name="hourglass" size={40} color={theme.colors.secondary} />
          </Text>
        </View>
      )}
      {data && !isError && <CityResults results={data} />}
    </ScrollView>
  )
}

export default Home
