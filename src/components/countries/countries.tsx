import { useCountryContext } from "context/country-context"

import SearchBar from "layout/searchbar"
import Country from "./country"
import './countries.scss'

function Countries() {
  const { countries } = useCountryContext()
  return (
    <div>
      <SearchBar />
      <div className="countries container-xl">
        {countries.map(c => <Country key={c.flags.svg} country={c} />)}
      </div>
    </div>
  )
}

export default Countries