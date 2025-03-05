import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, FileText, Share2 } from "lucide-react";

const QRSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { amount, scannedData, transactionId, date, time } = location.state || {};
  
  const extractRecipientName = (scannedData) => {
    const match = scannedData.match(/pn=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : "Unknown";
  };

  const recipientName = scannedData ? extractRecipientName(scannedData) : "Unknown";
  const upiMasked = scannedData
    ? `XXXXXX@${scannedData.split("@")[1].split("&")[0]}`
    : "XXXXXX@upi";

  return (
    <div className="h-screen flex flex-col items-center justify-between bg-gradient-to-b from-green-900 to-green-200 text-white px-4 py-6">
      {/* Success Icon */}
      <div className="flex flex-col items-center mb-4">
        <div className="bg-white p-4 rounded-full flex items-center justify-center">
          <CheckCircle size={60} className="text-green-600" />
        </div>
        <h2 className="text-xl font-bold mt-2">Payment Successful</h2>
        <p className="text-sm text-yellow-200">{date} at {time}</p>
      </div>

      {/* Payment Details Card */}
      <div className="bg-white text-black w-full max-w-md rounded-xl p-6 shadow-lg">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-blue-500 text-white text-xl font-bold w-12 h-12 flex items-center justify-center rounded-full">
            {recipientName ? recipientName.charAt(0) : "U"}
          </div>
          <div>
            <p className="font-semibold">{recipientName}</p>
            <p className="text-gray-500 text-sm">{upiMasked}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between border-b pb-2">
          <p className="text-2xl font-bold">₹{amount}</p>
          <button className="text-purple-800 font-semibold underline">Split Expense</button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="flex items-center justify-center space-x-2 py-2 bg-gray-50 rounded-lg shadow-md">
            <div className="bg-purple-800 p-2 rounded-full">
              <FileText size={20} className="text-white" />
            </div>
            <span className="text-purple-800 font-semibold">View Details</span>
          </button>
          
          <button className="flex items-center justify-center space-x-2 py-2 bg-gray-50 rounded-lg shadow-md">
            <div className="bg-purple-800 p-2 rounded-full">
              <Share2 size={20} className="text-white" />
            </div>
            <span className="text-purple-800 font-semibold">Share Receipt</span>
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full max-w-md bg-black p-3 rounded-lg text-center text-white">
        <p className="text-gray-300">Milestone Achieved!</p>
        <p className="font-bold text-green-300 text-lg">1 CRORE+ App Downloads</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg mt-2">
          Join the Club
        </button>
      </div>

      {/* Powered by UPI */}
      <div className="text-center text-white text-sm mt-3">
        <p>Powered by <span className="font-semibold">UPI</span></p>
      </div>

      {/* Done Button */}
      <button
        onClick={() => navigate("/")}
        className="max-w-md py-3 bg-white text-purple-700 rounded-lg text-lg font-extrabold mt-3 w-full text-center"
      >
        DONE
      </button>
    </div>
  );
};

export default QRSuccessPage;
