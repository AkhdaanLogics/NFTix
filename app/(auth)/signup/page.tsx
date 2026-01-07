"use client";
import React, { useState } from "react";
import { Wallet, Mail, Lock, Eye, EyeOff, User, Check } from "lucide-react";
import Link from "next/link";

export default function NFTixSignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signupMethod, setSignupMethod] = useState("email"); // 'email' or 'wallet'
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  interface FormData {
    fullName: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  interface ChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleInputChange = (e: ChangeEvent): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = () => {
    console.log("Sign up attempted with:", formData);
    // Handle sign up logic here
  };

  const handleWalletConnect = () => {
    console.log("Connecting wallet for signup...");
    // Handle wallet connection logic here
  };

  const passwordStrength = (password: string): number => {
    if (password.length === 0) return 0;
    if (password.length < 6) return 1;
    if (password.length < 10) return 2;
    return 3;
  };

  const getStrengthColor = (strength: number): string => {
    if (strength === 1) return "bg-red-500";
    if (strength === 2) return "bg-yellow-500";
    if (strength === 3) return "bg-green-500";
    return "bg-slate-700";
  };

  const getStrengthText = (strength: number): string => {
    if (strength === 1) return "Weak";
    if (strength === 2) return "Medium";
    if (strength === 3) return "Strong";
    return "";
  };

  const strength = passwordStrength(formData.password);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
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
          <h1 className="text-4xl font-bold text-white mb-2">Join NFTix</h1>
          <p className="text-slate-400">
            Create your account and start collecting tickets
          </p>
        </div>

        {/* Sign up card */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-slate-700/50">
          {/* Tab selector */}
          <div className="flex gap-2 mb-6 bg-slate-900/50 p-1 rounded-xl">
            <button
              onClick={() => setSignupMethod("email")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                signupMethod === "email"
                  ? "bg-linear-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Mail className="w-4 h-4 inline mr-2" />
              Email
            </button>
            <button
              onClick={() => setSignupMethod("wallet")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                signupMethod === "wallet"
                  ? "bg-linear-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Wallet className="w-4 h-4 inline mr-2" />
              Wallet
            </button>
          </div>

          {signupMethod === "email" ? (
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 px-10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Username
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                    @
                  </span>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 px-10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="johndoe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 px-10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 px-10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Create a strong password"
                  />
                  <button
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
                {/* Password strength indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`h-1 flex-1 rounded-full transition-all ${
                            strength >= level
                              ? getStrengthColor(strength)
                              : "bg-slate-700"
                          }`}
                        />
                      ))}
                    </div>
                    {strength > 0 && (
                      <p className="text-xs text-slate-400">
                        Password strength:{" "}
                        <span
                          className={
                            strength === 3
                              ? "text-green-400"
                              : strength === 2
                              ? "text-yellow-400"
                              : "text-red-400"
                          }
                        >
                          {getStrengthText(strength)}
                        </span>
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 px-10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Confirm your password"
                  />
                  <button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {formData.confirmPassword &&
                  formData.password !== formData.confirmPassword && (
                    <p className="text-xs text-red-400 mt-1">
                      Passwords do not match
                    </p>
                  )}
              </div>

              {/* Terms and conditions */}
              <div className="flex items-start gap-3 pt-2">
                <button
                  onClick={() => setAcceptTerms(!acceptTerms)}
                  className={`shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    acceptTerms
                      ? "bg-purple-500 border-purple-500"
                      : "bg-slate-900/50 border-slate-600 hover:border-slate-500"
                  }`}
                >
                  {acceptTerms && <Check className="w-3 h-3 text-white" />}
                </button>
                <label
                  className="text-sm text-slate-300 cursor-pointer"
                  onClick={() => setAcceptTerms(!acceptTerms)}
                >
                  I agree to the{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Sign up button */}
              <button
                onClick={handleSignUp}
                disabled={!acceptTerms}
                className={`w-full font-semibold py-3 rounded-xl transition-all duration-300 transform ${
                  acceptTerms
                    ? "bg-linear-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5"
                    : "bg-slate-700 text-slate-500 cursor-not-allowed"
                }`}
              >
                Create Account
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-slate-300 text-center mb-6">
                Connect your Web3 wallet to create an account
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

              {/* Terms for wallet signup */}
              <div className="flex items-start gap-3 pt-4">
                <button
                  onClick={() => setAcceptTerms(!acceptTerms)}
                  className={`shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    acceptTerms
                      ? "bg-purple-500 border-purple-500"
                      : "bg-slate-900/50 border-slate-600 hover:border-slate-500"
                  }`}
                >
                  {acceptTerms && <Check className="w-3 h-3 text-white" />}
                </button>
                <label
                  className="text-sm text-slate-300 cursor-pointer"
                  onClick={() => setAcceptTerms(!acceptTerms)}
                >
                  By connecting, I agree to the{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-slate-800/50 text-slate-400">
                or sign up with
              </span>
            </div>
          </div>

          {/* Social sign up */}
          <div className="relative">
            <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl transition-all duration-300 font-medium">
              Google
            </button>
          </div>

          {/* Sign in link */}
          <p className="text-center text-slate-400 text-sm mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-slate-500 text-sm mt-6 space-y-1">
          <p>Secured by blockchain technology</p>
          <p>🔒 Your data is encrypted and protected</p>
        </div>
      </div>
    </div>
  );
}
