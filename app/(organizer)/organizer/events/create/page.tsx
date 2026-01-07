"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Upload,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";

export default function CreateEventPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    time: "",
    location: "",
    venue: "",
    totalTickets: "",
    ticketPrice: "",
    currency: "ETH",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Event created:", formData);
    // Submit to backend
    router.push("/organizer");
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/organizer"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-white mb-2">Create New Event</h1>
        <p className="text-slate-400">
          Fill in the details to create your NFT ticketed event
        </p>
      </div>

      {/* Form */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Event Image */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Event Cover Image
            </label>
            <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-purple-500 transition-all cursor-pointer">
              <ImageIcon className="w-12 h-12 text-slate-500 mx-auto mb-3" />
              <p className="text-white font-medium mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-slate-400 text-sm">PNG, JPG up to 10MB</p>
            </div>
          </div>

          {/* Event Title */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Event Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="Summer Music Festival 2026"
            />
          </div>

          {/* Description */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              placeholder="Describe your event..."
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            >
              <option value="">Select category</option>
              <option value="music">Music</option>
              <option value="conference">Conference</option>
              <option value="sports">Sports</option>
              <option value="art">Art & Culture</option>
              <option value="festival">Festival</option>
              <option value="workshop">Workshop</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              Event Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Event Time *
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              <MapPin className="w-4 h-4 inline mr-1" />
              City/Location *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="New York, NY"
            />
          </div>

          {/* Venue */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Venue Name *
            </label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleInputChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="Madison Square Garden"
            />
          </div>

          {/* Total Tickets */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              <Users className="w-4 h-4 inline mr-1" />
              Total Tickets *
            </label>
            <input
              type="number"
              name="totalTickets"
              value={formData.totalTickets}
              onChange={handleInputChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="1000"
            />
          </div>

          {/* Ticket Price */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              <DollarSign className="w-4 h-4 inline mr-1" />
              Ticket Price *
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleInputChange}
                step="0.01"
                className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="0.08"
              />
              <select
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                className="bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              >
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
                <option value="SOL">SOL</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-slate-800">
          <button
            onClick={() => router.back()}
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 bg-linear-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold py-3 rounded-xl transition-all"
          >
            Submit for Review
          </button>
        </div>

        <p className="text-slate-400 text-sm text-center mt-4">
          Your event will be reviewed by our team before going live
        </p>
      </div>
    </>
  );
}
