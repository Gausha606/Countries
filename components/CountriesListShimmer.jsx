import "./CountriesListShimmer.css";

export default function CountriesListShimmer() {
  return (
    <div className="countries-container">
      {Array.from({ length: 20 }).map((ele, i) => {
        return (
          <div key={i} className="country-card shimmer-card">
            <div className="country-flag shimmer"></div>
            <div className="country-name shimmer"></div>
            <div className="country-population shimmer"></div>
            <div className="country-region shimmer"></div>
            <div className="country-subRegion shimmer"></div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
}
