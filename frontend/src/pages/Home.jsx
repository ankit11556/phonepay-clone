import React from "react";
import { Phone, ScanLine, Building, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-purple-600 text-white">
      {/* Navbar */}
      <div className="p-4 text-lg font-bold">PhonePay Clone</div>

      {/* Main Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">Send Money</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div
            className="p-4 bg-purple-500 rounded-lg text-center flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/phone-transaction")}
          >
            <Phone size={28} /> <span>Phone</span>
          </div>
          <div className="p-4 bg-purple-500 rounded-lg text-center flex flex-col items-center">
            <CreditCard size={28} /> <span>UPI ID</span>
          </div>
          <div className="p-4 bg-purple-500 rounded-lg text-center flex flex-col items-center">
            <Building size={28} /> <span>Bank</span>
          </div>
          <div
  className="p-4 bg-purple-500 rounded-lg text-center flex flex-col items-center cursor-pointer"
  onClick={() => navigate("/qr-transaction")}
>
  <ScanLine size={28} /> <span>Scan QR</span>
</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
