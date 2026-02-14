import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { properties } from "../data/properties";

function Properties() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const type = params.get("type");

  const [search, setSearch] = useState("");
  const [bhkFilter, setBhkFilter] = useState("All");
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  /* ===== Wishlist Logic ===== */
  const toggleWishlist = (property) => {
    let updated;

    if (wishlist.find((item) => item.id === property.id)) {
      updated = wishlist.filter((item) => item.id !== property.id);
    } else {
      updated = [...wishlist, property];
    }

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  /* ===== Filtering Logic ===== */
  const filtered = properties.filter((property) => {
    return (
      (!type || property.type === type) &&
      property.location.toLowerCase().includes(search.toLowerCase()) &&
      (bhkFilter === "All" || property.bhk === Number(bhkFilter))
    );
  });

  return (
    <div style={{ padding: "40px" }}>
      <h2>{filtered.length} Properties in Nagpur</h2>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by locality..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={bhkFilter}
          onChange={(e) => setBhkFilter(e.target.value)}
        >
          <option value="All">All BHK</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4 BHK</option>
        </select>
      </div>

      {/* PROPERTY CARDS */}
      {filtered.map((property) => (
        <div key={property.id} className="listing-card">
          <img
            src={property.image}
            alt="property"
            style={{
              width: "250px",
              height: "170px",
              objectFit: "cover",
              cursor: "pointer"
            }}
            onClick={() => navigate(`/property/${property.id}`)}
          />

          <div className="listing-info">
            <h3>{property.title}</h3>
            <p>📍 {property.location}, Nagpur</p>
            <p>{property.bhk > 0 && `${property.bhk} BHK`}</p>
          </div>

          <div className="listing-price">
            <h2>₹ {property.price.toLocaleString()}</h2>

            <button onClick={() => toggleWishlist(property)}>
              {wishlist.find((item) => item.id === property.id)
                ? "❤️ Saved"
                : "🤍 Save"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Properties;
