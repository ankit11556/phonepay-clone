import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhoneTransaction from "./pages/PhoneTransaction";
import SuccessPage from "./pages/SuccessPage"; 
import QRTransaction from "./pages/QRTransaction"; // ✅ QR Page Import
import QRSuccessPage from "./pages/QRSuccessPage"; // ✅ QR Success Page Import
import QRScanner from "./components/QRScanner";
const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phone-transaction" element={<PhoneTransaction />} />
        <Route path="/qr-transaction" element={<QRTransaction />} /> {/* ✅ QR Code Transaction */}
        <Route path="/success" element={<SuccessPage />} /> {/* ✅ Success Page Route */}
        <Route path="/qr-transaction" element={<QRScanner />} />
        <Route path="/qr-success" element={<QRSuccessPage />} /> {/* ✅ QR Transaction ke liye */}
      </Routes>
    
  );
};

export default App;
