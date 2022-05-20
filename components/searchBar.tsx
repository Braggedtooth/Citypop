import { StyleSheet, Text, View } from 'react-native'
import { SearchBar } from '@rneui/themed'
import React, { useState, Dispatch, SetStateAction } from 'react'
import { Icon } from '@rneui/themed'

type searchBarComponentProps = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}
const SearchBarComponent = ({ search, setSearch }: any) => {
  const updateSearch = (search: string) => {
    setSearch(search)
  }
  return (
    <View style={{ marginHorizontal: 10 }}>
      <SearchBar
        placeholder="Search City... "
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  )
}

export default SearchBarComponent

const styles = StyleSheet.create({})
