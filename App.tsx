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
import { View } from 'react-native'

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator<RootNavigation>()
export default function App() {
  const { theme } = useTheme()
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync()
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font)
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])
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
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  )
}
