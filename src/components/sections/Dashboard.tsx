import React, { useState } from 'react';
import { electricityData, waterData, gasData, wasteData } from '../../utils/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { ZapIcon, DropletIcon, FlameIcon, TrashIcon } from 'lucide-react';
export const Dashboard = ({
  userType
}) => {
  const [timeframe, setTimeframe] = useState('daily');
  const COLORS = ['#2E7D32', '#4CAF50', '#81C784', '#A5D6A7', '#C8E6C9'];
  const getResourceData = (resource, type, period) => {
    const data = {
      electricity: electricityData,
      water: waterData,
      gas: gasData,
      waste: wasteData
    };
    return data[resource][type][period];
  };
  const getResourceUnit = resource => {
    const units = {
      electricity: 'kWh',
      water: 'L',
      gas: 'therms',
      waste: 'kg'
    };
    return units[resource];
  };
  const getResourceIcon = resource => {
    const icons = {
      electricity: ZapIcon,
      water: DropletIcon,
      gas: FlameIcon,
      waste: TrashIcon
    };
    return icons[resource];
  };
  const getResourceBreakdown = resource => {
    const data = {
      electricity: electricityData,
      water: waterData,
      gas: gasData,
      waste: wasteData
    };
    return data[resource][userType].breakdown;
  };
  const resources = ['electricity', 'water', 'gas', 'waste'];
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">
          Monitor your resource consumption in real time
        </p>
      </div>
      <div className="mb-6 flex justify-end">
        <div className="inline-flex rounded-md shadow-sm">
          <button type="button" onClick={() => setTimeframe('daily')} className={`px-4 py-2 text-sm font-medium rounded-l-md ${timeframe === 'daily' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} border border-gray-300`}>
            Day
          </button>
          <button type="button" onClick={() => setTimeframe('weekly')} className={`px-4 py-2 text-sm font-medium ${timeframe === 'weekly' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} border-t border-b border-r border-gray-300`}>
            Week
          </button>
          <button type="button" onClick={() => setTimeframe('monthly')} className={`px-4 py-2 text-sm font-medium rounded-r-md ${timeframe === 'monthly' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} border-t border-b border-r border-gray-300`}>
            Month
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map(resource => {
        const ResourceIcon = getResourceIcon(resource);
        const unit = getResourceUnit(resource);
        const value = getResourceData(resource, userType, timeframe);
        const breakdown = getResourceBreakdown(resource);
        return <div key={resource} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200 bg-green-50 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center mr-3">
                    <ResourceIcon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 capitalize">
                      {resource}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {timeframe} consumption
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">
                    {value} {unit}
                  </div>
                </div>
              </div>
              <div className="p-4 grid grid-cols-1 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-2">
                    Usage by {userType === 'household' ? 'Room' : 'Area'}
                  </h4>
                  <div className="mb-4">
                    <ResponsiveContainer width="100%" height={220}>
                      <PieChart>
                        <Pie data={breakdown} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                          {breakdown.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                        </Pie>
                        <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-2">
                    Daily Trend
                  </h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={resource === 'electricity' ? electricityData[userType].history : resource === 'water' ? waterData[userType].history : resource === 'gas' ? gasData[userType].history : wasteData[userType].history} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tickFormatter={date => new Date(date).toLocaleDateString()} />
                        <YAxis />
                        <Tooltip formatter={value => [`${value} ${unit}`, 'Consumption']} labelFormatter={date => new Date(date).toLocaleDateString()} />
                        <Bar dataKey="value" fill="#2E7D32" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>;
      })}
      </div>
    </div>;
};