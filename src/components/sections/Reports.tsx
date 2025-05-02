import React, { useState } from 'react';
export const Reports = ({
  userType
}) => {
  const [selectedFramework, setSelectedFramework] = useState('GRI');
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const frameworks = [{
    id: 'GRI',
    name: 'Global Reporting Initiative (GRI)'
  }, {
    id: 'SASB',
    name: 'Sustainability Accounting Standards Board (SASB)'
  }, {
    id: 'CDP',
    name: 'Carbon Disclosure Project (CDP)'
  }];
  const periods = [{
    id: 'weekly',
    name: 'Weekly'
  }, {
    id: 'monthly',
    name: 'Monthly'
  }, {
    id: 'quarterly',
    name: 'Quarterly'
  }, {
    id: 'yearly',
    name: 'Yearly'
  }];
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Sustainability Reports
        </h1>
        <p className="text-gray-600">
          Generate customized reports compliant with major frameworks
        </p>
      </div>
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reporting Framework
              </label>
              <select value={selectedFramework} onChange={e => setSelectedFramework(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                {frameworks.map(framework => <option key={framework.id} value={framework.id}>
                    {framework.name}
                  </option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reporting Period
              </label>
              <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                {periods.map(period => <option key={period.id} value={period.id}>
                    {period.name}
                  </option>)}
              </select>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Report Preview
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">
                    Total Energy Consumption
                  </p>
                  <p className="text-2xl font-bold text-gray-800">840 kWh</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Carbon Footprint</p>
                  <p className="text-2xl font-bold text-gray-800">
                    420 kg CO₂e
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Water Usage</p>
                  <p className="text-2xl font-bold text-gray-800">14,000 L</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Waste Generated</p>
                  <p className="text-2xl font-bold text-gray-800">140 kg</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input type="checkbox" id="includeCharts" className="mr-2" />
                <label htmlFor="includeCharts" className="text-sm text-gray-600">
                  Include charts
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="includeRecommendations" className="mr-2" />
                <label htmlFor="includeRecommendations" className="text-sm text-gray-600">
                  Include recommendations
                </label>
              </div>
            </div>
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md">
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>;
};