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
  const renderResult = () => render(<CityResults results={props} />)
  it('Renders Correctly', () => {
    const component = renderResult().toJSON()
    expect(component).toMatchSnapshot()
  })
  it('Should render given name', () => {
    const { getByTestId } = renderResult()
    const title = getByTestId('title')
    expect(title.props.children).toBe(`Welcome to ${props.name}`)
  })
  it('Should render population with locale string method', () => {
    const { getByTestId } = renderResult()
    const population = getByTestId('population')
    expect(population.props.children).toBe(props.population.toLocaleString())
  })
})
