import { render } from '@testing-library/react-native'
import React from 'react'
import CityResults from '../CityResults'
import Error from '../Error'

describe('Test City Results', () => {
  let props = { empty: true, value: '' }
  beforeEach(() => {
    props = {
      empty: false,
      value: 'Nice'
    }
  })
  const renderResult = () => render(<Error empty={props.empty} value={props.value} />)
  it('Renders Correctly', () => {
    props.empty = true
    const component = renderResult()
    const error = component.getByTestId('error')
    expect(error.props.children).toBe(`Woooah! Didnt expect that? Welp it happened.. This is an error`)
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('Should show not found value', () => {
    const component = renderResult()
    const error = component.getByTestId('error')
    expect(error.props.children).toBe(`Woah there! We couldnt find ${props.value} check for typos and try again`)
  })
})
