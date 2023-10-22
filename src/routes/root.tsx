import { createBrowserRouter } from 'react-router-dom'
import App from 'App'
import Countries from 'components/countries'
import Error from 'components/Error'

export async function loader() {
  const result = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cioc")
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
        path: "country/:country",
        element: <div>TODO</div>
      },
      {
        path: "country",
        element: <Countries />
      }
    ]
  }
])