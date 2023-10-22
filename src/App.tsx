import Layout from "./layout"
import { Outlet } from "react-router-dom"

import "./App.scss"

// https://restcountries.com

function App() {
  return <Layout>
    <Outlet />
  </Layout>
}

export default App
