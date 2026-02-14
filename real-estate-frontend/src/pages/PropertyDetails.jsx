import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { properties } from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (p) => p.id === Number(id)
  );

  if (!property) {
    return <h2 style={{ padding: "40px" }}>Property not found</h2>;
  }

  /* ===== Save Recently Viewed ===== */
  useEffect(() => {
    let recent = JSON.parse(localStorage.getItem("recent")) || [];

    recent = recent.filter((p) => p.id !== property.id);
    recent.unshift(property);

    localStorage.setItem("recent", JSON.stringify(recent.slice(0, 3)));
  }, [property]);

  /* ===== Show Interest Logic ===== */
  const handleInterest = () => {
    const phone = localStorage.getItem("userPhone");

    if (!phone) {
      alert("Please login first");
      return;
    }

    const leads = JSON.parse(localStorage.getItem("leads")) || [];

    leads.push({
      propertyTitle: property.title,
      buyerPhone: phone,
      date: new Date().toLocaleString()
    });

    localStorage.setItem("leads", JSON.stringify(leads));

    alert("Interest sent to Admin!");
  };

  return (
    <div style={{ padding: "60px" }}>
      <img
        src={property.image}
        alt="property"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "12px"
        }}
      />

      <h2 style={{ marginTop: "20px" }}>{property.title}</h2>

      <p>📍 {property.location}, Nagpur</p>

      <h3 style={{ color: "#0077ff" }}>
        ₹ {property.price.toLocaleString()}
      </h3>

      <p style={{ marginTop: "20px" }}>
        {property.description}
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#0077ff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
        onClick={handleInterest}
      >
        Show Interest
      </button>
    </div>
  );
}

export default PropertyDetails;
