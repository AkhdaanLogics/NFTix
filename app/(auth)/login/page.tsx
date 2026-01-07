"use client";
import React, { useState } from "react";
import { Wallet, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function NFTixLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("email"); // 'email' or 'wallet'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  interface LoginFormData {
    email: string;
    password: string;
    method: string;
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const loginData: LoginFormData = {
      email,
      password,
      method: loginMethod,
    };
    console.log("Login attempted with:", loginData);
    // Handle login logic here
  };

  const handleWalletConnect = () => {
    console.log("Connecting wallet...");
    // Handle wallet connection logic here
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      {/* Main container */}
      <div className="relative w-full max-w-md">
        {/* Logo and header */}
        <div className="text-center mb-8">
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

        {/* Login card */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-slate-700/50">
          {/* Tab selector */}
          <div className="flex gap-2 mb-6 bg-slate-900/50 p-1 rounded-xl">
            <button
              onClick={() => setLoginMethod("email")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                loginMethod === "email"
                  ? "bg-linear-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Mail className="w-4 h-4 inline mr-2" />
              Email
            </button>
            <button
              onClick={() => setLoginMethod("wallet")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                loginMethod === "wallet"
                  ? "bg-linear-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Wallet className="w-4 h-4 inline mr-2" />
              Wallet
            </button>
          </div>

          {loginMethod === "email" ? (
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email input */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 px-10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Password input */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 px-10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2 rounded bg-slate-900 border-slate-700"
                  />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="w-full bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Sign In
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <p className="text-slate-300 text-center mb-6">
                Connect your Web3 wallet to access NFTix
              </p>

              {/* Wallet options */}
              <button
                onClick={handleWalletConnect}
                className="w-full bg-linear-to-r from-orange-500 to-yellow-500 text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <Wallet className="w-5 h-5" />
                Connect MetaMask
              </button>

              <button
                onClick={handleWalletConnect}
                className="w-full bg-slate-700 text-white font-semibold py-4 rounded-xl hover:bg-slate-600 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Wallet className="w-5 h-5" />
                WalletConnect
              </button>

              <button
                onClick={handleWalletConnect}
                className="w-full bg-slate-700 text-white font-semibold py-4 rounded-xl hover:bg-slate-600 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Wallet className="w-5 h-5" />
                Coinbase Wallet
              </button>
            </div>
          )}

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-slate-800 text-slate-400">
                or continue with
              </span>
            </div>
          </div>

          {/* Social login */}
          <div className="relative">
            <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl transition-all duration-300 font-medium">
                Google
            </button>
          </div>

          {/* Sign up link */}
          <p className="text-center text-slate-400 text-sm mt-6">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-6">
          Secured by blockchain technology
        </p>
      </div>
    </div>
  );
}
