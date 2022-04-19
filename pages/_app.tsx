import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SWRConfig } from 'swr';

import { lightTheme } from '../themes';
import { CartProvider, UiProvider } from '../context';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <UiProvider>
          <SWRConfig value={{
          fetcher: (resource, init) =>fetch(resource, init).then(res => res.json())
        }}>  
          <ThemeProvider theme={ lightTheme }>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </SWRConfig>
      </UiProvider>
    </CartProvider>
  )
}

export default MyApp
