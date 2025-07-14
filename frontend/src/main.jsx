import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./App.jsx";
import { ChakraProvider} from "@chakra-ui/react";
// import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom"; 
import { extendTheme } from "@chakra-ui/react"; 

const theme = extendTheme({});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </BrowserRouter>
</React.StrictMode>,
);