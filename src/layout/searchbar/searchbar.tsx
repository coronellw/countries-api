import { useCallback, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import Dropdown, { Item } from "components/Dropdown"
import { useCountryContext } from "context/country-context"

import "./searchbar.scss"

// https://restcountries.com

const defaultOption: Item = { label: "Filter by Region", value: "all" }
const regions: Array<Item> = [
  defaultOption,
  { label: "Africa", value: "africa" },
  { label: "America", value: "america" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
]

function getRestCountryURL(region: string): string {
  return region === "all"
    ? "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3"
    : `https://restcountries.com/v3.1/region/${region}`
}

function SearchBar() {
  const [currentItem, setCurrentItem] = useState<Item>(defaultOption)
  const handleSelectedItem = (item: Item) => setCurrentItem(item)
  const { setCountries, setFilter } = useCountryContext()

  const fetchCountries = useCallback(async () => {
    try {
      const results = await fetch(
        getRestCountryURL(currentItem.value as string)
      )
      const data = await results.json()
      setCountries(data)
    } catch (error) {
      console.log("We catched and error\n", error)
    }
  }, [currentItem])

  useEffect(() => {
    fetchCountries()
  }, [fetchCountries])
  
  return (
    <div className="search container my-4">
      <span className="search__bar col-sm-12 col-md-4">
        <FontAwesomeIcon
          className="search__icon"
          icon={faSearch}
        />
        <input
          className="search__input"
          type="search"
          name="search"
          id="serach"
          placeholder="Search for a country..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
      <Dropdown
        currentItem={currentItem}
        options={regions}
        onItemSelected={handleSelectedItem}
        className="search__dropdown col-6 col-md-3"
      />
    </div>
  )
}

export default SearchBar
