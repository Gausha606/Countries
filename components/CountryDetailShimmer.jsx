// CountryDetailShimmer.jsx
import './CountryDetailShimmer.css';

export default function CountryDetailShimmer() {
  return (
    // 👇 Yahan 'shimmer-active' class add karein
    <div className="country-details-container">
    <div className="country-details shimmer-active">
      <div className="country-flag"></div>
      <div className="country-detail">
        <div className="country-name shimmer"></div>
        <div className="country-population shimmer"></div>
        <div className="country-region shimmer"></div>
        <div className="country-subRegion shimmer"></div>
        <div className="country-capital shimmer"></div>
        <div className="country-top-level-domain shimmer"></div>
      </div>
    </div>
    </div>
  )
}
