import { countryState, Country } from "./country-context"

type action = {
  type: "SET_COUNTRIES" | "SET_SELECTED_COUNTRY" | "SET_FILTER"
  payload: string | Country | Array<Country>
}

export const reducer = (state: countryState, { type, payload }: action): countryState => {
  switch (type) {
    case actions.SET_COUNTRIES:
      return {
        ...state,
        countries: payload as Array<Country>,
      }
    case actions.SET_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: payload as Country
      }
    case actions.SET_FILTER:
      return {
        ...state,
        filter: payload as string
      }
    default:
      return state
  }
}

export const initialCountryState: countryState = {
  countries: [],
  setCountries: () => {
    console.log(`default function resp`)
  },
  setSelectedCountry: () => {
    console.log("setup selected country")
  },
  setFilter: () => {
    console.log("sets filter value")
  }
}

export const actions = {
  SET_COUNTRIES: "SET_COUNTRIES",
  SET_SELECTED_COUNTRY: "SET_SELECTED_COUNTRY",
  SET_FILTER: "SET_FILTER"
}
