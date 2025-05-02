import React, { useState } from 'react';
import { floorPlan } from '../../utils/mockData';
import { ZapIcon, DropletIcon, FlameIcon, TrashIcon } from 'lucide-react';
export const FloorPlan = ({
  userType
}) => {
  const [selectedResource, setSelectedResource] = useState('electricity');
  const getResourceIcon = resourceType => {
    const icons = {
      electricity: ZapIcon,
      water: DropletIcon,
      gas: FlameIcon,
      waste: TrashIcon
    };
    const Icon = icons[resourceType] || ZapIcon;
    return <Icon size={20} className="text-white" />;
  };
  const getResourceColor = resourceType => {
    const colors = {
      electricity: 'bg-yellow-600',
      water: 'bg-blue-600',
      gas: 'bg-red-600',
      waste: 'bg-gray-600'
    };
    return colors[resourceType] || 'bg-green-700';
  };
  const getIntensityColor = value => {
    if (value >= 50) return 'fill-red-500';
    if (value >= 30) return 'fill-orange-500';
    if (value >= 20) return 'fill-yellow-500';
    return 'fill-green-500';
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Floor Plan</h1>
        <p className="text-gray-600">Visualize resource consumption by area</p>
      </div>
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            {['electricity', 'water', 'gas', 'waste'].map(resource => <button key={resource} onClick={() => setSelectedResource(resource)} className={`px-4 py-2 rounded-full text-sm font-medium ${selectedResource === resource ? `${getResourceColor(resource)} text-white` : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {resource.charAt(0).toUpperCase() + resource.slice(1)}
              </button>)}
          </div>
        </div>
        <div className="p-6">
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <svg viewBox="0 0 500 400" className="w-full h-auto">
              {floorPlan[userType].layout.map(room => <g key={room.id}>
                  <rect x={room.x} y={room.y} width={room.width} height={room.height} className={`${getIntensityColor(room.consumption[selectedResource])} stroke-gray-400`} strokeWidth="2" opacity="0.7" />
                  <text x={room.x + room.width / 2} y={room.y + room.height / 2} textAnchor="middle" className="fill-gray-700 text-sm font-medium">
                    {room.name}
                  </text>
                  <text x={room.x + room.width / 2} y={room.y + room.height / 2 + 20} textAnchor="middle" className="fill-gray-600 text-xs">
                    {room.consumption[selectedResource]}%
                  </text>
                </g>)}
            </svg>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {floorPlan[userType].layout.map(room => <div key={room.id} className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  {room.name}
                </h3>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Consumption:</span>
                  <span className="font-medium text-gray-800">
                    {room.consumption[selectedResource]}%
                  </span>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-green-800 mb-2">
            Optimization Tips
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-red-500 mt-1 mr-2"></div>
              <p className="text-sm text-gray-600">
                High consumption areas (&gt;50%) require immediate attention
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-yellow-500 mt-1 mr-2"></div>
              <p className="text-sm text-gray-600">
                Moderate consumption areas (20-50%) should be monitored
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500 mt-1 mr-2"></div>
              <p className="text-sm text-gray-600">
                Efficient areas (&lt;20%) are performing well
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>;
};