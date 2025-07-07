import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./components/App.jsx";
import { ChakraProvider, extendTheme} from "@chakra-ui/react";
import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom"; 
// import { extendTheme } from "@chakra-ui/react"



const theme = extendTheme({});

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
</StrictMode>
);