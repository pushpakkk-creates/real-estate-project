import DashboardLayout from "../components/DashboardLayout";

function BuyerDashboard() {
  return (
    <DashboardLayout role="Buyer">
      <h2>My Interests</h2>

      <div className="listing-card">
        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" />
        <div className="listing-info">
          <h3>2 BHK Apartment</h3>
          <p>Manish Nagar, Nagpur</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default BuyerDashboard;
