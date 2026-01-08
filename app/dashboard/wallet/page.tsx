"use client";

import React, { useState } from "react";
import {
  Wallet,
  Send,
  Download,
  Upload,
  History,
  Copy,
  ExternalLink,
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  Eye,
  EyeOff,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react";

export default function WalletPage() {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  // Wallet data
  const walletData = {
    totalBalance: "2.45 ETH",
    totalValue: "$4,890.50",
    connectedWallets: [
      {
        id: "1",
        name: "MetaMask",
        address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
        balance: "1.2 ETH",
        network: "Ethereum",
        isPrimary: true,
      },
      {
        id: "2",
        name: "Phantom",
        address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        balance: "45.5 SOL",
        network: "Solana",
        isPrimary: false,
      },
    ],
  };

  // Transaction history
  const transactions = [
    {
      id: "1",
      type: "purchase",
      description: "Summer Music Festival 2026",
      amount: "-0.08 ETH",
      value: "-$160.00",
      date: "2025-01-15",
      status: "completed",
      hash: "0x1234...5678",
    },
    {
      id: "2",
      type: "received",
      description: "Ticket Transfer",
      amount: "+0.05 ETH",
      value: "+$100.00",
      date: "2025-01-12",
      status: "completed",
      hash: "0x8765...4321",
    },
    {
      id: "3",
      type: "purchase",
      description: "Tech Conference 2026",
      amount: "-0.05 ETH",
      value: "-$100.00",
      date: "2025-01-10",
      status: "completed",
      hash: "0xabcd...efgh",
    },
    {
      id: "4",
      type: "sent",
      description: "Transfer to Friend",
      amount: "-0.1 ETH",
      value: "-$200.00",
      date: "2025-01-08",
      status: "completed",
      hash: "0xijkl...mnop",
    },
  ];

  // NFT holdings
  const nftHoldings = [
    {
      id: "1",
      name: "Summer Music Festival 2026",
      tokenId: "#2341",
      contract: "0x742d...f44e",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      floorPrice: "0.08 ETH",
      lastPrice: "0.08 ETH",
    },
    {
      id: "2",
      name: "Tech Conference 2026",
      tokenId: "#2342",
      contract: "0x742d...f44e",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      floorPrice: "0.05 ETH",
      lastPrice: "0.05 ETH",
    },
    {
      id: "3",
      name: "Jazz Night Premium",
      tokenId: "#2343",
      contract: "0x742d...f44e",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
      floorPrice: "0.025 BTC",
      lastPrice: "0.025 BTC",
    },
  ];

  // Get transaction icon
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "purchase":
        return <ArrowUpRight className="w-4 h-4 text-red-400" />;
      case "received":
        return <ArrowDownLeft className="w-4 h-4 text-green-400" />;
      case "sent":
        return <ArrowUpRight className="w-4 h-4 text-blue-400" />;
      default:
        return <DollarSign className="w-4 h-4 text-slate-400" />;
    }
  };

  // Copy address to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Wallet</h1>
          <p className="text-slate-400">
            Manage your crypto assets and NFT tickets
          </p>
        </div>

        <div className="flex gap-3">
          <button className="bg-linear-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center gap-2">
            <Download className="w-4 h-4" />
            Receive
          </button>
        </div>
      </div>

      {/* Balance Overview */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Total Balance</h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-slate-400 text-sm mb-1">Crypto Balance</p>
            <p className="text-3xl font-bold text-white">
              {showBalance ? walletData.totalBalance : "••••••"}
            </p>
            <p className="text-slate-400 text-sm">
              {showBalance ? walletData.totalValue : "••••••"}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">
                  +12.5%
                </span>
              </div>
              <p className="text-slate-400 text-xs">24h Change</p>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">
                  +8.2%
                </span>
              </div>
              <p className="text-slate-400 text-xs">7d Change</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-slate-800/50 p-1 rounded-xl w-fit">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            activeTab === "overview"
              ? "bg-linear-to-r from-purple-500 to-blue-500 text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("transactions")}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            activeTab === "transactions"
              ? "bg-linear-to-r from-purple-500 to-blue-500 text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Transactions
        </button>
        <button
          onClick={() => setActiveTab("nfts")}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            activeTab === "nfts"
              ? "bg-linear-to-r from-purple-500 to-blue-500 text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          NFTs
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Connected Wallets */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">
                Connected Wallets
              </h2>
              <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-xl transition-all flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Connect
              </button>
            </div>

            <div className="space-y-4">
              {walletData.connectedWallets.map((wallet) => (
                <div
                  key={wallet.id}
                  className="bg-slate-800/50 rounded-xl p-4 border border-slate-700"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">
                          {wallet.name}
                        </p>
                        <p className="text-slate-400 text-sm">
                          {wallet.network}
                        </p>
                      </div>
                    </div>
                    {wallet.isPrimary && (
                      <span className="bg-purple-500/20 text-purple-400 text-xs font-semibold px-3 py-1 rounded-full border border-purple-500/30">
                        Primary
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-xs mb-1">Balance</p>
                      <p className="text-white font-bold">{wallet.balance}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-xs mb-1">Address</p>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-300 text-sm font-mono">
                          {wallet.address.slice(0, 6)}...
                          {wallet.address.slice(-4)}
                        </span>
                        <button
                          onClick={() => copyToClipboard(wallet.address)}
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button className="text-slate-400 hover:text-white transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="bg-linear-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Crypto
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Receive
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2">
                <Upload className="w-5 h-5" />
                Buy Crypto
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2">
                <CreditCard className="w-5 h-5" />
                Add Funds
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "transactions" && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">
              Transaction History
            </h2>
            <button className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <History className="w-4 h-4" />
              View All
            </button>
          </div>

          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-slate-700 rounded-lg">
                    {getTransactionIcon(transaction.type)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      {transaction.description}
                    </p>
                    <p className="text-slate-400 text-sm">{transaction.date}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p
                    className={`font-bold ${
                      transaction.amount.startsWith("+")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {transaction.amount}
                  </p>
                  <p className="text-slate-400 text-sm">{transaction.value}</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-sm font-semibold px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                    {transaction.status}
                  </span>
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "nfts" && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">NFT Holdings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nftHoldings.map((nft) => (
                <div
                  key={nft.id}
                  className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={nft.image}
                      alt={nft.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-white font-bold mb-2 line-clamp-1">
                      {nft.name}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3">
                      Token ID: {nft.tokenId}
                    </p>

                    <div className="flex items-center justify-between text-sm mb-4">
                      <div>
                        <p className="text-slate-400 text-xs">Floor Price</p>
                        <p className="text-purple-400 font-bold">
                          {nft.floorPrice}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-400 text-xs">Last Price</p>
                        <p className="text-green-400 font-bold">
                          {nft.lastPrice}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 bg-linear-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1">
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                      <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1">
                        <Send className="w-4 h-4" />
                        Transfer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
