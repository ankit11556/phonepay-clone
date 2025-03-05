import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PhoneTransaction = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const navigate = useNavigate();

  const handleTransaction = () => {
    if (!amount || !name || !phoneNumber) {
      alert("Please enter amount, name, and phone number!");
      return;
    }

    // ✅ Transaction ID Generate
    const transactionId = `TXN${Date.now()}`;

    // ✅ Current Date & Time Generate
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    // ✅ Success Page pe data bhejna
    navigate("/success", {
      state: {
        amount,
        name,
        phoneNumber,
        transactionId,
        date: formattedDate,
        time: formattedTime
      },
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
      <h2 className="text-2xl font-bold">Send Money</h2>
      
      <input
        type="number"
        placeholder="Enter Amount"
        className="mt-4 p-2 rounded bg-purple-500 text-white"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      
      <input
        type="text"
        placeholder="Enter Receiver's Name"
        className="mt-4 p-2 rounded bg-purple-500 text-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Phone Number"
        className="mt-4 p-2 rounded bg-purple-500 text-white"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <button
        className="mt-6 px-6 py-2 bg-green-500 rounded-lg"
        onClick={handleTransaction}
      >
        Pay Now
      </button>
    </div>
  );
};

export default PhoneTransaction;
