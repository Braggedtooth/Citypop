import { Button, View } from 'react-native'
import { Text } from '@rneui/themed'
import React, { useEffect, useState } from 'react'
import { cityScreenProps } from '../types/Navigator'

const City = ({ navigation, route }: cityScreenProps) => {
  const [first, setfirst] = useState(false)
  useEffect(() => {
    setfirst(true)
    return () => {
      setfirst(false)
    }
  }, [route.params.query])

  return (
    <View>
      <Text>City</Text>
      {first && (
        <Text style={{ fontSize: 24, color: 'red', textAlign: 'center' }}>
          {route.params.query}
        </Text>
      )}
      <Button title="Go back" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default City
