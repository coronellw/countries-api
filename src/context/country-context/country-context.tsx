import { createContext, useContext, PropsWithChildren, useReducer } from "react"
import { reducer, initialCountryState } from "./country-reducer"

export type Country = {
  name: {
    common: string
    official: string
    nativeName: {
      [key: string]: {
        official: string
        common: string
      }
    }
  }
  capital: Array<string>
  region: string
  subregion: string
  population: number
  flags: {
    png?: string
    svg?: string
    alt?: string
  }
  cioc: string
  tld: Array<string>
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  languages: {
      [key: string]: string
  }
  borders: Array<string>
}

export type countryState = {
  countries: Array<Country>
  setCountries: (countries: Array<Country>) => void
  selectedCountry?: Country
  setSelectedCountry: (country: Country) => void
  filter?: string
  setFilter: (value?: string) => void
}

const CountryContext = createContext(initialCountryState)

// eslint-disable-next-line react-refresh/only-export-components
export const useCountryContext = () => useContext(CountryContext)

export const CountryProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialCountryState)

  const setCountries = (countries: Array<Country>) =>
    dispatch({ type: "SET_COUNTRIES", payload: countries })
  const setSelectedCountry = (country: Country) =>
    dispatch({ type: "SET_SELECTED_COUNTRY", payload: country })
  const setFilter = (filter?: string) =>
    dispatch({ type: "SET_FILTER", payload: filter ?? "" })

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        selectedCountry: state.selectedCountry,
        filter: state.filter,
        setCountries,
        setSelectedCountry,
        setFilter,
      }}
    >
      {children}
    </CountryContext.Provider>
  )
}
