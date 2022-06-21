import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { cityScreenProps } from '../types/Navigator'
import CityResults from '../components/CityResults'

const City = ({ navigation, route }: cityScreenProps) => {
  const [first, setfirst] = useState(false)
  useEffect(() => {
    setfirst(true)
    return () => {
      setfirst(false)
    }
  }, [route.params])

  return (
    <View
      style={{
        flexDirection: 'column',
        marginVertical: 100
      }}
    >
      {first && <CityResults results={{ name: route.params.name, population: route.params.population }} />}
    </View>
  )
}

export default City
