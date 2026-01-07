"use client";

import React, { useState } from "react";
import {
  User,
  Wallet,
  Bell,
  Shield,
  CreditCard,
  Download,
  LogOut,
  Eye,
  EyeOff,
  Copy,
  Check,
  AlertTriangle,
} from "lucide-react";

export default function Settings() {
  const [showBalance, setShowBalance] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const walletBalance = "12.45 ETH";
  const walletAddressFull = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleWithdraw = () => {
    if (!withdrawAmount || !walletAddress) {
      alert("Please fill in all fields");
      return;
    }
    // Handle withdrawal logic here
    alert(`Withdrawing ${withdrawAmount} ETH to ${walletAddress}`);
  };

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      // Handle logout logic here
      alert("Logged out successfully");
    }
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "wallet", label: "Wallet", icon: Wallet },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-slate-400">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? "bg-purple-500 text-white"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>

            {/* Logout Button */}
            <div className="mt-8 pt-6 border-t border-slate-700">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">
                  Profile Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Organizer"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="john@organizer.com"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      defaultValue="Event Masters Inc."
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Wallet Tab */}
          {activeTab === "wallet" && (
            <div className="space-y-6">
              {/* Wallet Balance */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Wallet Balance
                  </h2>
                  <button
                    onClick={() => setShowBalance(!showBalance)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {showBalance ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">
                      Available Balance
                    </p>
                    <p className="text-3xl font-bold text-white">
                      {showBalance ? walletBalance : "••••••"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm mb-1">
                      Wallet Address
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-mono text-sm">
                        {walletAddressFull.slice(0, 6)}...
                        {walletAddressFull.slice(-4)}
                      </span>
                      <button
                        onClick={() => copyToClipboard(walletAddressFull)}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Withdraw Funds */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">
                  Withdraw Funds
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Amount (ETH)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Destination Wallet Address
                    </label>
                    <input
                      type="text"
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      placeholder="0x..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none font-mono"
                    />
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-yellow-400 font-medium text-sm">
                          Withdrawal Notice
                        </p>
                        <p className="text-yellow-200 text-sm mt-1">
                          Withdrawals are processed within 24 hours. Network
                          fees may apply.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleWithdraw}
                    className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    Withdraw Funds
                  </button>
                </div>
              </div>

              {/* Transaction History */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">
                  Recent Transactions
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      type: "Deposit",
                      amount: "+2.5 ETH",
                      date: "2024-01-15",
                      status: "completed",
                    },
                    {
                      type: "Withdrawal",
                      amount: "-1.0 ETH",
                      date: "2024-01-10",
                      status: "completed",
                    },
                    {
                      type: "Deposit",
                      amount: "+5.2 ETH",
                      date: "2024-01-05",
                      status: "completed",
                    },
                  ].map((tx, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0"
                    >
                      <div>
                        <p className="text-white font-medium">{tx.type}</p>
                        <p className="text-slate-400 text-sm">{tx.date}</p>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-bold ${
                            tx.amount.startsWith("+")
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {tx.amount}
                        </p>
                        <p className="text-slate-400 text-sm capitalize">
                          {tx.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">
                Notification Preferences
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Event Updates",
                    description: "Get notified about your event status changes",
                  },
                  {
                    title: "Sales Alerts",
                    description: "Receive notifications for ticket sales",
                  },
                  {
                    title: "Marketing Emails",
                    description: "Receive promotional emails and updates",
                  },
                  {
                    title: "Security Alerts",
                    description: "Important security notifications",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-slate-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all">
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">
                  Change Password
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>

                  <button className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition-all">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6">
                  Two-Factor Authentication
                </h2>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Enable 2FA</p>
                    <p className="text-slate-400 text-sm">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
