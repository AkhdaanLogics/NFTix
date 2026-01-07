"use client";

import React from "react";
import {
  Calendar,
  DollarSign,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  MoreVertical,
} from "lucide-react";

export default function OrganizerDashboard() {
  const stats = [
    {
      icon: Calendar,
      label: "Total Events",
      value: "12",
      change: "+3 this month",
      color: "purple",
    },
    {
      icon: DollarSign,
      label: "Total Revenue",
      value: "45.8 ETH",
      change: "+18% vs last month",
      color: "green",
    },
    {
      icon: Users,
      label: "Tickets Sold",
      value: "1,234",
      change: "+245 this week",
      color: "blue",
    },
    {
      icon: TrendingUp,
      label: "Avg. Ticket Price",
      value: "0.08 ETH",
      change: "+5% increase",
      color: "pink",
    },
  ];

  const myEvents = [
    {
      id: 1,
      title: "Summer Music Festival 2026",
      date: "Jul 15, 2026",
      location: "Madison Square Garden",
      ticketsSold: 450,
      totalTickets: 500,
      revenue: "12.5 ETH",
      status: "approved",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
    },
    {
      id: 2,
      title: "Tech Conference 2026",
      date: "Aug 20, 2026",
      location: "Convention Center",
      ticketsSold: 180,
      totalTickets: 300,
      revenue: "5.4 ETH",
      status: "pending",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
    },
    {
      id: 3,
      title: "Art Exhibition Night",
      date: "Sep 5, 2026",
      location: "Downtown Gallery",
      ticketsSold: 0,
      totalTickets: 200,
      revenue: "0 ETH",
      status: "rejected",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    },
  ];

  const recentSales = [
    {
      id: "#NFT-2341",
      event: "Summer Festival",
      amount: "0.08 ETH",
      buyer: "0x1234...5678",
      time: "2 mins ago",
    },
    {
      id: "#NFT-2340",
      event: "Tech Conference",
      amount: "0.05 ETH",
      buyer: "0x8765...4321",
      time: "15 mins ago",
    },
    {
      id: "#NFT-2339",
      event: "Summer Festival",
      amount: "0.08 ETH",
      buyer: "0x9876...1234",
      time: "1 hour ago",
    },
    {
      id: "#NFT-2338",
      event: "Tech Conference",
      amount: "0.05 ETH",
      buyer: "0x4567...8901",
      time: "2 hours ago",
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      approved: "bg-green-500/20 text-green-400 border-green-500/30",
      pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      rejected: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    const icons = {
      approved: CheckCircle,
      pending: Clock,
      rejected: XCircle,
    };
    const Icon = icons[status as keyof typeof icons];

    return (
      <span
        className={`flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border ${
          styles[status as keyof typeof styles]
        }`}
      >
        <Icon className="w-3 h-3" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Welcome back, John! 👋
        </h1>
        <p className="text-slate-400">
          Here's your event overview and performance metrics.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
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

      {/* My Events */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">My Events</h2>
          <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {myEvents.map((event) => (
            <div
              key={event.id}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  {getStatusBadge(event.status)}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-white font-bold mb-2 line-clamp-1">
                  {event.title}
                </h3>
                <div className="space-y-1 text-xs text-slate-400 mb-3">
                  <p>📅 {event.date}</p>
                  <p>📍 {event.location}</p>
                </div>

                <div className="flex items-center justify-between text-sm mb-3 pb-3 border-b border-slate-700">
                  <div>
                    <p className="text-slate-400 text-xs">Sold</p>
                    <p className="text-white font-bold">
                      {event.ticketsSold}/{event.totalTickets}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-xs">Revenue</p>
                    <p className="text-purple-400 font-bold">{event.revenue}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Sales */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Recent Sales</h2>
          <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left text-slate-400 text-sm font-medium pb-3">
                  Ticket ID
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-3">
                  Event
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-3">
                  Amount
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-3">
                  Buyer
                </th>
                <th className="text-left text-slate-400 text-sm font-medium pb-3">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {recentSales.map((sale, i) => (
                <tr key={i} className="border-b border-slate-800 last:border-0">
                  <td className="py-4">
                    <span className="text-white font-mono text-sm">
                      {sale.id}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="text-white text-sm">{sale.event}</span>
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
                  <td className="py-4">
                    <span className="text-slate-400 text-sm">{sale.time}</span>
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
