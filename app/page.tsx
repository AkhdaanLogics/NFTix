import React from "react";
import Link from "next/link";
import {
  Wallet,
  ArrowRight,
  MapPin,
  Calendar,
  Star,
  Music,
  Zap,
  Users,
} from "lucide-react";

export default function HomePage() {
  const events = [
    {
      title: "Summer Music Festival 2026",
      artist: "Various Artists",
      date: "7/15/2026",
      location: "Madison Square Garden, NY",
      price: "0.08 ETH",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      category: "Festival",
    },
    {
      title: "Jazz Night Premium",
      artist: "Blue Note Ensemble",
      date: "6/20/2026",
      location: "Blue Note Jazz Club, NYC",
      price: "0.025 BTC",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
      category: "Jazz",
    },
    {
      title: "Electronic Dreams Festival",
      artist: "Top EDM DJs",
      date: "8/10/2026",
      location: "Las Vegas Convention Center",
      price: "12.5 SOL",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
      category: "Electronic",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Verification",
      description:
        "Blockchain-powered authentication ensures your tickets are genuine",
    },
    {
      icon: Users,
      title: "Tradeable Assets",
      description:
        "Buy, sell, or transfer your tickets securely on the marketplace",
    },
    {
      icon: Music,
      title: "Exclusive Perks",
      description:
        "Get access to exclusive content and experiences with your NFT tickets",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">NFTix</span>
            </div>

            <div className="hidden md:flex items-end gap-8">
              <a
                href="#events"
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                CONCERTS
              </a>
              <a
                href="#faq"
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                FAQ
              </a>
            </div>

            <Link
              href="/login"
              className="flex items-center md: gap-2 bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold px-6 py-2.5 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              <Wallet className="w-5 h-5" />
              CONNECT WALLET
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of Concert Tickets
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Experience live music with blockchain-powered NFT tickets. Secure,
            authentic, and tradeable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all text-lg">
              Browse Events
            </button>
            <Link
              href="/login"
              className="bg-slate-800 border border-slate-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-slate-700 transition-all text-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all"
              >
                <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">
                Upcoming Events
              </h2>
              <p className="text-slate-400 text-lg">
                Don't miss out on these amazing concerts
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-linear-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-1 line-clamp-1">
                    {event.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">{event.artist}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-purple-400 font-bold text-lg">
                      {event.price}
                    </span> 
                    <Link href={"/login"} className="bg-linear-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                      Purchase NFT
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">NFTix</span>
          </div>
          <p className="text-slate-400 mb-6">
            The future of concert ticketing powered by blockchain technology.
          </p>
          <p className="text-slate-500 text-sm">
            © 2026 NFTix. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
