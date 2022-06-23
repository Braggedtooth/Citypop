import { useNavigation } from '@react-navigation/native'
import { CountryResultsProps } from '../types/Components'
import { HomeScreenProps } from '../types/Navigator'

/**
 * It's a function that returns a function that navigates to the details screen with the name and
 * population of the country.
 * @returns An object with a function called goTodetails
 */
const useNavigate = () => {
  const navigation = useNavigation<HomeScreenProps>()
  
/**
 * `goTodetails` is a function that takes in an object with a property called `results` and returns a
 * navigation.navigate function that takes in two parameters, `name` and `population`
 * @param {CountryResultsProps}  - CountryResultsProps - this is the type of the props that are passed
 * to the component
 * @returns The navigation.navigate function is being returned.
 */
  const goTodetails = ({ results }: CountryResultsProps) => {
    return navigation.navigate('Details', { name: results.name, population: results.population })
  }
  return { goTodetails }
}
export default useNavigate
