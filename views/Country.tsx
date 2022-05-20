import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { countryScreenProps } from '../types/Navigator'
import SearchBarComponent from '../components/SearchBar'

const Country = ({}: countryScreenProps) => {
  const [search, setSearch] = useState('')
  return (
    <View>
      <Text style={{ fontSize: 30, color: 'red', textAlign: 'center' }}>{search}</Text>
      <SearchBarComponent search={search} setSearch={setSearch} />
    </View>
  )
}

export default Country
