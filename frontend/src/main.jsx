import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom"; 


const theme = extendTheme({});

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
</StrictMode>

)
