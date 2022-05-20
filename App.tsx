import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@rneui/themed'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RootNavigation } from './types/Navigator'
import { useTheme } from '@rneui/themed'
import Screens from './views/Screens'

import City from './views/City'

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator<RootNavigation>()
export default function App() {
  const { theme } = useTheme()
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
            <Stack.Screen name="Home" component={Screens} />
            <Stack.Screen name="Details" component={City} />
          </Stack.Navigator>
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  )
}
