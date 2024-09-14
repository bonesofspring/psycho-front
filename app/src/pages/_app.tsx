import { Provider } from 'react-redux'
import '@/assets/styles/reset.css'
import { lime, purple } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import type { AppPropsType } from 'next/dist/shared/lib/utils'

import { store } from '@/store'
import { NotificationsContainer } from '@/ui/components/_singletons/NotificationsContainer'

if (process.env.NEXT_PUBLIC_IS_API_MOCKING_ENABLED === '1' && typeof window !== 'undefined') {
  const msw = await import('@/mocks')
  await msw.initBrowserMocks()
}

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
})

const App = ({ Component, pageProps }: AppPropsType) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Component {...pageProps} />

      <NotificationsContainer />
    </Provider>
  </ThemeProvider>
)

export default App
