import DashboardLayout from "../components/DashboardLayout";

function SellerDashboard() {
  return (
    <DashboardLayout role="Seller">
      <h2>Add Property</h2>

      <div className="form-card">
        <input type="text" placeholder="Property Title" />
        <input type="text" placeholder="Location" />
        <input type="number" placeholder="Price" />
        <textarea placeholder="Description"></textarea>
        <button>Add Property</button>
      </div>
    </DashboardLayout>
  );
}

export default SellerDashboard;
