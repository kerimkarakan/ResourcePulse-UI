import React, { useState } from 'react';
import { suggestions } from '../../utils/mockData';
import { ZapIcon, DropletIcon, FlameIcon, TrashIcon } from 'lucide-react';
export const Suggestions = ({
  userType
}) => {
  const [filter, setFilter] = useState('all');
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
  const filteredSuggestions = filter === 'all' ? suggestions[userType] : suggestions[userType].filter(item => item.category === filter);
  return <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          AI-Powered Suggestions
        </h1>
        <p className="text-gray-600">
          Personalized recommendations to optimize your resource usage
        </p>
      </div>
      <div className="mb-6">
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
          <button onClick={() => setFilter('gas')} className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'gas' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Gas
          </button>
          <button onClick={() => setFilter('waste')} className={`px-4 py-2 rounded-full text-sm font-medium ${filter === 'waste' ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Waste
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSuggestions.map(suggestion => <div key={suggestion.id} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center">
              <div className={`w-10 h-10 rounded-full ${getResourceColor(suggestion.category)} flex items-center justify-center mr-3`}>
                {getResourceIcon(suggestion.category)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {suggestion.title}
                </h3>
                <p className="text-sm text-gray-500 capitalize">
                  {suggestion.category}
                </p>
              </div>
            </div>
            <div className="p-4 flex-grow">
              <p className="text-gray-600 mb-4">{suggestion.description}</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-xs text-green-700 font-medium">
                    RESOURCE SAVINGS
                  </p>
                  <p className="text-lg font-bold text-green-800">
                    {suggestion.savings}
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-xs text-green-700 font-medium">
                    COST SAVINGS
                  </p>
                  <p className="text-lg font-bold text-green-800">
                    {suggestion.costSavings}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <button className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md">
                Implement Suggestion
              </button>
            </div>
          </div>)}
      </div>
      {filteredSuggestions.length === 0 && <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-500 text-lg">
            No suggestions available for this category.
          </p>
        </div>}
    </div>;
};