import DashboardLayout from "../components/DashboardLayout";

const interests = [
  { id: 1, property: "2 BHK Apartment", buyer: "Rahul Sharma", status: "Pending" },
  { id: 2, property: "3 BHK Flat", buyer: "Anjali Verma", status: "Contacted" },
  { id: 3, property: "Villa", buyer: "Suresh Patil", status: "Closed" }
];

function AdminDashboard() {
  return (
    <DashboardLayout role="Admin">
      <h2>Admin Dashboard</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Buyer</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {interests.map((item) => (
            <tr key={item.id}>
              <td>{item.property}</td>
              <td>{item.buyer}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}

export default AdminDashboard;
