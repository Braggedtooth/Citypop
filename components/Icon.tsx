import { , View } from 'react-native'
import { Text } from '@rneui/themed'
import React from 'react'
import { Icon } from '@expo/vector-icons/build/createIconSet'

type IconComponentProps = { 
  color : string, 
  name: string, 
  size:string
}
const IconComponent = ({ color, name, size }:IconComponentProps) => {
  return (
    <View>
      <Text>{color}</Text>
      <Text>{name}</Text>
      <Text>{size}</Text>
    </View>
  )
}

export default IconComponent


