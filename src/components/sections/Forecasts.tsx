import React, { useState } from 'react';
import { forecasts } from '../../utils/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { ZapIcon, DropletIcon, FlameIcon, TrashIcon } from 'lucide-react';
export const Forecasts = ({
  userType
}) => {
  const [resource, setResource] = useState('electricity');
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
  const getResourceData = () => {
    // Currently only electricity forecasts are implemented in mock data
    return forecasts[userType].electricity;
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
  const data = getResourceData();
  const today = new Date().toISOString().split('T')[0];
  const unit = getResourceUnit(resource);
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          AI-Powered Forecasts
        </h1>
        <p className="text-gray-600">Predict future resource usage and costs</p>
      </div>
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setResource('electricity')} className={`px-4 py-2 rounded-full text-sm font-medium ${resource === 'electricity' ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Electricity
          </button>
          <button onClick={() => setResource('water')} className={`px-4 py-2 rounded-full text-sm font-medium ${resource === 'water' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} opacity-50 cursor-not-allowed`} disabled>
            Water (Coming Soon)
          </button>
          <button onClick={() => setResource('gas')} className={`px-4 py-2 rounded-full text-sm font-medium ${resource === 'gas' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} opacity-50 cursor-not-allowed`} disabled>
            Gas (Coming Soon)
          </button>
          <button onClick={() => setResource('waste')} className={`px-4 py-2 rounded-full text-sm font-medium ${resource === 'waste' ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} opacity-50 cursor-not-allowed`} disabled>
            Waste (Coming Soon)
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              {resource.charAt(0).toUpperCase() + resource.slice(1)} Forecast
            </h3>
            <p className="text-sm text-gray-600">
              Past and predicted consumption
            </p>
          </div>
          <div className="p-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10
              }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tickFormatter={date => {
                  const d = new Date(date);
                  return `${d.getMonth() + 1}/${d.getDate()}`;
                }} />
                  <YAxis />
                  <Tooltip formatter={value => [`${value} ${unit}`, 'Consumption']} labelFormatter={date => new Date(date).toLocaleDateString()} />
                  <ReferenceLine x={today} stroke="#ff0000" label="Today" />
                  <Line type="monotone" dataKey="value" stroke="#2E7D32" strokeWidth={2} dot={{
                  fill: '#2E7D32',
                  r: 4
                }} activeDot={{
                  r: 6
                }} name="Actual" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex mt-4 items-center justify-center space-x-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-700 rounded mr-2"></div>
                <span className="text-sm text-gray-600">Actual</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-300 rounded mr-2"></div>
                <span className="text-sm text-gray-600">Forecast</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              Cost Prediction
            </h3>
            <p className="text-sm text-gray-600">
              Estimated costs for next week
            </p>
          </div>
          <div className="p-4">
            <div className="bg-green-50 rounded-lg p-6 text-center mb-4">
              <p className="text-sm text-green-700 mb-1">PREDICTED COST</p>
              <p className="text-3xl font-bold text-green-800">
                ${forecasts[userType].predictedCost}
              </p>
              <p className="text-sm text-green-700">Next 7 days</p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-2">
                  Cost Breakdown
                </h4>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Base rate</span>
                    <span className="text-sm font-medium text-gray-800">
                      ${(forecasts[userType].predictedCost * 0.8).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Taxes & fees</span>
                    <span className="text-sm font-medium text-gray-800">
                      ${(forecasts[userType].predictedCost * 0.2).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-2">
                  Potential Savings
                </h4>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-green-700">
                      With suggestions
                    </span>
                    <span className="text-sm font-medium text-green-800">
                      -${(forecasts[userType].predictedCost * 0.15).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};