import { render } from '@testing-library/react-native'
import React, { Dispatch, SetStateAction } from 'react'
import CityResults from '../CityResults'
import SearchBarComponent from '../SearchBar'

type searchBarComponentProps = {
  search: string
  setSearch: any
  placeholder: string
  loading: boolean
}
const setHookState = jest.fn().mockImplementation((newState) => [newState, () => {}])

describe('Test City Results', () => {
  let props: searchBarComponentProps

  beforeEach(() => {
    props = {
      search: '',
      setSearch: setHookState,
      placeholder: '',
      loading: false
    }
  })
  const renderResults = () =>
    render(
      <SearchBarComponent
        search={props.search}
        placeholder={props.placeholder}
        loading={props.loading}
        setSearch={props.setSearch}
      />
    )
  it('Renders Correctly', () => {
    const { toJSON } = renderResults()
    expect(toJSON()).toMatchSnapshot()
  })
  it('Should Accept Inputs', () => {
    props.setSearch('New York')
    const { findByText } = renderResults()
    expect(findByText('New York')).toBeTruthy()
  })
})
