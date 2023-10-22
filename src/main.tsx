import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "context/theme-context"
import { CountryProvider } from "context/country-context"
import App from "./App.tsx"
import "./index.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CountryProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CountryProvider>
  </React.StrictMode>
)
