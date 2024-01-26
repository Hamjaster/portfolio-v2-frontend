import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ContextProvider } from './context/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ContextProvider>
  </React.StrictMode>,
)
