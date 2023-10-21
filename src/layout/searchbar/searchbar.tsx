import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import Dropdown, { Item } from "components/Dropdown"

import "./searchbar.scss"

type SearchBarProps = {}

const defaultOption: Item = { label: 'Filter by Region', value: 'all' }
const regions: Array<Item> = [
  { label: 'Africa', value: 'africa' },
  { label: 'America', value: 'america' },
  { label: 'Asia', value: 'Asia' },
  { label: 'Europe', value: 'Europe' },
  { label: 'Oceania', value: 'Oceania' },
]

function SearchBar({ }: SearchBarProps) {
  const [currentItem, setCurrentItem] = useState<Item>(defaultOption)
  const handleSelectedItem = (item: Item) => setCurrentItem(item)
  return (
    <div className="search container-xl">
      <span className="search__bar">
        <FontAwesomeIcon className="search__icon" icon={faSearch} color="gray" />
        <input className="search__input" type="search" name="search" id="serach" placeholder="Search for a country..." />
      </span>
      <Dropdown
        currentItem={currentItem}
        options={regions}
        onItemSelected={handleSelectedItem}
        className="search__dropdown col-6"
      />
    </div>
  )
}

export default SearchBar