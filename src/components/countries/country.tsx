import { Country as CountryType } from "context/country-context"

type CountryProps = {
  country: CountryType
}
function Country({ country }: CountryProps) {
  return (
    <div className="card pb-4 country">
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
            <span>{country.population}</span>
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