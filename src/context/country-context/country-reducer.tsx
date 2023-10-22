import { countryState, Country } from "./country-context"

type action = {
  type: "SET_COUNTRIES" | "SET_SELECTED_COUNTRY"
  payload: Country | Array<Country>
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
}

export const actions = {
  SET_COUNTRIES: "SET_COUNTRIES",
  SET_SELECTED_COUNTRY: "SET_SELECTED_COUNTRY",
}
