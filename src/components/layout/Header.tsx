import React, { useState } from 'react';
import { BellIcon, UserIcon, ChevronDownIcon } from 'lucide-react';
export const Header = ({
  userType
}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return <header className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-green-800 flex items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" fill="#2E7D32" />
            <path d="M12 6L8 8V16L12 18L16 16V8L12 6Z" fill="#A5D6A7" />
          </svg>
          ResourcePulse
        </div>
        <span className="ml-3 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm capitalize">
          {userType}
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <BellIcon size={20} className="text-gray-600" />
        </button>
        <div className="relative">
          <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100" onClick={() => setIsProfileOpen(!isProfileOpen)}>
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center">
              <UserIcon size={16} className="text-white" />
            </div>
            <span className="text-gray-700">John Doe</span>
            <ChevronDownIcon size={16} className="text-gray-500" />
          </button>
          {isProfileOpen && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Logout
              </a>
            </div>}
        </div>
      </div>
    </header>;
};