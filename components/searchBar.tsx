import { StyleSheet, View } from 'react-native'
import { SearchBar } from '@rneui/themed'
import React, { Dispatch, SetStateAction } from 'react'

type searchBarComponentProps = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  placeholder: string
  loading: boolean
}
const SearchBarComponent = ({ search, setSearch, placeholder, loading }: searchBarComponentProps) => {
  const updateSearch = (search: string) => {
    setSearch(search)
  }
  return (
    <View style={{ marginHorizontal: 10 }}>
      <SearchBar
        placeholder={placeholder}
        onChangeText={updateSearch}
        value={search}
        showLoading={loading}
        containerStyle={{ borderRadius: 5, borderTopWidth: 0, borderBottomWidth: 0 }}
      />
    </View>
  )
}

export default SearchBarComponent

const styles = StyleSheet.create({})
