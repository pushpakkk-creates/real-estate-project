import { useState } from "react";



/* ===== STATIC PROPERTY DATA (Stable & Safe) ===== */
const propertyData = [
  {
    id: 1,
    title: "3 BHK Luxury Flat",
    location: "Wardha Road",
    price: 7200000,
    bhk: 3,
    status: "Available",
    featured: true,
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "2 BHK Apartment",
    location: "Manish Nagar",
    price: 4800000,
    bhk: 2,
    status: "Negotiation",
    featured: false,
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "Villa",
    location: "Pratap Nagar",
    price: 11000000,
    bhk: 4,
    status: "Sold",
    featured: true,
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    id: 4,
    title: "1 BHK Apartment",
    location: "Dharampeth",
    price: 3000000,
    bhk: 1,
    status: "Available",
    featured: false,
    image: "https://picsum.photos/600/400?random=4"
  }
];

function Properties() {
  const [search, setSearch] = useState("");
  const [bhkFilter, setBhkFilter] = useState("All");
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  /* ===== Wishlist ===== */
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

  /* ===== Filtering ===== */
  const filtered = propertyData.filter((property) => {
    return (
      property.location.toLowerCase().includes(search.toLowerCase()) &&
      (bhkFilter === "All" || property.bhk === Number(bhkFilter))
    );
  });

  return (
    <div style={{ padding: "40px" }}>
      <h2>{filtered.length} Properties in Nagpur</h2>

      {/* SEARCH + FILTER */}
      <div className="filter-bar">

  <div className="search-group">
    <input
      type="text"
      placeholder="Search by locality..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  <div className="select-group">
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

</div>


      {/* PROPERTY CARDS */}
      {filtered.map((property) => (
        <div key={property.id} className="listing-card">

          <div style={{ position: "relative" }}>
            {property.featured && (
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "#ff9800",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "5px",
                  fontSize: "12px"
                }}
              >
                Featured
              </span>
            )}

            <img
              src={property.image}
              alt="property"
              style={{
                width: "250px",
                height: "170px",
                objectFit: "cover"
              }}
            />
          </div>

          <div className="listing-info">
            <h3>{property.title}</h3>
            <p>📍 {property.location}, Nagpur</p>
            <p>{property.bhk} BHK</p>

            <span
              style={{
                background:
                  property.status === "Available"
                    ? "#d4edda"
                    : property.status === "Sold"
                    ? "#f8d7da"
                    : "#fff3cd",
                padding: "4px 8px",
                borderRadius: "5px",
                fontSize: "12px"
              }}
            >
              {property.status}
            </span>
          </div>

          <div className="listing-price">
            <h2>₹ {property.price.toLocaleString()}</h2>

            <button
  className={
    wishlist.find((item) => item.id === property.id)
      ? "save-btn saved"
      : "save-btn"
  }
  onClick={() => toggleWishlist(property)}
>
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
