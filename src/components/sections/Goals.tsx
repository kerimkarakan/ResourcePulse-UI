import React from 'react';
import { goals } from '../../utils/mockData';
import { ZapIcon, DropletIcon, FlameIcon, TrashIcon } from 'lucide-react';
export const Goals = ({
  userType
}) => {
  const getResourceIcon = category => {
    const icons = {
      electricity: ZapIcon,
      water: DropletIcon,
      gas: FlameIcon,
      waste: TrashIcon
    };
    const Icon = icons[category] || ZapIcon;
    return <Icon size={20} className="text-white" />;
  };
  const getResourceColor = category => {
    const colors = {
      electricity: 'bg-yellow-600',
      water: 'bg-blue-600',
      gas: 'bg-red-600',
      waste: 'bg-gray-600'
    };
    return colors[category] || 'bg-green-700';
  };
  const calculateDaysRemaining = endDate => {
    // For demonstration purposes, pretend the current date is May 1, 2023
    // This will make the dates in the mock data (from 2023) work properly
    const simulatedToday = new Date('2023-05-01');  
    const end = new Date(endDate);
    
    // Reset hours to compare just the dates
    end.setHours(0, 0, 0, 0);
    simulatedToday.setHours(0, 0, 0, 0);
    
    const diffTime = end - simulatedToday;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Return at least 0 days if date is in the past
    return Math.max(0, diffDays);
  };
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Resource Goals</h1>
        <p className="text-gray-600">Track your resource reduction targets</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals[userType].map(goal => {
        const progress = goal.current / goal.target * 100;
        const daysRemaining = calculateDaysRemaining(goal.endDate);
        return <div key={goal.id} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex items-center">
                <div className={`w-10 h-10 rounded-full ${getResourceColor(goal.category)} flex items-center justify-center mr-3`}>
                  {getResourceIcon(goal.category)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-gray-500 capitalize">
                    {goal.category}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      Progress
                    </span>
                    <span className="text-sm font-medium text-gray-800">
                      {progress.toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{
                  width: `${progress}%`
                }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">CURRENT</p>
                    <p className="text-lg font-bold text-gray-800">
                      {goal.current}
                      {goal.unit}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">TARGET</p>
                    <p className="text-lg font-bold text-gray-800">
                      {goal.target}
                      {goal.unit}
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-green-700">
                      Time Remaining
                    </span>
                    <span className="text-sm font-medium text-green-800">
                      {daysRemaining} days
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200">
                <button className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md">
                  View Details
                </button>
              </div>
            </div>;
      })}
        <div className="bg-gray-50 rounded-lg border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Create New Goal
          </h3>
          <p className="text-sm text-gray-500 text-center">
            Set up a new resource reduction target
          </p>
        </div>
      </div>
    </div>;
};