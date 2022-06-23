import { CountryResponse } from '../types/Response'
import { useQuery } from 'react-query'
import { countryApi } from './api'

/**
 * FetchCountry is a function that takes a string and returns a promise that resolves to an array of
 * CountryResponse objects.
 * @param {string} country - string - the country name
 */
const fetchCountry = (country: string): Promise<[CountryResponse]> =>
  countryApi.get(`searchJSON?q=${country}`).then((response) => response.data.geonames)

/**
 * UseCountry is a function that takes a country as an argument and returns a useQuery hook that
 * fetches the country data from the API.
 * @param {string} country - string - The country to fetch.
 */
const useCountry = (country: string) =>
  useQuery(['Fetch Country', country], () => fetchCountry(country), {
    enabled: Boolean(country)
  })

export default useCountry
