"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  XCircle,
  Clock,
  Users,
  Calendar,
  TrendingUp,
  Eye,
  Check,
  X,
  AlertTriangle,
} from "lucide-react";

export default function AdminDashboard() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const stats = [
    {
      icon: Clock,
      label: "Pending Approvals",
      value: "12",
      change: "3 new today",
      color: "yellow",
    },
    {
      icon: CheckCircle,
      label: "Approved Events",
      value: "156",
      change: "+12 this week",
      color: "green",
    },
    {
      icon: XCircle,
      label: "Rejected Events",
      value: "23",
      change: "+2 this week",
      color: "red",
    },
    {
      icon: Users,
      label: "Active Organizers",
      value: "89",
      change: "+5 this month",
      color: "blue",
    },
  ];

  const pendingEvents = [
    {
      id: 1,
      title: "Summer Music Festival 2026",
      organizer: "Event Masters Inc.",
      organizerEmail: "contact@eventmasters.com",
      date: "Jul 15, 2026",
      location: "Madison Square Garden",
      expectedAttendees: 5000,
      ticketPrice: "0.08 ETH",
      description:
        "A spectacular music festival featuring top artists from around the world.",
      submittedDate: "2024-01-15",
      status: "pending",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      documents: [
        "Event_Plan.pdf",
        "Insurance_Certificate.pdf",
        "Venue_Contract.pdf",
      ],
    },
    {
      id: 2,
      title: "Tech Conference 2026",
      organizer: "Tech Innovations Ltd.",
      organizerEmail: "info@techinnovations.com",
      date: "Aug 20, 2026",
      location: "Convention Center",
      expectedAttendees: 800,
      ticketPrice: "0.05 ETH",
      description:
        "Leading technology conference with workshops and networking sessions.",
      submittedDate: "2024-01-14",
      status: "pending",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      documents: ["Conference_Program.pdf", "Speaker_List.pdf"],
    },
    {
      id: 3,
      title: "Art Exhibition Night",
      organizer: "Creative Arts Foundation",
      organizerEmail: "hello@creativearts.org",
      date: "Sep 5, 2026",
      location: "Downtown Gallery",
      expectedAttendees: 300,
      ticketPrice: "0.03 ETH",
      description: "Contemporary art exhibition featuring emerging artists.",
      submittedDate: "2024-01-13",
      status: "pending",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      documents: ["Artist_Portfolio.pdf", "Exhibition_Layout.pdf"],
    },
  ];

  const recentActions = [
    {
      id: "#EVT-2341",
      event: "Winter Jazz Night",
      action: "approved",
      admin: "Admin User",
      time: "2 hours ago",
    },
    {
      id: "#EVT-2340",
      event: "Startup Pitch Event",
      action: "rejected",
      admin: "Admin User",
      time: "4 hours ago",
    },
    {
      id: "#EVT-2339",
      event: "Food Festival 2026",
      action: "approved",
      admin: "Admin User",
      time: "1 day ago",
    },
  ];

  const handleApprove = (eventId: number) => {
    if (confirm("Are you sure you want to approve this event?")) {
      // Handle approval logic here
      alert(`Event #${eventId} has been approved`);
    }
  };

  const handleReject = (eventId: number) => {
    const reason = prompt("Please provide a reason for rejection:");
    if (reason) {
      // Handle rejection logic here
      alert(`Event #${eventId} has been rejected. Reason: ${reason}`);
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      approved: "bg-green-500/20 text-green-400 border-green-500/30",
      rejected: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    const icons = {
      pending: Clock,
      approved: CheckCircle,
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
        <h1 className="text-3xl font-bold text-white">Admin Dashboard 👋</h1>
        <p className="text-slate-400">
          Review and manage event submissions from organizers.
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
            <p className={`text-${stat.color}-400 text-xs font-semibold`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pending Events */}
        <div className="lg:col-span-2">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">
                Pending Approvals
              </h2>
              <span className="text-slate-400 text-sm">
                {pendingEvents.length} events waiting
              </span>
            </div>

            <div className="space-y-4">
              {pendingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-yellow-500/50 transition-all"
                >
                  <div className="flex gap-4">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-bold text-lg line-clamp-1">
                          {event.title}
                        </h3>
                        {getStatusBadge(event.status)}
                      </div>

                      <div className="space-y-1 text-sm text-slate-400 mb-3">
                        <p>👤 {event.organizer}</p>
                        <p>
                          📅 {event.date} • 📍 {event.location}
                        </p>
                        <p>
                          🎫 Expected:{" "}
                          {event.expectedAttendees.toLocaleString()} • 💰{" "}
                          {event.ticketPrice}
                        </p>
                      </div>

                      <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                        {event.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-slate-500">
                          Submitted: {event.submittedDate}
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleApprove(event.id)}
                            className="bg-green-600 hover:bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all flex items-center gap-1"
                          >
                            <Check className="w-4 h-4" />
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(event.id)}
                            className="bg-red-600 hover:bg-red-500 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all flex items-center gap-1"
                          >
                            <X className="w-4 h-4" />
                            Reject
                          </button>
                          <button className="bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            Review
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Actions */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">
              Recent Actions
            </h2>

            <div className="space-y-4">
              {recentActions.map((action, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      action.action === "approved"
                        ? "bg-green-500/20"
                        : "bg-red-500/20"
                    }`}
                  >
                    {action.action === "approved" ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium line-clamp-1">
                      {action.event}
                    </p>
                    <p className="text-slate-400 text-xs">
                      {action.action.charAt(0).toUpperCase() +
                        action.action.slice(1)}{" "}
                      • {action.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">This Week</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Events Reviewed</span>
                <span className="text-white font-bold">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Approval Rate</span>
                <span className="text-green-400 font-bold">87%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Avg. Review Time</span>
                <span className="text-blue-400 font-bold">2.3h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
