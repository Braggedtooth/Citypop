import { CityResponse } from '../types/Response'
import { useQuery } from 'react-query'
import { cityApi } from './api'

const fetchCity = (city: string): Promise<CityResponse> =>
  cityApi.get(`city?name=${city}`).then((response) => response.data[0])

const useCity = (city: string) =>
  useQuery(['fetch City', city], () => fetchCity(city), {
    enabled: Boolean(city)
  })

export default useCity
