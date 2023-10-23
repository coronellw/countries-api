import { useCountryContext } from "context/country-context"

import SearchBar from "layout/searchbar"
import Country from "./country"
import './countries.scss'

function Countries() {
  const { countries, filter } = useCountryContext()
  const filteredCountries = filter 
    ? countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))
    : countries
  return (
    <div>
      <SearchBar />
      <div className="countries container-xl">
        {filteredCountries.map(c => <Country key={c.flags.svg} country={c} />)}
      </div>
    </div>
  )
}

export default Countries