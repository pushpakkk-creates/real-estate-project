import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { properties } from "../data/properties";

function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Buy");
  const [search, setSearch] = useState("");
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const recent = JSON.parse(localStorage.getItem("recent")) || [];
    setRecentlyViewed(recent);
  }, []);

  const handleSearch = () => {
    navigate(`/properties?type=${activeTab}&search=${search}`);
  };

  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-box">

          <div className="hero-tabs">
            {["Buy", "Rent", "Commercial", "Plots/Land"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="hero-search-bar">
            <input
              type="text"
              placeholder={`Search ${activeTab} properties in Nagpur...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div>
          <h2>500+</h2>
          <p>Properties Listed</p>
        </div>
        <div>
          <h2>200+</h2>
          <p>Happy Buyers</p>
        </div>
        <div>
          <h2>50+</h2>
          <p>Verified Sellers</p>
        </div>
        <div>
          <h2>100%</h2>
          <p>Broker Verified</p>
        </div>
      </section>

      {/* FEATURED */}
      {/* FEATURED */}
<section className="section">
  <h2>Featured Buy Properties</h2>

  <div className="property-grid">
    {properties
      .filter((property) => property.type === "Buy")
      .slice(0, 3)
      .map((property) => (
        <div
          key={property.id}
          className="property-card"
          onClick={() => navigate(`/property/${property.id}`)}
          style={{ cursor: "pointer" }}
        >
          <img src={property.image} alt="property" />
          <div className="property-info">
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <div className="property-price">
              ₹ {property.price.toLocaleString()}
            </div>
          </div>
        </div>
      ))}
  </div>
</section>

      {/* PROPERTY TYPES */}
      
<section className="section">
  <h2>Browse by Property Type</h2>

  <div className="type-grid">

    <div className="type-card" onClick={() => navigate("/properties")}>
      <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" />
      <h3>Apartments</h3>
    </div>

    <div className="type-card" onClick={() => navigate("/properties")}>
      <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" />
      <h3>Villas</h3>
    </div>

    <div className="type-card" onClick={() => navigate("/properties")}>
      <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2" />
      <h3>Commercial</h3>
    </div>

    <div className="type-card" onClick={() => navigate("/properties")}>
      <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471" />
      <h3>Plots / Land</h3>
    </div>

  </div>
</section>


      {/* TESTIMONIALS */}
<section className="section" style={{ background: "#f8fafc" }}>
  <h2>What Our Clients Say</h2>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <p>"Very smooth process. Admin handled everything professionally."</p>
      <h4>Rahul Sharma</h4>
    </div>

    <div className="testimonial-card">
      <p>"Best property deals in Nagpur. Highly recommended."</p>
      <h4>Sneha Patil</h4>
    </div>

    <div className="testimonial-card">
      <p>"Transparent communication and verified listings."</p>
      <h4>Amit Deshmukh</h4>
    </div>

  </div>
</section>


      {/* RECENTLY VIEWED */}
      {recentlyViewed.length > 0 && (
        <section className="section">
          <h2>Recently Viewed</h2>

          <div className="property-grid">
            {recentlyViewed.map((property) => (
              <div
                key={property.id}
                className="property-card"
                onClick={() => navigate(`/property/${property.id}`)}
              >
                <img src={property.image} alt="recent" />
                <div className="property-info">
                  <h3>{property.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Find Your Dream Home?</h2>
        <p>Explore verified properties across Nagpur today.</p>
        <button onClick={() => navigate("/properties")}>
          Start Exploring
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>NagpurEstate</h3>
        <p>© 2026 All rights reserved.</p>
        <p>Serving properties across Nagpur.</p>
      </footer>

    </div>
  );
}

export default Home;
