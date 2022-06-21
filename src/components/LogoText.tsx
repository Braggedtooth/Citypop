import { StyleSheet, View } from 'react-native'
import { Text, useTheme } from '@rneui/themed'
import React from 'react'

type LogoTextProps = {
  text: string
}
const LogoText = ({ text }: LogoTextProps) => {
  const { theme } = useTheme()
  return (
    <View
      style={{
        marginVertical: 30,
        padding: 50
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 50,
          color: theme.colors.secondary,
          fontFamily: 'LibreBarcode39Text_400Regular'
        }}
      >
        {text}
      </Text>
    </View>
  )
}

export default LogoText
