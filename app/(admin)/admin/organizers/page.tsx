"use client";

import React, { useState } from "react";
import {
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Search,
  Filter,
  Eye,
  Edit,
  Ban,
  CheckCircle,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  Building,
  Star,
  Download,
  UserCheck,
  UserX,
  Plus,
  UserPlus,
} from "lucide-react";

export default function Organizers() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const organizers = [
    {
      id: 1,
      name: "Event Masters Inc.",
      email: "contact@eventmasters.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      joinedDate: "2023-01-15",
      status: "active",
      totalEvents: 12,
      activeEvents: 3,
      totalRevenue: "156.8 ETH",
      rating: 4.8,
      verificationStatus: "verified",
      events: [
        {
          id: 1,
          title: "Summer Music Festival 2026",
          status: "approved",
          revenue: "45.2 ETH",
        },
        {
          id: 2,
          title: "Winter Jazz Night",
          status: "approved",
          revenue: "12.5 ETH",
        },
        {
          id: 3,
          title: "Tech Conference 2026",
          status: "pending",
          revenue: "0 ETH",
        },
      ],
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    },
    {
      id: 2,
      name: "Tech Innovations Ltd.",
      email: "info@techinnovations.com",
      phone: "+1 (555) 987-6543",
      location: "San Francisco, CA",
      joinedDate: "2023-03-22",
      status: "active",
      totalEvents: 8,
      activeEvents: 2,
      totalRevenue: "89.4 ETH",
      rating: 4.6,
      verificationStatus: "verified",
      events: [
        {
          id: 4,
          title: "Startup Pitch Event",
          status: "approved",
          revenue: "23.1 ETH",
        },
        {
          id: 5,
          title: "AI Summit 2026",
          status: "approved",
          revenue: "34.8 ETH",
        },
      ],
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    },
    {
      id: 3,
      name: "Creative Arts Foundation",
      email: "hello@creativearts.org",
      phone: "+1 (555) 456-7890",
      location: "Chicago, IL",
      joinedDate: "2023-05-10",
      status: "suspended",
      totalEvents: 5,
      activeEvents: 0,
      totalRevenue: "23.7 ETH",
      rating: 3.9,
      verificationStatus: "pending",
      events: [
        {
          id: 6,
          title: "Art Exhibition Night",
          status: "rejected",
          revenue: "0 ETH",
        },
      ],
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
    },
    {
      id: 4,
      name: "Jazz Collective",
      email: "bookings@jazzcollective.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      joinedDate: "2023-07-08",
      status: "active",
      totalEvents: 15,
      activeEvents: 1,
      totalRevenue: "67.2 ETH",
      rating: 4.9,
      verificationStatus: "verified",
      events: [
        {
          id: 7,
          title: "Winter Jazz Night",
          status: "approved",
          revenue: "18.9 ETH",
        },
        {
          id: 8,
          title: "Summer Jazz Festival",
          status: "approved",
          revenue: "28.4 ETH",
        },
      ],
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    },
    {
      id: 5,
      name: "Food Festival Co.",
      email: "events@foodfestival.com",
      phone: "+1 (555) 345-6789",
      location: "Los Angeles, CA",
      joinedDate: "2023-09-15",
      status: "active",
      totalEvents: 6,
      activeEvents: 1,
      totalRevenue: "45.6 ETH",
      rating: 4.4,
      verificationStatus: "verified",
      events: [
        {
          id: 9,
          title: "Food Festival 2026",
          status: "approved",
          revenue: "22.3 ETH",
        },
      ],
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    },
  ];

  const filteredOrganizers = organizers.filter((organizer) => {
    const matchesFilter = filter === "all" || organizer.status === filter;
    const matchesSearch =
      organizer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      organizer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      organizer.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleSuspend = (organizerId: number) => {
    if (confirm("Are you sure you want to suspend this organizer?")) {
      // Handle suspension logic here
      alert(`Organizer #${organizerId} has been suspended.`);
    }
  };

  const handleActivate = (organizerId: number) => {
    if (confirm("Are you sure you want to activate this organizer?")) {
      // Handle activation logic here
      alert(`Organizer #${organizerId} has been activated.`);
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      active: "bg-green-500/20 text-green-400 border-green-500/30",
      suspended: "bg-red-500/20 text-red-400 border-red-500/30",
      pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    };
    const icons = {
      active: CheckCircle,
      suspended: Ban,
      pending: AlertTriangle,
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

  const getVerificationBadge = (status: string) => {
    const styles = {
      verified: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      unverified: "bg-gray-500/20 text-gray-400 border-gray-500/30",
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
    { value: "all", label: "All Organizers" },
    { value: "active", label: "Active" },
    { value: "suspended", label: "Suspended" },
    { value: "pending", label: "Pending" },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Organizers</h1>
          <p className="text-slate-400">
            Manage and monitor event organizers on the platform.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center gap-2 border border-slate-700">
            <Download className="w-5 h-5" />
            Export Data
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-blue-500/20">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-1">Total Organizers</p>
          <p className="text-2xl font-bold text-white mb-1">
            {organizers.length}
          </p>
          <p className="text-green-400 text-xs font-semibold">+2 this month</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-green-500/20">
              <UserCheck className="w-6 h-6 text-green-400" />
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-1">Active Organizers</p>
          <p className="text-2xl font-bold text-white mb-1">
            {organizers.filter((o) => o.status === "active").length}
          </p>
          <p className="text-green-400 text-xs font-semibold">
            85% active rate
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-purple-500/20">
              <Calendar className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-1">Total Events</p>
          <p className="text-2xl font-bold text-white mb-1">
            {organizers.reduce((sum, o) => sum + o.totalEvents, 0)}
          </p>
          <p className="text-purple-400 text-xs font-semibold">
            Across all organizers
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-yellow-500/20">
              <DollarSign className="w-6 h-6 text-yellow-400" />
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-1">Total Revenue</p>
          <p className="text-2xl font-bold text-white mb-1">382.7 ETH</p>
          <p className="text-green-400 text-xs font-semibold">
            +12% vs last month
          </p>
        </div>
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
                    ? "bg-red-500 text-white"
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
              placeholder="Search organizers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-red-500 outline-none text-white placeholder-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Organizers List */}
      <div className="space-y-6">
        {filteredOrganizers.map((organizer) => (
          <div
            key={organizer.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all"
          >
            <div className="p-6">
              <div className="flex gap-6">
                {/* Organizer Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={organizer.avatar}
                    alt={organizer.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>

                {/* Organizer Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {organizer.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {organizer.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {organizer.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-400 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {organizer.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          Joined {organizer.joinedDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {getStatusBadge(organizer.status)}
                      {getVerificationBadge(organizer.verificationStatus)}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs mb-1">
                        Total Events
                      </p>
                      <p className="text-white font-bold">
                        {organizer.totalEvents}
                      </p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs mb-1">
                        Active Events
                      </p>
                      <p className="text-white font-bold">
                        {organizer.activeEvents}
                      </p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs mb-1">
                        Total Revenue
                      </p>
                      <p className="text-purple-400 font-bold">
                        {organizer.totalRevenue}
                      </p>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <p className="text-slate-400 text-xs mb-1">Rating</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <p className="text-white font-bold">
                          {organizer.rating}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recent Events */}
                  <div className="mb-4">
                    <p className="text-slate-400 text-sm mb-2">
                      Recent Events:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {organizer.events.slice(0, 3).map((event) => (
                        <span
                          key={event.id}
                          className={`text-xs px-2 py-1 rounded-full ${
                            event.status === "approved"
                              ? "bg-green-500/20 text-green-400"
                              : event.status === "pending"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {event.title}
                        </span>
                      ))}
                      {organizer.events.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-400">
                          +{organizer.events.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      Last active: 2 hours ago
                    </div>
                    <div className="flex gap-3">
                      <button className="bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Profile
                      </button>
                      <button className="bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all flex items-center gap-2">
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      {organizer.status === "active" ? (
                        <button
                          onClick={() => handleSuspend(organizer.id)}
                          className="bg-red-600 hover:bg-red-500 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all flex items-center gap-2"
                        >
                          <Ban className="w-4 h-4" />
                          Suspend
                        </button>
                      ) : (
                        <button
                          onClick={() => handleActivate(organizer.id)}
                          className="bg-green-600 hover:bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all flex items-center gap-2"
                        >
                          <UserCheck className="w-4 h-4" />
                          Activate
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredOrganizers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 text-lg mb-2">
              No organizers found
            </div>
            <p className="text-slate-500">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
