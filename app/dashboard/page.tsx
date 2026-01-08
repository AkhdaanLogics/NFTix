"use client";

import React, { useState } from "react";
import {
  Ticket,
  Wallet,
  Calendar,
  MapPin,
  Star,
  Clock,
  CheckCircle,
  Eye,
  Download,
  Share,
} from "lucide-react";

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Stats data
  const stats = [
    {
      icon: Ticket,
      label: "Tickets Owned",
      value: "8",
      change: "+2 this month",
      bgColor: "bg-purple-500/20",
      textColor: "text-purple-400",
    },
    {
      icon: Wallet,
      label: "Total Spent",
      value: "1.2 ETH",
      change: "Avg. 0.15 ETH/ticket",
      bgColor: "bg-green-500/20",
      textColor: "text-green-400",
    },
    {
      icon: Calendar,
      label: "Events Attended",
      value: "5",
      change: "3 upcoming",
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-400",
    },
    {
      icon: Star,
      label: "Favorite Genre",
      value: "Music",
      change: "5 events",
      bgColor: "bg-pink-500/20",
      textColor: "text-pink-400",
    },
  ];

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Summer Music Festival 2026",
      date: "Jul 15, 2026",
      location: "Madison Square Garden, NY",
      ticketId: "#NFT-2341",
      price: "0.08 ETH",
      status: "confirmed",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
    },
    {
      id: 2,
      title: "Tech Conference 2026",
      date: "Aug 20, 2026",
      location: "Convention Center, SF",
      ticketId: "#NFT-2342",
      price: "0.05 ETH",
      status: "confirmed",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
    },
    {
      id: 3,
      title: "Jazz Night Premium",
      date: "Sep 10, 2026",
      location: "Blue Note Jazz Club, NYC",
      ticketId: "#NFT-2343",
      price: "0.025 BTC",
      status: "confirmed",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    },
  ];

  // Past events data
  const pastEvents = [
    {
      id: 4,
      title: "Electronic Dreams Festival",
      date: "Dec 15, 2025",
      location: "Las Vegas Convention Center",
      ticketId: "#NFT-2101",
      price: "12.5 SOL",
      status: "attended",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400",
      rating: 5,
    },
    {
      id: 5,
      title: "Rock Concert 2025",
      date: "Nov 20, 2025",
      location: "Staples Center, LA",
      ticketId: "#NFT-1987",
      price: "0.1 ETH",
      status: "attended",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      rating: 4,
    },
  ];

  // Available events for purchase
  const availableEvents = [
    {
      id: 7,
      title: "Winter Jazz Festival",
      date: "Jan 20, 2027",
      location: "Blue Note Jazz Club, NYC",
      price: "0.05 ETH",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    },
    {
      id: 8,
      title: "Tech Summit 2027",
      date: "Feb 15, 2027",
      location: "Convention Center, SF",
      price: "0.08 ETH",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
    },
    {
      id: 9,
      title: "Rock Legends Tour",
      date: "Mar 10, 2027",
      location: "Madison Square Garden, NY",
      price: "0.12 ETH",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    },
  ];

  // Status badge component
  const getStatusBadge = (status: string) => {
    const config = {
      confirmed: {
        style: "bg-green-500/20 text-green-400 border-green-500/30",
        icon: CheckCircle,
        label: "Confirmed",
      },
      attended: {
        style: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        icon: CheckCircle,
        label: "Attended",
      },
      cancelled: {
        style: "bg-red-500/20 text-red-400 border-red-500/30",
        icon: Clock,
        label: "Cancelled",
      },
    };

    const { style, icon: Icon, label } = config[status as keyof typeof config];

    return (
      <span
        className={`flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border ${style}`}
      >
        <Icon className="w-3 h-3" />
        {label}
      </span>
    );
  };

  // Render stars for rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-slate-600"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, Alex! 👋
        </h1>
        <p className="text-slate-400">
          Manage your NFT tickets and discover new events.
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
              <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className={`${stat.textColor} text-xs font-semibold`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Events Section with Tabs */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 bg-slate-800/50 p-1 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "upcoming"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "past"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "upcoming" ? (
          /* Upcoming Events Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all group"
              >
                {/* Event Image */}
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

                {/* Event Details */}
                <div className="p-4">
                  <h3 className="text-white font-bold mb-2 line-clamp-1">
                    {event.title}
                  </h3>

                  <div className="space-y-1 text-xs text-slate-400 mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ticket className="w-3 h-3" />
                      <span>{event.ticketId}</span>
                    </div>
                  </div>

                  {/* Price & Status Info */}
                  <div className="flex items-center justify-between text-sm mb-3 pb-3 border-b border-slate-700">
                    <div>
                      <p className="text-slate-400 text-xs">Price Paid</p>
                      <p className="text-purple-400 font-bold">{event.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-xs">Status</p>
                      <p className="text-green-400 font-bold">Confirmed</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50 text-white text-sm font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1">
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                    <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Past Events Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all group"
              >
                {/* Event Image */}
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

                {/* Event Details */}
                <div className="p-4">
                  <h3 className="text-white font-bold mb-2 line-clamp-1">
                    {event.title}
                  </h3>

                  <div className="space-y-1 text-xs text-slate-400 mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ticket className="w-3 h-3" />
                      <span>{event.ticketId}</span>
                    </div>
                  </div>

                  {/* Price & Rating */}
                  <div className="flex items-center justify-between text-sm mb-3 pb-3 border-b border-slate-700">
                    <div>
                      <p className="text-slate-400 text-xs mb-1">Price Paid</p>
                      <p className="text-purple-400 font-bold">{event.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-xs mb-1">Your Rating</p>
                      {renderStars(event.rating)}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1">
                      <Eye className="w-4 h-4" />
                      Details
                    </button>
                    <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1">
                      <Share className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Browse & Buy Tickets Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-6">
          Browse & Buy Tickets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableEvents.map((event) => (
            <div
              key={event.id}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all group"
            >
              {/* Event Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Event Details */}
              <div className="p-4">
                <h3 className="text-white font-bold mb-2 line-clamp-1">
                  {event.title}
                </h3>

                <div className="space-y-1 text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>

                {/* Price Info */}
                <div className="flex items-center justify-between text-sm mb-3 pb-3 border-b border-slate-700">
                  <div>
                    <p className="text-slate-400 text-xs">Price</p>
                    <p className="text-purple-400 font-bold">{event.price}</p>
                  </div>
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => alert(`Buying ticket for ${event.title}`)}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1"
                >
                  <Ticket className="w-4 h-4" />
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => alert("Browsing events...")}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Ticket className="w-5 h-5" />
            Browse Events
          </button>
          <button
            onClick={() => alert("Transferring ticket...")}
            className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Wallet className="w-5 h-5" />
            Transfer Ticket
          </button>
          <button
            onClick={() => alert("Rating events...")}
            className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Star className="w-5 h-5" />
            Rate Events
          </button>
          <button
            onClick={() => alert("Downloading all tickets...")}
            className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download All
          </button>
        </div>
      </div>
    </>
  );
}
