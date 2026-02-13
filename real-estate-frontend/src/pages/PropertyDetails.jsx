import { useState } from "react";

function PropertyDetails() {
  const images = [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    "https://images.unsplash.com/photo-1605146768851-eda79da39897",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div style={{ padding: "50px" }}>
      <img
        src={images[current]}
        alt="property"
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            width="100"
            style={{
              cursor: "pointer",
              border: current === index ? "3px solid #0077ff" : "none"
            }}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      <h2 style={{ marginTop: "20px" }}>3 BHK Luxury Flat</h2>
      <p style={{ fontSize: "22px", color: "#0077ff" }}>₹ 72,00,000</p>
      <p>📍 Wardha Road, Nagpur</p>

      <button style={{ marginTop: "20px", padding: "10px 20px" }}>
        Show Interest
      </button>
    </div>
  );
}

export default PropertyDetails;
