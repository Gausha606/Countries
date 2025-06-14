import { useEffect, useState } from "react";
import Card from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  const [allCountries, setAllCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,subregion,tld,currencies,languages,borders")
      .then((res) => res.json())
      .then((data) => {
        setAllCountries(data);
      });
  }, []);

  if (!allCountries.length) {
    return <CountriesListShimmer />;
  }

  return (
    <>
      <div className="countries-container">
        {allCountries
          .filter((country) =>
            country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
          )
          .map((country, i) => {
            return (
              <Card
                key={i}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population.toLocaleString("en-IN")}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
                
              />
              
            );
          })}
      </div>
    </>
  );
}
