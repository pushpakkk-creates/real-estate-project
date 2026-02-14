function AdminDashboard() {
  const leads = JSON.parse(localStorage.getItem("leads")) || [];

  return (
    <div style={{ padding: "40px" }}>
      <h2>Interested Buyers</h2>

      {leads.length === 0 ? (
        <p>No leads yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Property</th>
              <th>Buyer Phone</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index}>
                <td>{lead.propertyTitle}</td>
                <td>{lead.buyerPhone}</td>
                <td>{lead.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminDashboard;
