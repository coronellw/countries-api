import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import data from 'data/data.json'

import BackButton from "components/Button"
import { useCountryContext } from "context/country-context"

import './country-details.scss'

function CountryDetails() {
  const navigate = useNavigate()
  const { selectedCountry, setSelectedCountry, setFilter } = useCountryContext()

  useEffect(() => {
    if (!selectedCountry) {
      console.log('[country-details] should redirect')
      navigate('/')
    }
  }, [])

  const handleFetchCountry = async (countryCode: string) => {
    try {
      const fetchResponse = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      const countryResult = await fetchResponse.json()
      setSelectedCountry(countryResult[0])
      setFilter('')
    } catch (error) {
      return navigate('/error')
    }
  }

  const getNativeName = () => {
    if (selectedCountry) {
      return Object.values(selectedCountry.name.nativeName)[0].common
    }
  }

  const getTLD = () => {
    if (selectedCountry) {
      return selectedCountry.tld.join(', ')
    }
  }

  const getCurrencies = () => {
    if (selectedCountry) {
      return Object.values(selectedCountry.currencies).map(c => c.name).join(', ')
    }
  }

  const getLanguages = () => {
    if (selectedCountry) {
      return Object.values(selectedCountry.languages).join(', ')
    }
  }

  const getBorders = () => {
    if (selectedCountry) {
      const borders = data.filter(c => selectedCountry.borders.includes(c.alpha3Code))
      return borders.map(b => (
        <div
          className="details__border"
          onClick={() => {handleFetchCountry(b.alpha3Code)}}
        >
          {b.name}
        </div>
      ))
    }
  }

  return (
    <div className="container details py-5">
      <BackButton className="mb-5" />
      <div className="details__content">
        <img
          className="details__flag"
          src={selectedCountry?.flags.svg}
          alt={selectedCountry?.flags.alt}
        />

        <div className="data">
          <h5 className="data__name">
            {selectedCountry?.name.common}
          </h5>

          <div className="data__general">
            <span className="combo">
              <label>Native Name:</label>
              <span>{getNativeName()}</span>
            </span>

            <span className="combo">
              <label>Population:</label>
              <span>{selectedCountry?.population.toLocaleString()}</span>
            </span>

            <span className="combo">
              <label>Region:</label>
              <span>{selectedCountry?.region}</span>
            </span>

            <span className="combo">
              <label>Subregion:</label>
              <span>{selectedCountry?.subregion}</span>
            </span>

            <span className="combo">
              <label>Capital:</label>
              <span>{selectedCountry?.capital}</span>
            </span>
          </div>

          <div className="data__details">
            <span className="combo">
              <label>Top Level Domain:</label>
              <span>{getTLD()}</span>
            </span>

            <span className="combo">
              <label>Currencies:</label>
              <span>{getCurrencies()}</span>
            </span>

            <span className="combo">
              <label>Languages:</label>
              <span>{getLanguages()}</span>
            </span>
          </div>

          <div className="data__borders">
            <span className="combo combo--column">
              <label className="mb-2">Borders countries:</label>
              <span className="borders">{getBorders()}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails