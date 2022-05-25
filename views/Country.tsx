import { ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { countryScreenProps } from '../types/Navigator'
import SearchBarComponent from '../components/SearchBar'
import useCountry from '../utils/useCountry'
import useDebounce from '../utils/useDeboucedValue'
import CountryResults from '../components/CountryResults'
import Error from '../components/Error'
import useNavigate from '../utils/useNavigate'

const Country = ({}: countryScreenProps) => {
  const [search, setSearch] = useState('')
  const debouced = useDebounce(search, 1000)
  const { data, isError, isLoading } = useCountry(debouced)
  const { goTodetails } = useNavigate()

  return (
    <ScrollView>
      <SearchBarComponent search={search} setSearch={setSearch} loading={isLoading} placeholder="Search Countries..." />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10
        }}
      >
        {isError && <Error />}
        {data && data?.length < 1 && <Error empty value={debouced} />}
        {data &&
          data.map((country) => {
            if (country.adminName1) {
              return (
                <CountryResults
                  results={{ countryName: country.countryName, name: country.name, population: country.population }}
                  key={country.geonameId}
                  details={goTodetails}
                />
              )
            }
          })}
      </View>
    </ScrollView>
  )
}

export default Country
