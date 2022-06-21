import { fireEvent, render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import CityResults from '../CityResults'
import CountryResults from '../CountryResults'

describe('Test City Results', () => {
  let props = { name: '', population: 0, countryName: '' }
  beforeEach(() => {
    props = {
      name: 'Test Country',
      population: 3000,
      countryName: 'Holland'
    }
  })
  const renderResults = () => render(<CountryResults results={props} details={() => true} />)

  it('Renders Correctly', () => {
    const component = renderResults().toJSON()
    expect(component).toMatchSnapshot()
  })
  it('Should render props', () => {
    const { getByTestId } = renderResults()
    const countryInfo = getByTestId('countryInfo')
    expect(countryInfo.props.children).toBe(`${props.name}, ${props.countryName}`)
  })
  it('Should be clickable', () => {
    const { getByTestId: country } = renderResults()
    const countryInfo = country('countryInfo')
    const press = fireEvent(countryInfo, 'press')
    expect(press).toBeTruthy()
  })
})
