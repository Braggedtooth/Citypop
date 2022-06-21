import { render } from '@testing-library/react-native'
import React from 'react'
import LogoText from '../LogoText'

describe('Test City Results', () => {
  let props = { text: '' }
  beforeEach(() => {
    props = {
      text: 'City Pop'
    }
  })
  const renderResults = () => render(<LogoText text={props.text} />)
  it('Renders Correctly', () => {
    const component = renderResults()
    expect(component).toMatchSnapshot()
  })
  it('should display text', () => {
    const { findByText } = renderResults()
    expect(findByText(props.text)).toBeTruthy()
  })
})
