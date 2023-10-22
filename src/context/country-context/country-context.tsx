import { createContext, useContext, PropsWithChildren, useReducer } from "react"
import { reducer, initialCountryState } from "./country-reducer"

export type Country = {
  name: {
    common: string
    official: string
    nativeName: any
  },
  capital: Array<string>
  region: string
  population: number
  flags: {
    png?: string
    svg?: string
    alt?: string
  }
  cioc: string
}

export type countryState = {
  countries: Array<Country>
  setCountries: (countries: Array<Country>) => void
  selectedCountry?: Country
  setSelectedCountry: (country: Country) => void
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

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        selectedCountry: state.selectedCountry,
        setCountries,
        setSelectedCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  )
}
