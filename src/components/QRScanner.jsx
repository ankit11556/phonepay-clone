import React, { useState } from "react";
import {QrReader} from "@blackbox-vision/react-qr-reader";
import jsQR from "jsqr"; // Image se QR read karne ke liye

const QRScanner = ({ onScan }) => {
  const [scanResult, setScanResult] = useState(null);

  // 📷 Camera Scanner Se QR Read Kare
  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      onScan(data);
    }
  };

  const handleError = (err) => {
    console.error("QR Scanner Error:", err);
  };

  // 📂 Image Upload Se QR Read Kare
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);

          // 🎯 jsQR se QR code detect karo
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, canvas.width, canvas.height);
          if (code) {
            setScanResult(code.data);
            onScan(code.data);
          } else {
            alert("No QR code found in image.");
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>QR Scanner</h2>

      {/* 🎥 Camera Se Scan Karne Wala Scanner */}
      <QrReader onScan={handleScan} onError={handleError} />

      <h3>OR</h3>

      {/* 📂 Gallery Se Image Upload Karne Ka Option */}
      <input type="file" accept="image/*" onChange={handleFileUpload} />

      {/* 📜 QR Scan Result Show Kare */}
      {scanResult && (
        <div>
          <h3>QR Code Data:</h3>
          <p>{scanResult}</p>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
