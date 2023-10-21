import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "context/theme-context"
import App from "./App.tsx"
import "./index.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
