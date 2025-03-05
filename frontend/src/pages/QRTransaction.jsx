import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRScanner from "../components/QRScanner";

const QRTransaction = () => {
  const [amount, setAmount] = useState("");
  const [scannedData, setScannedData] = useState("");
  const navigate = useNavigate();

  const handleTransaction = () => {
    if (!amount || !scannedData) {
      alert("Please scan QR code or upload an image and enter amount!");
      return;
    }

    const transactionId = `TXN${Date.now()}`;
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    navigate("/qr-success", {
      state: {
        amount,
        scannedData,
        transactionId,
        date: formattedDate,
        time: formattedTime
      },
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
      {/* ✅ QR Scanner component (Live Scan + Image Upload) */}
      <QRScanner onScan={setScannedData} />

      {/* ✅ Show scanned data (if available) */}
      {scannedData && (
        <p className="mt-2 text-green-300">Scanned: {scannedData}</p>
      )}

      <input
        type="number"
        placeholder="Enter Amount"
        className="mt-4 p-2 rounded bg-purple-500 text-white"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
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

export default QRTransaction;
