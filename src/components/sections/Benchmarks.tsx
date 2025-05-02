import React, { useState } from 'react';
import { benchmarks } from '../../utils/mockData';
import { ZapIcon, DropletIcon, FlameIcon, TrashIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
export const Benchmarks = ({
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
  const getResourceUnit = resourceType => {
    const units = {
      electricity: 'kWh',
      water: 'L',
      gas: 'therms',
      waste: 'kg'
    };
    return units[resourceType];
  };
  const getComparisonData = resource => {
    const data = benchmarks[userType][resource];
    return [{
      name: 'Your Usage',
      value: data.user
    }, {
      name: 'Average',
      value: data.average
    }, {
      name: 'Efficient',
      value: data.efficient
    }];
  };
  const resources = ['electricity', 'water', 'gas', 'waste'];
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Benchmarks</h1>
        <p className="text-gray-600">
          Compare your resource usage with similar profiles
        </p>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {resources.map(resource => <button key={resource} onClick={() => setSelectedResource(resource)} className={`px-4 py-2 rounded-full text-sm font-medium ${selectedResource === resource ? `${getResourceColor(resource)} text-white` : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {resource.charAt(0).toUpperCase() + resource.slice(1)}
            </button>)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              Usage Comparison
            </h3>
            <p className="text-sm text-gray-600">
              Weekly consumption vs benchmarks
            </p>
          </div>
          <div className="p-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={getComparisonData(selectedResource)} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={value => [`${value} ${getResourceUnit(selectedResource)}`, 'Consumption']} />
                  <Bar dataKey="value" fill="#2E7D32" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">Analysis</h3>
            <p className="text-sm text-gray-600">Your performance metrics</p>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-green-700 mb-1">EFFICIENCY SCORE</p>
                <p className="text-3xl font-bold text-green-800">85/100</p>
                <p className="text-sm text-green-700">
                  Above average performance
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-2">
                  Comparison Metrics
                </h4>
                <div className="space-y-2">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">vs Average</span>
                      <span className="text-sm font-medium text-green-700">
                        -17%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{
                      width: '83%'
                    }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">
                        vs Efficient
                      </span>
                      <span className="text-sm font-medium text-yellow-600">
                        +25%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{
                      width: '100%'
                    }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};