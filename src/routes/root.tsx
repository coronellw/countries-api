import { createBrowserRouter } from 'react-router-dom'
import App from 'App'
import Countries from 'components/countries'
import CountryDetails from 'components/country-details'
import Error from 'components/Error'

export async function loader() {
  const result = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3")
  const data = await result.json()
  return { countries: data }
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Countries />,
      },
      {
        path: "country-details",
        element: <CountryDetails />
      },
    ]
  }
])