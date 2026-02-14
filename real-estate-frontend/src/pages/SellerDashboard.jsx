import DashboardLayout from "../components/DashboardLayout";

function SellerDashboard() {
  return (
    <DashboardLayout role="Seller">
      <div className="post-container">
        <h2>Post Your Property</h2>

        <div className="post-form">

          <div className="form-row">
            <input type="text" placeholder="Property Title" />
            <input type="text" placeholder="Location" />
          </div>

          <div className="form-row">
            <input type="number" placeholder="Price (₹)" />
            <select>
              <option>Select BHK</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4 BHK</option>
            </select>
          </div>

          <textarea placeholder="Property Description"></textarea>

          <input type="file" />

          <button className="post-btn">Submit Property</button>

        </div>
      </div>
    </DashboardLayout>
  );
}

export default SellerDashboard;
