import { View } from 'react-native'
import React from 'react'
import { Text, useTheme } from '@rneui/themed'
type errorProps = {
  empty?: boolean
  value?: string
}
const Error = ({ empty, value }: errorProps) => {
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
      <Text testID="error" style={{ color: !empty ? theme.colors.warning : theme.colors.error, textAlign: 'center' }}>
        {!empty
          ? `Woah there! We couldnt find ${value} check for typos and try again`
          : `Woooah! Didnt expect that? Welp it happened.. This is an error`}
      </Text>
    </View>
  )
}

export default Error
