'use client';
import { useState, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

export default function QrReaderCard() {
  const [scannedText, setScannedText] = useState('');
  const [scannerVisible, setScannerVisible] = useState(false);
  const qrCodeRegionId = 'qr-reader';
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);

  const startScanner = async () => {
    setScannerVisible(true);
    const html5QrCode = new Html5Qrcode(qrCodeRegionId);
    html5QrCodeRef.current = html5QrCode;

    try {
      await html5QrCode.start(
        { facingMode: 'environment' },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          setScannedText(decodedText);
          html5QrCode.stop();
          setScannerVisible(false);
        },
        (error) => {
          console.warn(error);
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  const stopScanner = async () => {
    if (html5QrCodeRef.current) {
      await html5QrCodeRef.current.stop();
      setScannerVisible(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto mt-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">QRコードを読み取る</h2>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={startScanner}
      >
        QRコードを読む
      </button>

      {scannerVisible && (
        <div className="mt-4">
          <div id={qrCodeRegionId} style={{ width: '300px', height: '300px' }} />
          <button
            onClick={stopScanner}
            className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
          >
            停止
          </button>
        </div>
      )}

      {scannedText && (
        <div className="mt-4 text-green-700">
          読み取った内容: <strong>{scannedText}</strong>
        </div>
      )}
    </div>
  );
}