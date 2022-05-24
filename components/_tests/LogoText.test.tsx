import { render } from '@testing-library/react-native'
import React from 'react'
import CityResults from '../CityResults'

describe('Test City Results', () => {
  let props = { name: '', population: 0 }
  beforeEach(() => {
    props = {
      name: 'Test City',
      population: 3000
    }
  })
  const renderCityResults = () => render(<CityResults results={props} />)
  it('Should render given name', () => {
    props.name = 'Test City'
    const { getByTestId, toJSON } = renderCityResults()
    const title = getByTestId('title')
    expect(title.props.children).toBe(`Welcome to${props.name}`)
    expect(toJSON()).toMatchSnapshot()
  })
})
