import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e0f2ff',
      100: '#b8dcff',
      200: '#8cc6ff',
      300: '#60b0ff',
      400: '#349aff',
      500: '#0a84ff',
      600: '#0066cc',
      700: '#004999',
      800: '#002d66',
      900: '#001233',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
