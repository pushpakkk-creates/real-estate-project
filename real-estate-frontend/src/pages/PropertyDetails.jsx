import { useParams } from "react-router-dom";
import { properties } from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (p) => p.id === Number(id)
  );

  if (!property) {
    return <h2>Property not found</h2>;
  }

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

      <h2 style={{ marginTop: "20px" }}>
        {property.title}
      </h2>

      <p style={{ color: "#666" }}>
        📍 {property.location}
      </p>

      <h3 style={{ color: "#0077ff" }}>
        ₹ {property.price.toLocaleString()}
      </h3>

      <p style={{ marginTop: "15px" }}>
        {property.description}
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#0077ff",
          color: "white",
          border: "none",
          borderRadius: "6px"
        }}
      >
        Show Interest
      </button>
    </div>
  );
}

export default PropertyDetails;
