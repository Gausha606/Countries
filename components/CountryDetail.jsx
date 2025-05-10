import { useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useLocation, useParams } from "react-router";
import CountryDetailShimmer from "./CountryDetailShimmer";
import useTheme from "../Hooks/useTheme";

export default function CountryDetail() {
  const params = useParams();
  const { state } = useLocation();
  const [isDark] = useTheme();

  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  function updateCountryData(data) {
    setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName ||{})[0]?.common,
      flag: data.flags.svg,
      population: data.population.toLocaleString("en-IN"),
      topLevelDomain: data.tld.join(", "),
      region: data.region,
      capital: data.capital?.[0],
      subregion: data.subregion,
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      languages: Object.values(data.languages ||{}).join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => {
            return borderCountry.name.common;
          });
      })
    ).then((borders) => {
      setTimeout(() =>
        setCountryData((prevState) => ({ ...prevState, borders }))
      );
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <h1 className="error">Country not found</h1>;
  }
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span
          onClick={() => history.back()}
          className={`back-button ${isDark ? "dark" : ""}`}
        >
          <i className="fa-solid fa-arrow-left-long"></i>&nbsp;&nbsp;Back
        </span>
        {countryData === null ? (
          <CountryDetailShimmer />
        ) : (
          <div className="country-details">
            <img src={countryData.flag} alt={`${countryData.name} flag`} />
            <div className="detail-text-container">
              <h1>{countryData.name}</h1>
              <div className="detail-text">
                <p>
                  <b>Native Name: </b>
                  <span className="native-name">{countryData.nativeName || countryData.name}</span>
                </p>
                <p>
                  <b>Population: </b>
                  <span className="population">{countryData.population}</span>
                </p>
                <p>
                  <b>Region: </b>
                  <span className="region">{countryData.region}</span>
                </p>
                <p>
                  <b>Sub-Region: </b>
                  <span className="sub-region">{countryData.subregion}</span>
                </p>
                <p>
                  <b>Capital: </b>
                  <span className="capital">{countryData.capital}</span>
                </p>
                <p>
                  <b>Top Level Domain: </b>
                  <span className="top-level-domain">
                    {countryData.topLevelDomain}
                  </span>
                </p>
                <p>
                  <b>Currencies: </b>
                  <span className="currencies">{countryData.currencies}</span>
                </p>
                <p>
                  <b>Languages: </b>
                  <span className="language">{countryData.languages}</span>
                </p>
              </div>

              {countryData.borders.length !== 0 && (
                <div className="border-countries">
                  <b>Border Countries: </b>
                  {countryData.borders.map((border) => (
                    <Link className={`${isDark ? "dark" : ""}`} key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
