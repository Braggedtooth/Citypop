// @ts-nocheck
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@rneui/themed'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RootNavigation } from './types/Navigator'
import { useTheme } from '@rneui/themed'
import Screens from './views/Screens'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import City from './views/City'
import { Entypo } from '@expo/vector-icons'
import { useState, useEffect, useCallback } from 'react'
import { useFonts, LibreBarcode39Text_400Regular } from '@expo-google-fonts/libre-barcode-39-text'
import { View } from 'react-native'

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator<RootNavigation>()
export default function App() {
  const { theme } = useTheme()
  const [appIsReady, setAppIsReady] = useState(false)
  let [fontsLoaded] = useFonts({
    LibreBarcode39Text_400Regular
  })
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font)
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        await SplashScreen.hideAsync()
        setAppIsReady(true)
      }
    }

    prepare()
  }, [fontsLoaded])
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              height: '100%',
              backgroundColor: theme.colors.grey2
            }}
            onLayout={onLayoutRootView}
          >
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: `${theme.colors.secondary}` },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
              }}
            >
              <Stack.Screen name="CityPop" component={Screens} />
              <Stack.Screen name="Details" component={City} />
            </Stack.Navigator>
          </View>
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  )
}
