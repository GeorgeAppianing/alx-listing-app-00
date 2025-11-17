import React from "react";

export default function Header() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">ALX Homes</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search properties..."
          className="w-1/2 px-4 py-2 border rounded-lg"
        />

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <button className="px-4 py-2 border rounded-lg">Sign In</button>
          <button className="px-4 py-2 bg-black text-white rounded-lg">
            Sign Up
          </button>
        </div>

      </div>

      {/* Accommodation Types */}
      <div className="max-w-7xl mx-auto flex gap-6 p-4 text-sm text-gray-600">
        <span>Rooms</span>
        <span>Mansions</span>
        <span>Countryside</span>
        <span>Beachfront</span>
        <span>Mountain</span>
      </div>
    </header>
  );
}
