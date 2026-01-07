"use client";

import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Calendar,
  Eye,
  Download,
  Filter,
  ChevronDown,
} from "lucide-react";

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("30d");

  const analyticsStats = [
    {
      icon: DollarSign,
      label: "Total Revenue",
      value: "45.8 ETH",
      change: "+18.2%",
      changeType: "up",
      color: "green",
    },
    {
      icon: Users,
      label: "Total Attendees",
      value: "12,456",
      change: "+245",
      changeType: "up",
      color: "blue",
    },
    {
      icon: Calendar,
      label: "Events Created",
      value: "24",
      change: "+3",
      changeType: "up",
      color: "purple",
    },
    {
      icon: Eye,
      label: "Page Views",
      value: "89.2K",
      change: "-2.1%",
      changeType: "down",
      color: "pink",
    },
  ];

  const salesData = [
    { month: "Jan", sales: 12.5 },
    { month: "Feb", sales: 18.2 },
    { month: "Mar", sales: 15.8 },
    { month: "Apr", sales: 22.1 },
    { month: "May", sales: 28.4 },
    { month: "Jun", sales: 32.7 },
    { month: "Jul", sales: 35.2 },
    { month: "Aug", sales: 38.9 },
    { month: "Sep", sales: 42.1 },
    { month: "Oct", sales: 45.8 },
    { month: "Nov", sales: 48.3 },
    { month: "Dec", sales: 52.1 },
  ];

  const topEvents = [
    {
      name: "Summer Music Festival 2026",
      revenue: "12.5 ETH",
      attendees: 450,
      conversion: "89%",
      growth: "+15%",
    },
    {
      name: "Tech Conference 2026",
      revenue: "8.2 ETH",
      attendees: 320,
      conversion: "76%",
      growth: "+8%",
    },
    {
      name: "Winter Jazz Night",
      revenue: "6.8 ETH",
      attendees: 180,
      conversion: "82%",
      growth: "+22%",
    },
    {
      name: "Art Exhibition Night",
      revenue: "5.4 ETH",
      attendees: 150,
      conversion: "71%",
      growth: "+5%",
    },
    {
      name: "Startup Pitch Event",
      revenue: "4.9 ETH",
      attendees: 120,
      conversion: "85%",
      growth: "+12%",
    },
  ];

  const trafficSources = [
    { source: "Direct", percentage: 45, color: "bg-purple-500" },
    { source: "Social Media", percentage: 28, color: "bg-blue-500" },
    { source: "Email", percentage: 15, color: "bg-green-500" },
    { source: "Search", percentage: 12, color: "bg-pink-500" },
  ];

  const timeRangeOptions = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 90 days" },
    { value: "1y", label: "Last year" },
  ];

  const maxSales = Math.max(...salesData.map((d) => d.sales));

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Analytics</h1>
          <p className="text-slate-400">
            Insights and performance metrics for your events.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 pr-10 text-white text-sm focus:ring-2 focus:ring-purple-500 outline-none appearance-none"
            >
              {timeRangeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center gap-2 border border-slate-700">
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {analyticsStats.map((stat, i) => (
          <div
            key={i}
            className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-${stat.color}-500/20`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
              </div>
              <div
                className={`flex items-center gap-1 text-xs font-semibold ${
                  stat.changeType === "up" ? "text-green-400" : "text-red-400"
                }`}
              >
                {stat.changeType === "up" ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {stat.change}
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sales Chart */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Revenue Trend</h2>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              Monthly Sales (ETH)
            </div>
          </div>

          <div className="space-y-3">
            {salesData.map((data, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 text-sm text-slate-400">{data.month}</div>
                <div className="flex-1">
                  <div className="relative">
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${(data.sales / maxSales) * 100}%` }}
                      ></div>
                    </div>
                    <div className="absolute -top-6 right-0 text-xs text-slate-400 font-medium">
                      {data.sales} ETH
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Traffic Sources</h2>

          <div className="space-y-4">
            {trafficSources.map((source, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-24 text-sm text-slate-400">
                  {source.source}
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${source.color} rounded-full transition-all duration-500`}
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-12 text-right text-sm text-white font-medium">
                  {source.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Events Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white">
            Top Performing Events
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Events ranked by revenue and engagement
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left text-slate-400 text-sm font-medium pb-4 pl-6">
                  Event Name
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-4">
                  Revenue
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-4">
                  Attendees
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-4">
                  Conversion
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-4 pr-6">
                  Growth
                </th>
              </tr>
            </thead>
            <tbody>
              {topEvents.map((event, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-800 last:border-0 hover:bg-slate-800/50 transition-colors"
                >
                  <td className="py-4 pl-6">
                    <span className="text-white font-medium">{event.name}</span>
                  </td>
                  <td className="py-4">
                    <span className="text-purple-400 font-bold">
                      {event.revenue}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-white">
                      {event.attendees.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-green-400 font-medium">
                      {event.conversion}
                    </span>
                  </td>
                  <td className="py-4 pr-6">
                    <span className="text-green-400 font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {event.growth}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
