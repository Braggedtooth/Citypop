import { View } from 'react-native'
import React from 'react'
import { Text, useTheme } from '@rneui/themed'
const Error = () => {
  const { theme } = useTheme()
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.black,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5
      }}
    >
      <Text style={{ color: theme.colors.error, textAlign: 'center' }}>
        Woooah! Didnt expect that? Welp it happened.. This is an error
      </Text>
    </View>
  )
}

export default Error
