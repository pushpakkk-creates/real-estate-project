import { useState } from "react";

function Home() {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="tabs">
              <button
                className={activeTab === "buy" ? "active" : ""}
                onClick={() => setActiveTab("buy")}
              >
                Buy
              </button>
              <button
                className={activeTab === "rent" ? "active" : ""}
                onClick={() => setActiveTab("rent")}
              >
                Rent
              </button>
              <button>Commercial</button>
              <button>Plots/Land</button>
            </div>

            <div className="search-box">
              <input type="text" placeholder="Search properties in Nagpur..." />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTINUE BROWSING */}
      <div className="section">
        <h2>Continue Browsing</h2>
        <div className="city-box">
          <div className="city-card">Buy in Nagpur</div>
          <div className="city-card">Explore New Area</div>
        </div>
      </div>

      {/* RECOMMENDED PROPERTIES */}
      <div className="section">
  <h2>Featured Properties in Nagpur</h2>

  <div className="property-grid">

    <div className="property-card">
      <img
        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
        alt="property"
      />

      <div className="property-info">
        <div className="price">₹ 48,00,000</div>
        <h3>2 BHK Apartment</h3>
        <p className="location">📍 Manish Nagar, Nagpur</p>

        <div className="property-details">
          <span>2 BHK</span>
          <span>1200 sq.ft</span>
          <span className="status available">Available</span>
        </div>

        <button>View Details</button>
      </div>
    </div>


    <div className="property-card">
      <img
        src="https://images.unsplash.com/photo-1605146768851-eda79da39897"
        alt="property"
      />

      <div className="property-info">
        <div className="price">₹ 72,00,000</div>
        <h3>3 BHK Luxury Flat</h3>
        <p className="location">📍 Wardha Road, Nagpur</p>

        <div className="property-details">
          <span>3 BHK</span>
          <span>1600 sq.ft</span>
          <span className="status available">Available</span>
        </div>

        <button>View Details</button>
      </div>
    </div>

  </div>
</div>
<div className="section">
  <h2>Top Localities in Nagpur</h2>

  <div className="locality-grid">
    <div className="locality-card">Manish Nagar</div>
    <div className="locality-card">Wardha Road</div>
    <div className="locality-card">MIHAN</div>
    <div className="locality-card">Koradi Road</div>
  </div>
</div>
<div className="section">
  <h2>Why Choose NagpurEstate?</h2>

  <div className="why-grid">
    <div>
      <h3>Verified Listings</h3>
      <p>All properties are verified by admin broker.</p>
    </div>
    <div>
      <h3>Direct Seller Contact</h3>
      <p>Admin connects buyers and sellers securely.</p>
    </div>
    <div>
      <h3>Best Prices</h3>
      <p>Get best market deals in Nagpur.</p>
    </div>
  </div>
</div>

    </div>
    
  );
}

export default Home;
