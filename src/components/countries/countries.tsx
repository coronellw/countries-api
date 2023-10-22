import { useCountryContext } from "context/country-context"

import Country from "./country"
import './countries.scss'

function Countries() {
  const { countries } = useCountryContext()
  return (
    <div className="container-md countries">
      {countries.map(c => <Country key={c.flags.svg} country={c} />)}
    </div>
  )
}

export default Countries