"use client";

import React, { useState } from "react";
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
  Plus,
  Filter,
  X,
} from "lucide-react";
import Link from "next/link";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  ticketsSold: number;
  totalTickets: number;
  revenue: string;
  status: string;
  image: string;
}

export default function MyEvents() {
  const [filter, setFilter] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    title: "",
    date: "",
    location: "",
    totalTickets: "",
  });
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Summer Music Festival 2026",
      date: "Jul 15, 2026",
      time: "8:00 PM",
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
      time: "9:00 AM",
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
      time: "7:00 PM",
      location: "Downtown Gallery",
      ticketsSold: 0,
      totalTickets: 200,
      revenue: "0 ETH",
      status: "rejected",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    },
    {
      id: 4,
      title: "Winter Jazz Night",
      date: "Dec 10, 2026",
      time: "8:30 PM",
      location: "Blue Note Jazz Club",
      ticketsSold: 120,
      totalTickets: 150,
      revenue: "8.2 ETH",
      status: "approved",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    },
    {
      id: 5,
      title: "Startup Pitch Event",
      date: "Oct 15, 2026",
      time: "2:00 PM",
      location: "Silicon Valley Hub",
      ticketsSold: 75,
      totalTickets: 100,
      revenue: "3.1 ETH",
      status: "pending",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400",
    },
    {
      id: 6,
      title: "Food Festival 2026",
      date: "Nov 20, 2026",
      time: "11:00 AM",
      location: "Central Park",
      ticketsSold: 0,
      totalTickets: 400,
      revenue: "0 ETH",
      status: "approved",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const filteredEvents = events.filter((event) =>
    filter === "all" ? true : event.status === filter
  );

  const handleViewEvent = (event: Event) => {
    setSelectedEvent(event);
    setIsViewModalOpen(true);
  };

  const handleEditEvent = (event: Event) => {
    setSelectedEvent(event);
    setEditForm({
      title: event.title,
      date: event.date,
      location: event.location,
      totalTickets: event.totalTickets.toString(),
    });
    setIsEditModalOpen(true);
  };

  const validateForm = () => {
    if (!editForm.title.trim()) return "Title is required";
    if (!editForm.date.trim()) return "Date is required";
    if (!editForm.location.trim()) return "Location is required";
    if (!editForm.totalTickets || parseInt(editForm.totalTickets) <= 0)
      return "Total tickets must be greater than 0";
    return null;
  };

  const handleSaveEdit = async () => {
    const error = validateForm();
    if (error) {
      setMessage({ type: "error", text: error });
      return;
    }

    if (!selectedEvent) return;

    setIsLoading(true);
    setMessage(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const updatedEvents = events.map((event) =>
        event.id === selectedEvent.id
          ? {
              ...event,
              title: editForm.title,
              date: editForm.date,
              location: editForm.location,
              totalTickets: parseInt(editForm.totalTickets),
            }
          : event
      );

      setEvents(updatedEvents);
      setMessage({ type: "success", text: "Event updated successfully!" });
      setIsEditModalOpen(false);
      setSelectedEvent(null);

      // Clear message after 3 seconds
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({
        type: "error",
        text: "Failed to update event. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

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

  const filterOptions = [
    { value: "all", label: "All Events" },
    { value: "approved", label: "Approved" },
    { value: "pending", label: "Pending" },
    { value: "rejected", label: "Rejected" },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">My Events</h1>
          <p className="text-slate-400">
            Manage and track all your events in one place.
          </p>
        </div>
        <Link
          href="/organizer/events/create"
          className="bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create Event
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
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

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                {getStatusBadge(event.status)}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                {event.title}
              </h3>
              <div className="space-y-1 text-sm text-slate-400 mb-4">
                <p>
                  📅 {event.date} at {event.time}
                </p>
                <p>📍 {event.location}</p>
              </div>

              <div className="flex items-center justify-between text-sm mb-4 pb-4 border-b border-slate-700">
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

              <div className="flex gap-3">
                <button
                  onClick={() => handleViewEvent(event)}
                  className="flex-1 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button
                  onClick={() => handleEditEvent(event)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 text-lg mb-2">No events found</div>
          <p className="text-slate-500">
            Try adjusting your filters or create a new event.
          </p>
        </div>
      )}

      {/* View Modal */}
      {isViewModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Event Details</h3>
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div>
                <h4 className="text-white font-bold text-lg">
                  {selectedEvent.title}
                </h4>
                <p className="text-slate-400">
                  📅 {selectedEvent.date} at {selectedEvent.time}
                </p>
                <p className="text-slate-400">📍 {selectedEvent.location}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-400 text-sm">Tickets Sold</p>
                  <p className="text-white font-bold">
                    {selectedEvent.ticketsSold}/{selectedEvent.totalTickets}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Revenue</p>
                  <p className="text-purple-400 font-bold">
                    {selectedEvent.revenue}
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                {getStatusBadge(selectedEvent.status)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Edit Event</h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-slate-400 text-sm mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) =>
                    setEditForm({ ...editForm, title: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1">
                  Date
                </label>
                <input
                  type="text"
                  value={editForm.date}
                  onChange={(e) =>
                    setEditForm({ ...editForm, date: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={editForm.location}
                  onChange={(e) =>
                    setEditForm({ ...editForm, location: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1">
                  Total Tickets
                </label>
                <input
                  type="number"
                  value={editForm.totalTickets}
                  onChange={(e) =>
                    setEditForm({ ...editForm, totalTickets: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="flex-1 bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition-all"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
