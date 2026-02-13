import { useState } from "react";
import { faker } from "@faker-js/faker";

const propertyImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1605146768851-eda79da39897",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
  "https://images.unsplash.com/photo-1600566752227-8f7b0b6c4d3f",
];

const nagpurLocalities = [
  "Manish Nagar",
  "Wardha Road",
  "MIHAN",
  "Koradi Road",
  "Pratap Nagar",
  "Trimurti Nagar",
  "Hingna",
  "Dharampeth"
];

const statuses = ["Available", "Sold", "Negotiation"];

const generateProperties = () =>
  Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `${faker.number.int({ min: 1, max: 4 })} BHK Apartment`,
    location:
      nagpurLocalities[
        Math.floor(Math.random() * nagpurLocalities.length)
      ],
    price: faker.number.int({ min: 2000000, max: 9000000 }),
    bhk: faker.number.int({ min: 1, max: 4 }),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    featured: Math.random() > 0.7,
    image:
      propertyImages[
        Math.floor(Math.random() * propertyImages.length)
      ]
  }));

const propertyData = generateProperties();

function Properties() {
  const [search, setSearch] = useState("");
  const [bhkFilter, setBhkFilter] = useState("All");
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

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

  const filtered = propertyData.filter((property) => {
    return (
      property.location.toLowerCase().includes(search.toLowerCase()) &&
      (bhkFilter === "All" || property.bhk === Number(bhkFilter))
    );
  });

  return (
    <div style={{ padding: "40px" }}>
      <h2>{filtered.length} Properties in Nagpur</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search locality..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginRight: "15px", padding: "8px" }}
        />

        <select
          onChange={(e) => setBhkFilter(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="All">All</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4 BHK</option>
        </select>
      </div>

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

            <img src={property.image} alt="property" />
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
