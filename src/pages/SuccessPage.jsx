import React from "react";
import { CheckCircle, Copy, ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, phoneNumber, amount, transactionId, utrNumber, date, time } = location.state || {};

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      {/* Top Back Button */}
      <div className="w-full max-w-sm flex justify-between items-center mb-4">
        <ArrowLeft size={24} className="cursor-pointer" onClick={() => navigate(-1)} />
        <h2 className="text-lg font-semibold">Transaction Details</h2>
        <div></div>
      </div>

      {/* Success Icon */}
      <CheckCircle size={80} className="text-green-500 mb-4" />
      <h2 className="text-2xl font-bold">Payment Successful</h2>

      {/* Payment Details */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-sm mt-4">
        <div className="flex justify-between">
          <span className="text-gray-500">To:</span>
          <span className="font-bold">{name}</span>
        </div>
        {phoneNumber && (
          <div className="flex justify-between mt-2">
            <span className="text-gray-500">Phone Number:</span>
            <span className="text-black">{phoneNumber}</span>
          </div>
        )}
        <div className="flex justify-between mt-2">
          <span className="text-gray-500">Amount:</span>
          <span className="font-bold text-black">₹{amount}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-gray-500">Date:</span>
          <span>{date}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-gray-500">Time:</span>
          <span>{time}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-500">Transaction ID:</span>
          <div className="flex items-center">
            <span className="text-gray-600 text-sm">{transactionId}</span>
            <Copy size={16} className="ml-2 cursor-pointer text-gray-500" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-500">UTR Number:</span>
          <div className="flex items-center">
            <span className="text-gray-600 text-sm">{utrNumber}</span>
            <Copy size={16} className="ml-2 cursor-pointer text-gray-500" />
          </div>
        </div>
      </div>

      {/* Done Button */}
      <button
        className="mt-6 bg-purple-600 px-6 py-2 rounded-lg text-lg font-semibold text-white shadow-md hover:bg-purple-700"
        onClick={() => navigate("/")}
      >
        Done
      </button>
    </div>
  );
};

export default SuccessPage;
