import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from 'react-router-dom'
import { router } from "routes/root"

import { ThemeProvider } from "context/theme-context"
import { CountryProvider } from "context/country-context"
import "./index.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CountryProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </CountryProvider>
  </React.StrictMode>
)
