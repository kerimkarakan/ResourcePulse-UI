import React, { useState } from 'react';
import { devices } from '../../utils/mockData';
import { ZapIcon, DropletIcon, FlameIcon, TrashIcon, PlusIcon } from 'lucide-react';
export const Devices = ({
  userType
}) => {
  const [filter, setFilter] = useState('all');
  const getResourceIcon = type => {
    const icons = {
      electricity: ZapIcon,
      water: DropletIcon,
      gas: FlameIcon,
      waste: TrashIcon
    };
    const Icon = icons[type] || ZapIcon;
    return <Icon size={20} className="text-white" />;
  };
  const getResourceColor = type => {
    const colors = {
      electricity: 'bg-yellow-600',
      water: 'bg-blue-600',
      gas: 'bg-red-600',
      waste: 'bg-gray-600'
    };
    return colors[type] || 'bg-green-700';
  };
  const filteredDevices = filter === 'all' ? devices[userType] : devices[userType].filter(device => device.type === filter);
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Connected Devices</h1>
        <p className="text-gray-600">Monitor and manage your IoT devices</p>
      </div>
      <div className="mb-6 flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'all' ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            All Devices
          </button>
          <button onClick={() => setFilter('electricity')} className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'electricity' ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Electricity
          </button>
          <button onClick={() => setFilter('water')} className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'water' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Water
          </button>
          <button onClick={() => setFilter('gas')} className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'gas' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Gas
          </button>
        </div>
        <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md flex items-center">
          <PlusIcon size={16} className="mr-2" />
          Add Device
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDevices.map(device => <div key={device.id} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center">
              <div className={`w-10 h-10 rounded-full ${getResourceColor(device.type)} flex items-center justify-center mr-3`}>
                {getResourceIcon(device.type)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {device.name}
                </h3>
                <p className="text-sm text-gray-500">{device.location}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">STATUS</p>
                  <p className="flex items-center">
                    <span className={`w-2 h-2 rounded-full ${device.status === 'Online' ? 'bg-green-500' : 'bg-red-500'} mr-2`}></span>
                    <span className={`text-sm font-medium ${device.status === 'Online' ? 'text-green-700' : 'text-red-700'}`}>
                      {device.status}
                    </span>
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">CONSUMPTION</p>
                  <p className="text-sm font-medium text-gray-800">
                    {device.consumption}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <button className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md">
                Device Details
              </button>
            </div>
          </div>)}
      </div>
      {filteredDevices.length === 0 && <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-lg">
            No devices found for this category.
          </p>
        </div>}
    </div>;
};