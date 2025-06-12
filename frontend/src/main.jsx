import  { Prorvider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/App.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Prorvider>
    <App />
  </Prorvider>
  </StrictMode>,
)
