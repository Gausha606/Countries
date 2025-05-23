import React from "react";
import { Link } from "react-router";

 function CountryCard({name, flag, population, region, capital, data }) {
  return (
    <Link className="country-card" to={`./${name}`} state={data}>
    <img src={flag} alt={name + " flag"} />
    <div className="card-text">
    <h3 className="card-title">{name}</h3>
    <p><b>Population: </b>{population}</p>
    <p><b>Region: </b>{region}</p>
    <p><b>Capital: </b>{capital}</p>
    </div>
</Link>
  )
}
 
const Card = React.memo(CountryCard);

export default Card;