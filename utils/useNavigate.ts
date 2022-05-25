import { useNavigation } from '@react-navigation/native'
import { CountryResultsProps } from '../types/Components'
import { homeScreenProps } from '../types/Navigator'

const useNavigate = () => {
  const navigation = useNavigation<homeScreenProps>()
  const goTodetails = ({ results }: CountryResultsProps) => {
    return navigation.navigate('Details', { name: results.name, population: results.population })
  }
  return { goTodetails }
}
export default useNavigate
