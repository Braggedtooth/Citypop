import { CountryResponse } from '../types/Response'
import { useQuery } from 'react-query'
import { countryApi } from './api'

const fetchCountry = (country: string): Promise<[CountryResponse]> =>
  countryApi.get(`searchJSON?q=${country}`).then((response) => response.data.geonames)

const useCountry = (country: string) =>
  useQuery(['Fetch Country', country], () => fetchCountry(country), {
    enabled: Boolean(country)
  })

export default useCountry
