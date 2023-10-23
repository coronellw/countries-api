import { useNavigate } from "react-router-dom"
import { Country as CountryType, useCountryContext } from "context/country-context"

type CountryProps = {
  country: CountryType
}
function Country({ country }: CountryProps) {
  const { setSelectedCountry, setFilter } = useCountryContext()
  const navigate = useNavigate();

  const handleFetchCountry = async () => {
    try {
      const fetchResponse = await fetch(`https://restcountries.com/v3.1/alpha/${country.cioc}`)
      const countryResult = await fetchResponse.json()
      setSelectedCountry(countryResult[0])
      setFilter('')

      return navigate('/country-details')
    } catch (error) {
      return navigate('/error')
    }
    
  }

  return (
    <div
      className="card pb-4 country"
      onClick={handleFetchCountry}
    >
      <img
        src={country.flags.svg}
        className="card-img-top object-fit-cover"
        alt={country.flags.alt}
      />
      <div className="card-body pt-4 px-4">
        <h5 className="card-title">{country.name.common}</h5>
        <div className="card-text">
          <span className="combo">
            <label>Population:</label>
            <span>{country.population.toLocaleString()}</span>
          </span>
          <span className="combo">
            <label>Region:</label>
            <span>{country.region}</span>
          </span>
          <span className="combo">
            <label>Capital:</label>
            <span>{country.capital}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Country