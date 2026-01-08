"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Wallet } from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleWalletConnect = async () => {
    setIsConnecting(true);
    // Simulate wallet connection process
    setTimeout(() => {
      setIsConnecting(false);
      router.push("/login");
    }, 2000); // Simulate connection delay
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      {/* Main container */}
      <div className="relative w-full max-w-md text-center">
        {/* Logo and header */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-purple-500 to-blue-500 rounded-2xl mb-4 shadow-lg shadow-purple-500/50">
            <svg
              className="w-10 h-10 text-white"
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
          <h1 className="text-4xl font-bold text-white mb-2">NFTix</h1>
          <p className="text-slate-400">
            Secure Your Event Tickets on Blockchain
          </p>
        </div>

        {/* Wallet connection card */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-slate-700/50">
          <div className="mb-6">
            <Wallet className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Connect Your Wallet
            </h2>
            <p className="text-slate-300">
              To access NFTix, please connect your Web3 wallet first.
            </p>
          </div>

          <button
            onClick={handleWalletConnect}
            disabled={isConnecting}
            className="w-full bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isConnecting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Connecting...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Wallet className="w-5 h-5" />
                Connect Wallet
              </div>
            )}
          </button>

          <p className="text-slate-500 text-sm mt-4">
            Secured by blockchain technology
          </p>
        </div>
      </div>
    </div>
  );
}
