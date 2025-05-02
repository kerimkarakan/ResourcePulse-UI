import React, { useState } from 'react';
import { notifications } from '../../utils/mockData';
import { ZapIcon, DropletIcon, FlameIcon, TrashIcon, BellIcon, TargetIcon, LightbulbIcon, FileTextIcon, WrenchIcon } from 'lucide-react';
export const Notifications = ({
  userType
}) => {
  const [filter, setFilter] = useState('all');
  const getNotificationIcon = category => {
    const icons = {
      electricity: ZapIcon,
      water: DropletIcon,
      gas: FlameIcon,
      waste: TrashIcon,
      goal: TargetIcon,
      suggestion: LightbulbIcon,
      report: FileTextIcon,
      maintenance: WrenchIcon
    };
    const Icon = icons[category] || BellIcon;
    return <Icon size={20} className="text-white" />;
  };
  const getNotificationColor = category => {
    const colors = {
      electricity: 'bg-yellow-600',
      water: 'bg-blue-600',
      gas: 'bg-red-600',
      waste: 'bg-gray-600',
      goal: 'bg-purple-600',
      suggestion: 'bg-indigo-600',
      report: 'bg-cyan-600',
      maintenance: 'bg-orange-600'
    };
    return colors[category] || 'bg-green-700';
  };
  const formatDate = timestamp => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };
  const filteredNotifications = filter === 'all' ? notifications[userType] : notifications[userType].filter(notification => notification.category === filter);
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
        <p className="text-gray-600">
          Stay updated with alerts and important information
        </p>
      </div>
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'all' ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              All
            </button>
            <button onClick={() => setFilter('electricity')} className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'electricity' ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Electricity
            </button>
            <button onClick={() => setFilter('water')} className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'water' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Water
            </button>
            <button onClick={() => setFilter('maintenance')} className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'maintenance' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Maintenance
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredNotifications.map(notification => <div key={notification.id} className={`p-4 flex items-start ${notification.read ? 'bg-white' : 'bg-green-50'}`}>
              <div className={`w-10 h-10 rounded-full ${getNotificationColor(notification.category)} flex items-center justify-center mr-3 flex-shrink-0`}>
                {getNotificationIcon(notification.category)}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {notification.title}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {formatDate(notification.timestamp)}
                  </span>
                </div>
                <p className="text-gray-600 mt-1">{notification.message}</p>
              </div>
            </div>)}
        </div>
      </div>
      {filteredNotifications.length === 0 && <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-lg">
            No notifications found for this category.
          </p>
        </div>}
    </div>;
};