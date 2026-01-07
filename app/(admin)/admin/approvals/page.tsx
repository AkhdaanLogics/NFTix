"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Check,
  X,
  AlertTriangle,
  Search,
  Filter,
  Calendar,
  Users,
  MapPin,
  DollarSign,
  FileText,
  Download,
  MessageSquare,
} from "lucide-react";

export default function Approvals() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const pendingEvents = [
    {
      id: 1,
      title: "Summer Music Festival 2026",
      organizer: "Event Masters Inc.",
      organizerEmail: "contact@eventmasters.com",
      date: "Jul 15, 2026",
      location: "Madison Square Garden, New York",
      expectedAttendees: 5000,
      ticketPrice: "0.08 ETH",
      description:
        "A spectacular music festival featuring top artists from around the world. Multiple stages, food vendors, and entertainment for all ages.",
      submittedDate: "2024-01-15",
      status: "pending",
      priority: "high",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      documents: [
        { name: "Event_Plan.pdf", type: "plan" },
        { name: "Insurance_Certificate.pdf", type: "insurance" },
        { name: "Venue_Contract.pdf", type: "contract" },
        { name: "Artist_Contracts.pdf", type: "contracts" },
      ],
      reviews: [
        {
          reviewer: "Safety Officer",
          status: "approved",
          comment: "Safety measures look comprehensive",
          date: "2024-01-16",
        },
        {
          reviewer: "Legal Team",
          status: "approved",
          comment: "All contracts are in order",
          date: "2024-01-16",
        },
      ],
    },
    {
      id: 2,
      title: "Tech Conference 2026",
      organizer: "Tech Innovations Ltd.",
      organizerEmail: "info@techinnovations.com",
      date: "Aug 20, 2026",
      location: "Convention Center, San Francisco",
      expectedAttendees: 800,
      ticketPrice: "0.05 ETH",
      description:
        "Leading technology conference with workshops and networking sessions. Featuring keynote speakers from major tech companies.",
      submittedDate: "2024-01-14",
      status: "pending",
      priority: "medium",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      documents: [
        { name: "Conference_Program.pdf", type: "program" },
        { name: "Speaker_List.pdf", type: "speakers" },
        { name: "Venue_Layout.pdf", type: "layout" },
      ],
      reviews: [
        {
          reviewer: "Content Team",
          status: "approved",
          comment: "Program looks solid",
          date: "2024-01-15",
        },
      ],
    },
    {
      id: 3,
      title: "Art Exhibition Night",
      organizer: "Creative Arts Foundation",
      organizerEmail: "hello@creativearts.org",
      date: "Sep 5, 2026",
      location: "Downtown Gallery, Chicago",
      expectedAttendees: 300,
      ticketPrice: "0.03 ETH",
      description:
        "Contemporary art exhibition featuring emerging artists. Includes artist talks, wine tasting, and live music.",
      submittedDate: "2024-01-13",
      status: "pending",
      priority: "low",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      documents: [
        { name: "Artist_Portfolio.pdf", type: "portfolio" },
        { name: "Exhibition_Layout.pdf", type: "layout" },
        { name: "Insurance_Coverage.pdf", type: "insurance" },
      ],
      reviews: [
        {
          reviewer: "Arts Committee",
          status: "pending",
          comment: "Under review",
          date: "2024-01-14",
        },
      ],
    },
    {
      id: 4,
      title: "Winter Jazz Night",
      organizer: "Jazz Collective",
      organizerEmail: "bookings@jazzcollective.com",
      date: "Dec 10, 2025",
      location: "Blue Note Jazz Club, NYC",
      expectedAttendees: 150,
      ticketPrice: "0.12 ETH",
      description:
        "Intimate jazz evening featuring renowned musicians. Perfect atmosphere for jazz enthusiasts.",
      submittedDate: "2024-01-12",
      status: "pending",
      priority: "medium",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      documents: [
        { name: "Artist_Contracts.pdf", type: "contracts" },
        { name: "Sound_System_Specs.pdf", type: "technical" },
      ],
      reviews: [
        {
          reviewer: "Music Committee",
          status: "approved",
          comment: "Excellent lineup",
          date: "2024-01-13",
        },
        {
          reviewer: "Technical Team",
          status: "approved",
          comment: "Sound setup adequate",
          date: "2024-01-13",
        },
      ],
    },
  ];

  const filteredEvents = pendingEvents.filter((event) => {
    const matchesFilter = filter === "all" || event.priority === filter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleApprove = (eventId: number) => {
    if (confirm("Are you sure you want to approve this event?")) {
      // Handle approval logic here
      alert(`Event #${eventId} has been approved successfully!`);
    }
  };

  const handleReject = (eventId: number) => {
    const reason = prompt("Please provide a reason for rejection:");
    if (reason) {
      // Handle rejection logic here
      alert(`Event #${eventId} has been rejected. Reason: ${reason}`);
    }
  };

  const getPriorityBadge = (priority: string) => {
    const styles = {
      high: "bg-red-500/20 text-red-400 border-red-500/30",
      medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      low: "bg-green-500/20 text-green-400 border-green-500/30",
    };
    return (
      <span
        className={`text-xs font-semibold px-2 py-1 rounded-full border ${
          styles[priority as keyof typeof styles]
        }`}
      >
        {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
      </span>
    );
  };

  const getReviewStatus = (status: string) => {
    const styles = {
      approved: "text-green-400",
      pending: "text-yellow-400",
      rejected: "text-red-400",
    };
    return (
      <span
        className={`text-xs font-medium ${
          styles[status as keyof typeof styles]
        }`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const filterOptions = [
    { value: "all", label: "All Events" },
    { value: "high", label: "High Priority" },
    { value: "medium", label: "Medium Priority" },
    { value: "low", label: "Low Priority" },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Event Approvals</h1>
          <p className="text-slate-400">
            Review and approve event submissions from organizers.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center gap-2 border border-slate-700">
            <Download className="w-5 h-5" />
            Export List
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-yellow-500/20">
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-1">Pending Review</p>
          <p className="text-2xl font-bold text-white mb-1">
            {pendingEvents.length}
          </p>
          <p className="text-yellow-400 text-xs font-semibold">
            Requires attention
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-red-500/20">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-1">High Priority</p>
          <p className="text-2xl font-bold text-white mb-1">
            {pendingEvents.filter((e) => e.priority === "high").length}
          </p>
          <p className="text-red-400 text-xs font-semibold">
            Urgent review needed
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-blue-500/20">
              <CheckCircle className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-1">Approved Today</p>
          <p className="text-2xl font-bold text-white mb-1">3</p>
          <p className="text-green-400 text-xs font-semibold">
            +2 from yesterday
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-purple-500/20">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <p className="text-slate-400 text-sm mb-1">Avg. Review Time</p>
          <p className="text-2xl font-bold text-white mb-1">4.2h</p>
          <p className="text-purple-400 text-xs font-semibold">Within SLA</p>
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
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-red-500 outline-none text-white placeholder-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all"
          >
            <div className="p-6">
              <div className="flex gap-6">
                {/* Event Image */}
                <div className="flex-shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                </div>

                {/* Event Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {event.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-2">
                        by {event.organizer} • {event.organizerEmail}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {getPriorityBadge(event.priority)}
                      <span className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-500/30 text-yellow-400">
                        <Clock className="w-3 h-3" />
                        Pending
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Users className="w-4 h-4" />
                      {event.expectedAttendees.toLocaleString()} expected
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Documents */}
                  <div className="mb-4">
                    <p className="text-slate-400 text-sm mb-2">
                      Submitted Documents:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.documents.map((doc, i) => (
                        <button
                          key={i}
                          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white transition-all"
                        >
                          <FileText className="w-4 h-4" />
                          {doc.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Reviews */}
                  <div className="mb-4">
                    <p className="text-slate-400 text-sm mb-2">
                      Review Status:
                    </p>
                    <div className="space-y-2">
                      {event.reviews.map((review, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between bg-slate-800/50 px-3 py-2 rounded-lg"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-slate-300 text-sm font-medium">
                              {review.reviewer}:
                            </span>
                            <span className="text-slate-400 text-sm">
                              {review.comment}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            {getReviewStatus(review.status)}
                            <span className="text-slate-500 text-xs">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      Submitted: {event.submittedDate}
                    </div>
                    <div className="flex gap-3">
                      <button className="bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        Review Details
                      </button>
                      <button className="bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Request Info
                      </button>
                      <button
                        onClick={() => handleReject(event.id)}
                        className="bg-red-600 hover:bg-red-500 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all flex items-center gap-2"
                      >
                        <X className="w-4 h-4" />
                        Reject
                      </button>
                      <button
                        onClick={() => handleApprove(event.id)}
                        className="bg-green-600 hover:bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all flex items-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        Approve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 text-lg mb-2">No events found</div>
            <p className="text-slate-500">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
