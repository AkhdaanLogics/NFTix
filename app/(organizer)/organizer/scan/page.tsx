"use client";

import React, { useState } from "react";
import {
  Scan,
  Plus,
  QrCode,
  Smartphone,
  Trash2,
  Edit,
  Eye,
  Search,
  X,
} from "lucide-react";

export default function AddScanner() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [newScanner, setNewScanner] = useState({
    name: "",
    event: "",
    device: "",
  });

  const scannerStats = [
    {
      icon: Scan,
      label: "Active Scanners",
      value: "12",
      change: "+2 this week",
      bgColor: "bg-green-500/20",
      textColor: "text-green-400",
    },
    {
      icon: QrCode,
      label: "Total Scans",
      value: "8,456",
      change: "+1,234 today",
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-400",
    },
    {
      icon: Smartphone,
      label: "Devices Connected",
      value: "15",
      change: "+3 new devices",
      bgColor: "bg-purple-500/20",
      textColor: "text-purple-400",
    },
    {
      icon: Eye,
      label: "Events Covered",
      value: "8",
      change: "2 upcoming",
      bgColor: "bg-pink-500/20",
      textColor: "text-pink-400",
    },
  ];

  const scanners = [
    {
      id: "SCN-001",
      name: "Main Entrance Scanner",
      event: "Summer Music Festival 2026",
      device: "iPhone 15 Pro",
      status: "active",
      lastScan: "2 mins ago",
      totalScans: 1245,
    },
    {
      id: "SCN-002",
      name: "VIP Gate Scanner",
      event: "Summer Music Festival 2026",
      device: "Samsung Galaxy S24",
      status: "active",
      lastScan: "5 mins ago",
      totalScans: 892,
    },
    {
      id: "SCN-003",
      name: "Tech Conference Entrance",
      event: "Tech Conference 2026",
      device: "iPad Pro",
      status: "inactive",
      lastScan: "2 days ago",
      totalScans: 567,
    },
    {
      id: "SCN-004",
      name: "Food Festival Scanner",
      event: "Food Festival 2026",
      device: "Android Phone",
      status: "active",
      lastScan: "1 hour ago",
      totalScans: 234,
    },
    {
      id: "SCN-005",
      name: "Art Exhibition Gate",
      event: "Art Exhibition Night",
      device: "iPhone 14",
      status: "maintenance",
      lastScan: "1 day ago",
      totalScans: 789,
    },
  ];

  const filteredScanners = scanners.filter((scanner) => {
    const matchesFilter = filter === "all" || scanner.status === filter;
    const matchesSearch =
      scanner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scanner.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scanner.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      active: "bg-green-500/20 text-green-400 border-green-500/30",
      inactive: "bg-red-500/20 text-red-400 border-red-500/30",
      maintenance: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    };

    return (
      <span
        className={`text-xs font-semibold px-2 py-1 rounded-full border ${
          styles[status as keyof typeof styles]
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const filterOptions = [
    { value: "all", label: "All Scanners" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "maintenance", label: "Maintenance" },
  ];

  const handleAddScanner = () => {
    console.log("Adding scanner:", newScanner);
    // Add scanner logic here
    setShowAddPopup(false);
    setNewScanner({ name: "", event: "", device: "" });
  };

  return (
    <>
      {/* Add Scanner Popup Modal */}
      {showAddPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAddPopup(false)}
          />

          {/* Modal */}
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Add New Scanner
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Configure a new event scanner
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAddPopup(false)}
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Scanner Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Scanner Name *
                </label>
                <input
                  type="text"
                  value={newScanner.name}
                  onChange={(e) =>
                    setNewScanner({ ...newScanner, name: e.target.value })
                  }
                  placeholder="e.g., Main Entrance Scanner"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>

              {/* Event Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Event *
                </label>
                <select
                  value={newScanner.event}
                  onChange={(e) =>
                    setNewScanner({ ...newScanner, event: e.target.value })
                  }
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                >
                  <option value="">Select an event</option>
                  <option value="Summer Music Festival 2026">
                    Summer Music Festival 2026
                  </option>
                  <option value="Tech Conference 2026">
                    Tech Conference 2026
                  </option>
                  <option value="Food Festival 2026">Food Festival 2026</option>
                  <option value="Art Exhibition Night">
                    Art Exhibition Night
                  </option>
                  <option value="Jazz Night Premium">Jazz Night Premium</option>
                </select>
              </div>

              {/* Device Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Device Name *
                </label>
                <input
                  type="text"
                  value={newScanner.device}
                  onChange={(e) =>
                    setNewScanner({ ...newScanner, device: e.target.value })
                  }
                  placeholder="e.g., iPhone 15 Pro"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>

              {/* Info Box */}
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                <div className="flex gap-3">
                  <QrCode className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-purple-400 text-sm font-semibold mb-1">
                      QR Code Setup
                    </p>
                    <p className="text-slate-400 text-xs">
                      After creating the scanner, you'll receive a unique QR
                      code to configure your scanning device.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddPopup(false)}
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleAddScanner}
                disabled={
                  !newScanner.name || !newScanner.event || !newScanner.device
                }
                className={`flex-1 font-semibold py-3 rounded-xl transition-all ${
                  newScanner.name && newScanner.event && newScanner.device
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50 text-white"
                    : "bg-slate-700 text-slate-500 cursor-not-allowed"
                }`}
              >
                Create Scanner
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Scanner Management</h1>
          <p className="text-slate-400">
            Manage and monitor your event scanners.
          </p>
        </div>
        <button
          onClick={() => setShowAddPopup(true)}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add New Scanner
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {scannerStats.map((stat, i) => (
          <div
            key={i}
            className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-green-400 text-xs font-semibold">
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filter === option.value
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search scanners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Scanners Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-800/50">
                <th className="text-left text-slate-400 text-sm font-medium py-4 pl-6">
                  Scanner ID
                </th>
                <th className="text-left text-slate-400 text-sm font-medium py-4">
                  Name
                </th>
                <th className="text-left text-slate-400 text-sm font-medium py-4">
                  Event
                </th>
                <th className="text-left text-slate-400 text-sm font-medium py-4">
                  Device
                </th>
                <th className="text-left text-slate-400 text-sm font-medium py-4">
                  Status
                </th>
                <th className="text-left text-slate-400 text-sm font-medium py-4">
                  Last Scan
                </th>
                <th className="text-left text-slate-400 text-sm font-medium py-4">
                  Total Scans
                </th>
                <th className="text-left text-slate-400 text-sm font-medium py-4 pr-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredScanners.map((scanner, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-800 last:border-0 hover:bg-slate-800/30 transition-colors"
                >
                  <td className="py-4 pl-6">
                    <span className="text-white font-mono text-sm">
                      {scanner.id}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-white text-sm font-medium">
                      {scanner.name}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-slate-400 text-sm">
                      {scanner.event}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-slate-400 text-sm">
                      {scanner.device}
                    </span>
                  </td>
                  <td className="py-4">{getStatusBadge(scanner.status)}</td>
                  <td className="py-4">
                    <span className="text-slate-400 text-sm">
                      {scanner.lastScan}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-purple-400 font-bold text-sm">
                      {scanner.totalScans.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 pr-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredScanners.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 text-lg mb-2">No scanners found</div>
            <p className="text-slate-500">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
