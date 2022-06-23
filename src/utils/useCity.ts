import { CityResponse } from '../types/Response'
import { useQuery } from 'react-query'
import { cityApi } from './api'

/**
 * It takes a string and returns a promise that resolves to a CityResponse
 * @param {string} city - string
 */
const fetchCity = (city: string): Promise<CityResponse> =>
  cityApi.get(`city?name=${city}`).then((response) => response.data[0])


/**
 * UseCity is a function that takes a city as a string and returns a useQuery hook that fetches the
 * city data from the API.
 * @param {string} city - string - the city to fetch
 */
const useCity = (city: string) =>
  useQuery(['fetch City', city], () => fetchCity(city), {
    enabled: Boolean(city)
  }
  )

export default useCity
