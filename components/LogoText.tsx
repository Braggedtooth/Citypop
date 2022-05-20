import { StyleSheet, View } from 'react-native'
import { Text } from '@rneui/themed'
import React from 'react'

type LogoTextProps = {
  text: string
}
const LogoText = ({ text }: LogoTextProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default LogoText

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    padding: 50
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'LibreBarcode39Text_400Regular'
  }
})
