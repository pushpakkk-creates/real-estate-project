import { useNavigate } from "react-router-dom";
import { properties } from "../data/properties";

function Home() {
  const navigate = useNavigate();

  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero">
        <div>
          <h1>Find Your Dream Property in Nagpur</h1>
          <p>Verified Listings | Trusted Broker | Transparent Deals</p>

          <div className="hero-search">
            <input type="text" placeholder="Search locality..." />
            <button onClick={() => navigate("/properties")}>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="section">
        <h2>Featured Properties</h2>
        <p style={{ color: "#666", marginBottom: "30px" }}>
          Premium listings curated by our admin broker.
        </p>

        <div className="property-grid">
          {properties.map((property) => (
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

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/property/${property.id}`);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "30px" }}>
          <button
            onClick={() => navigate("/properties")}
            style={{
              padding: "10px 18px",
              background: "#0077ff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            View All Properties →
          </button>
        </div>
      </section>

      {/* LOCALITIES */}
      <section className="section">
        <h2>Top Localities in Nagpur</h2>

        <div className="localities-grid">
          {[
            "Manish Nagar",
            "Wardha Road",
            "MIHAN",
            "Pratap Nagar",
            "Trimurti Nagar",
            "Dharampeth"
          ].map((area, index) => (
            <div
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/properties")}
            >
              {area}
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <h2>Why Choose NagpurEstate?</h2>

        <div className="why-grid" style={{ marginTop: "30px" }}>
          <div>
            <h3>✔ Verified Listings</h3>
            <p>All properties are verified by our admin broker.</p>
          </div>

          <div>
            <h3>✔ Secure Communication</h3>
            <p>Buyers and sellers are connected safely through admin.</p>
          </div>

          <div>
            <h3>✔ Best Market Deals</h3>
            <p>We help negotiate the best possible prices.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Want to Sell Your Property?</h2>
        <p style={{ marginTop: "10px" }}>
          List your property and connect with serious buyers.
        </p>
        <button onClick={() => navigate("/seller")}>
          Post Your Property
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
