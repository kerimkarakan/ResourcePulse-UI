import React, { useState } from 'react';
export const Login = ({
  onLogin
}) => {
  const [userType, setUserType] = useState('household');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onLogin(userType);
  };
  return <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-100 to-white">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="flex items-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" fill="#2E7D32" />
              <path d="M12 6L8 8V16L12 18L16 16V8L12 6Z" fill="#A5D6A7" />
            </svg>
            <h1 className="text-3xl font-bold text-green-800">ResourcePulse</h1>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-6">
          Welcome to your resource management platform
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input id="email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input id="password" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userType">
              User Type
            </label>
            <select id="userType" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" value={userType} onChange={e => setUserType(e.target.value)}>
              <option value="household">Household</option>
              <option value="workplace">Workplace</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Log In
          </button>
        </form>
        <div className="mt-6 text-center text-sm">
          <a href="#" className="text-green-700 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>;
};