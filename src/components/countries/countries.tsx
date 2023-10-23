import { useCountryContext, Country as CountryType } from "context/country-context"

import SearchBar from "layout/searchbar"
import Country from "./country"
import './countries.scss'

export const loader = async (): Promise<{ countries: Array<CountryType> }> => {
  const fetchCountries = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3")
  const countries = await fetchCountries.json()
  return { countries: countries as Array<CountryType> }
}

function Countries() {
  const { countries: _countries, filter } = useCountryContext()

  const filteredCountries = filter
    ? _countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))
    : _countries
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