"use client";

import React, { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Calendar,
  Download,
  Filter,
  Search,
  Eye,
  BarChart3,
} from "lucide-react";

export default function Sales() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const salesStats = [
    {
      icon: DollarSign,
      label: "Total Revenue",
      value: "45.8 ETH",
      change: "+18% vs last month",
      color: "green",
    },
    {
      icon: TrendingUp,
      label: "Avg. Sale Price",
      value: "0.08 ETH",
      change: "+5% increase",
      color: "blue",
    },
    {
      icon: Calendar,
      label: "Sales This Month",
      value: "1,234",
      change: "+245 this week",
      color: "purple",
    },
    {
      icon: BarChart3,
      label: "Conversion Rate",
      value: "78%",
      change: "+12% vs last month",
      color: "pink",
    },
  ];

  const salesData = [
    {
      id: "#NFT-2341",
      event: "Summer Music Festival 2026",
      amount: "0.08 ETH",
      buyer: "0x1234...5678",
      time: "2 mins ago",
      status: "completed",
      ticketType: "VIP",
    },
    {
      id: "#NFT-2340",
      event: "Tech Conference 2026",
      amount: "0.05 ETH",
      buyer: "0x8765...4321",
      time: "15 mins ago",
      status: "completed",
      ticketType: "Standard",
    },
    {
      id: "#NFT-2339",
      event: "Summer Music Festival 2026",
      amount: "0.08 ETH",
      buyer: "0x9876...1234",
      time: "1 hour ago",
      status: "completed",
      ticketType: "VIP",
    },
    {
      id: "#NFT-2338",
      event: "Tech Conference 2026",
      amount: "0.05 ETH",
      buyer: "0x4567...8901",
      time: "2 hours ago",
      status: "completed",
      ticketType: "Standard",
    },
    {
      id: "#NFT-2337",
      event: "Art Exhibition Night",
      amount: "0.03 ETH",
      buyer: "0xabcd...efgh",
      time: "3 hours ago",
      status: "refunded",
      ticketType: "Early Bird",
    },
    {
      id: "#NFT-2336",
      event: "Winter Jazz Night",
      amount: "0.12 ETH",
      buyer: "0xijkl...mnop",
      time: "5 hours ago",
      status: "completed",
      ticketType: "Premium",
    },
    {
      id: "#NFT-2335",
      event: "Startup Pitch Event",
      amount: "0.06 ETH",
      buyer: "0xqrst...uvwx",
      time: "1 day ago",
      status: "completed",
      ticketType: "Standard",
    },
    {
      id: "#NFT-2334",
      event: "Food Festival 2026",
      amount: "0.04 ETH",
      buyer: "0xyzaa...bbcc",
      time: "1 day ago",
      status: "completed",
      ticketType: "Group",
    },
  ];

  const filteredSales = salesData.filter((sale) => {
    const matchesFilter = filter === "all" || sale.status === filter;
    const matchesSearch =
      sale.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.buyer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: "bg-green-500/20 text-green-400 border-green-500/30",
      refunded: "bg-red-500/20 text-red-400 border-red-500/30",
      pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
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
    { value: "all", label: "All Sales" },
    { value: "completed", label: "Completed" },
    { value: "refunded", label: "Refunded" },
    { value: "pending", label: "Pending" },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Sales</h1>
          <p className="text-slate-400">
            Track and analyze your ticket sales performance.
          </p>
        </div>
        <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center gap-2 border border-slate-700">
          <Download className="w-5 h-5" />
          Export Data
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {salesStats.map((stat, i) => (
          <div
            key={i}
            className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-${stat.color}-500/20`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
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
                    ? "bg-purple-500 text-white"
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
              placeholder="Search sales..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Sales Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left text-slate-400 text-sm font-medium pb-4 pl-6">
                  Ticket ID
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-4">
                  Event
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-4">
                  Type
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-4">
                  Amount
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-4">
                  Buyer
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-4">
                  Status
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-4 pr-6">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSales.map((sale, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-800 last:border-0 hover:bg-slate-800/50 transition-colors"
                >
                  <td className="py-4 pl-6">
                    <span className="text-white font-mono text-sm">
                      {sale.id}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-white text-sm">{sale.event}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-slate-400 text-sm">
                      {sale.ticketType}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-purple-400 font-bold text-sm">
                      {sale.amount}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-slate-400 text-sm font-mono">
                      {sale.buyer}
                    </span>
                  </td>
                  <td className="py-4">{getStatusBadge(sale.status)}</td>
                  <td className="py-4 pr-6">
                    <span className="text-slate-400 text-sm">{sale.time}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredSales.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 text-lg mb-2">No sales found</div>
            <p className="text-slate-500">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
