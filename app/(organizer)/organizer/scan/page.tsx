"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Scan,
  Camera,
  CameraOff,
  CheckCircle,
  XCircle,
  AlertTriangle,
  RefreshCw,
  Search,
  Ticket,
  User,
  Calendar,
  MapPin,
} from "lucide-react";

interface Ticket {
  id: string;
  event: string;
  holder: string;
  status: "valid" | "expired";
  scanned: boolean;
  eventDate: string;
  venue: string;
}

interface ScanResult {
  valid: boolean;
  message: string;
  ticket: Ticket | null;
  type: "valid" | "expired" | "already_scanned" | "invalid";
}

export default function ScanOperatorPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [manualInput, setManualInput] = useState("");
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Mock valid tickets data (in real app, this would come from API)
  const validTickets: Ticket[] = [
    {
      id: "#NFT-2341",
      event: "Summer Music Festival 2026",
      holder: "John Doe",
      status: "valid",
      scanned: false,
      eventDate: "Jul 15, 2026",
      venue: "Madison Square Garden",
    },
    {
      id: "#NFT-2342",
      event: "Tech Conference 2026",
      holder: "Jane Smith",
      status: "valid",
      scanned: false,
      eventDate: "Aug 20, 2026",
      venue: "Convention Center",
    },
    {
      id: "#NFT-2343",
      event: "Jazz Night Premium",
      holder: "Mike Johnson",
      status: "valid",
      scanned: true,
      eventDate: "Sep 10, 2026",
      venue: "Blue Note Jazz Club",
    },
    {
      id: "#NFT-2101",
      event: "Electronic Dreams Festival",
      holder: "Sarah Wilson",
      status: "expired",
      scanned: false,
      eventDate: "Dec 15, 2025",
      venue: "Las Vegas Convention Center",
    },
  ];

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsScanning(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Unable to access camera. Please check permissions.");
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsScanning(false);
  };

  const validateTicket = async (ticketId: string) => {
    setIsValidating(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const ticket = validTickets.find((t) => t.id === ticketId);

    if (ticket) {
      if (ticket.status === "expired") {
        setScanResult({
          valid: false,
          message: "Ticket has expired",
          ticket,
          type: "expired",
        });
      } else if (ticket.scanned) {
        setScanResult({
          valid: false,
          message: "Ticket already scanned",
          ticket,
          type: "already_scanned",
        });
      } else {
        setScanResult({
          valid: true,
          message: "Valid ticket - Entry granted",
          ticket,
          type: "valid",
        });
        // Mark as scanned (in real app, this would update the backend)
        ticket.scanned = true;
      }
    } else {
      setScanResult({
        valid: false,
        message: "Invalid ticket ID",
        ticket: null,
        type: "invalid",
      });
    }

    setIsValidating(false);
  };

  const handleManualScan = () => {
    if (manualInput.trim()) {
      validateTicket(manualInput.trim());
    }
  };

  const handleCameraScan = () => {
    // In a real implementation, you would use a barcode scanning library
    // For demo purposes, we'll simulate a scan with a random valid ticket
    const unscannedTickets = validTickets.filter(
      (t) => !t.scanned && t.status === "valid"
    );
    if (unscannedTickets.length > 0) {
      const randomTicket =
        unscannedTickets[Math.floor(Math.random() * unscannedTickets.length)];
      validateTicket(randomTicket.id);
    } else {
      validateTicket("#INVALID-1234");
    }
  };

  const resetScan = () => {
    setScanResult(null);
    setManualInput("");
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const getResultIcon = () => {
    if (!scanResult) return null;

    if (scanResult.valid) {
      return <CheckCircle className="w-16 h-16 text-green-400" />;
    } else if (scanResult.type === "expired") {
      return <AlertTriangle className="w-16 h-16 text-yellow-400" />;
    } else {
      return <XCircle className="w-16 h-16 text-red-400" />;
    }
  };

  const getResultColor = () => {
    if (!scanResult) return "";

    if (scanResult.valid) return "border-green-500/30 bg-green-500/10";
    else if (scanResult.type === "expired")
      return "border-yellow-500/30 bg-yellow-500/10";
    else return "border-red-500/30 bg-red-500/10";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Scan Operator</h1>
          <p className="text-slate-400">
            Scan customer tickets for event entry validation
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={isScanning ? stopCamera : startCamera}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
              isScanning
                ? "bg-red-600 hover:bg-red-500 text-white"
                : "bg-green-600 hover:bg-green-500 text-white"
            }`}
          >
            {isScanning ? (
              <>
                <CameraOff className="w-4 h-4" />
                Stop Camera
              </>
            ) : (
              <>
                <Camera className="w-4 h-4" />
                Start Camera
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Camera/Scan Area */}
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Scan className="w-5 h-5" />
              Camera Scanner
            </h2>

            <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden mb-4">
              {isScanning ? (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-400">
                  <div className="text-center">
                    <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Camera not active</p>
                    <p className="text-sm">
                      Click "Start Camera" to begin scanning
                    </p>
                  </div>
                </div>
              )}

              {/* Scanning overlay */}
              {isScanning && (
                <div className="absolute inset-0 border-2 border-purple-500 rounded-xl">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-purple-300 rounded-lg"></div>
                </div>
              )}
            </div>

            {isScanning && (
              <button
                onClick={handleCameraScan}
                disabled={isValidating}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isValidating ? (
                  <div className="flex items-center justify-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Validating...
                  </div>
                ) : (
                  "Scan Barcode"
                )}
              </button>
            )}
          </div>

          {/* Manual Input */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Search className="w-5 h-5" />
              Manual Entry
            </h2>

            <div className="space-y-4">
              <div className="relative">
                <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter ticket ID (e.g., #NFT-2341)"
                  value={manualInput}
                  onChange={(e) => setManualInput(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  onKeyPress={(e) => e.key === "Enter" && handleManualScan()}
                />
              </div>

              <button
                onClick={handleManualScan}
                disabled={!manualInput.trim() || isValidating}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isValidating ? (
                  <div className="flex items-center justify-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Validating...
                  </div>
                ) : (
                  "Validate Ticket"
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scan Results */}
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Scan Results</h2>

            {scanResult ? (
              <div className={`border rounded-xl p-6 ${getResultColor()}`}>
                <div className="flex items-center gap-4 mb-4">
                  {getResultIcon()}
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {scanResult.valid ? "Entry Granted" : "Entry Denied"}
                    </h3>
                    <p className="text-slate-300">{scanResult.message}</p>
                  </div>
                </div>

                {scanResult.ticket && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Ticket className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300">Ticket ID:</span>
                      <span className="text-white font-mono">
                        {scanResult.ticket.id}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300">Holder:</span>
                      <span className="text-white">
                        {scanResult.ticket.holder}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300">Event:</span>
                      <span className="text-white">
                        {scanResult.ticket.event}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300">Venue:</span>
                      <span className="text-white">
                        {scanResult.ticket.venue}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300">Date:</span>
                      <span className="text-white">
                        {scanResult.ticket.eventDate}
                      </span>
                    </div>
                  </div>
                )}

                <button
                  onClick={resetScan}
                  className="w-full mt-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition-all"
                >
                  Scan Next Ticket
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <Scan className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ready to Scan
                </h3>
                <p className="text-slate-400">
                  Use camera or manual entry to validate tickets
                </p>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Today's Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">
                  {validTickets.filter((t) => t.scanned).length}
                </p>
                <p className="text-slate-400 text-sm">Scanned Today</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">
                  {
                    validTickets.filter(
                      (t) => t.status === "valid" && !t.scanned
                    ).length
                  }
                </p>
                <p className="text-slate-400 text-sm">Remaining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
