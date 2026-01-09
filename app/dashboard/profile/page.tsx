"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Wallet,
  Edit,
  Save,
  X,
  Camera,
} from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    walletAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    bio: "Event enthusiast and NFT collector. Love attending music festivals and tech conferences.",
  });

  const handleSave = () => {
    // Here you would typically save to backend
    setIsEditing(false);
    // Show success message or handle errors
  };

  const handleCancel = () => {
    // Reset to original data if needed
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
        <p className="text-slate-400">
          Manage your account information and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            {/* Profile Picture */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <User className="w-12 h-12 text-white" />
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-full border border-slate-700 transition-all">
                    <Camera className="w-4 h-4" />
                  </button>
                )}
              </div>
              <h2 className="text-xl font-bold text-white mt-4">
                {profileData.name}
              </h2>
              <p className="text-slate-400 text-sm">{profileData.email}</p>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Events Attended</span>
                <span className="text-white font-semibold">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Tickets Owned</span>
                <span className="text-white font-semibold">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Total Spent</span>
                <span className="text-purple-400 font-semibold">1.2 ETH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            {/* Header with Edit Button */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">
                Personal Information
              </h3>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50 text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <User className="w-5 h-5 text-slate-400" />
                    <span className="text-white">{profileData.name}</span>
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <Mail className="w-5 h-5 text-slate-400" />
                    <span className="text-white">{profileData.email}</span>
                  </div>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <Phone className="w-5 h-5 text-slate-400" />
                    <span className="text-white">{profileData.phone}</span>
                  </div>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Location
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <MapPin className="w-5 h-5 text-slate-400" />
                    <span className="text-white">{profileData.location}</span>
                  </div>
                )}
              </div>

              {/* Wallet Address */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Wallet Address
                </label>
                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                  <Wallet className="w-5 h-5 text-slate-400" />
                  <span className="text-white font-mono text-sm">
                    {profileData.walletAddress}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Wallet address cannot be changed
                </p>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">
                  Bio
                </label>
                {isEditing ? (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    rows={3}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  />
                ) : (
                  <div className="p-3 bg-slate-800/50 rounded-lg">
                    <p className="text-white">{profileData.bio}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p className="text-center text-slate-500 text-sm py-4">
          &copy; 2024 NFT Ticketing Platform. All rights reserved.
        </p>
      </footer>
    </>
  );
}
