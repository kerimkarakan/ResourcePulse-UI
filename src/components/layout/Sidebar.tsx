import React from 'react';
import { HomeIcon, LightbulbIcon, FileTextIcon, TrendingUpIcon, BarChartIcon, TargetIcon, LayoutIcon, BellIcon, SettingsIcon, BoxIcon } from 'lucide-react';
export const Sidebar = ({
  activeSection,
  setActiveSection
}) => {
  const menuItems = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: HomeIcon
  }, {
    id: 'suggestions',
    label: 'Suggestions',
    icon: LightbulbIcon
  }, {
    id: 'reports',
    label: 'Reports',
    icon: FileTextIcon
  }, {
    id: 'forecasts',
    label: 'Forecasts',
    icon: TrendingUpIcon
  }, {
    id: 'benchmarks',
    label: 'Benchmarks',
    icon: BarChartIcon
  }, {
    id: 'goals',
    label: 'Goals',
    icon: TargetIcon
  }, {
    id: 'floorplan',
    label: 'Floor Plan',
    icon: LayoutIcon
  }, {
    id: 'devices',
    label: 'Devices',
    icon: BoxIcon
  }, {
    id: 'notifications',
    label: 'Notifications',
    icon: BellIcon
  }, {
    id: 'settings',
    label: 'Settings',
    icon: SettingsIcon
  }];
  return <aside className="w-64 bg-green-800 text-white flex-shrink-0">
      <div className="p-4 flex items-center justify-center border-b border-green-700">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" fill="#FFFFFF" />
          <path d="M12 6L8 8V16L12 18L16 16V8L12 6Z" fill="#A5D6A7" />
        </svg>
        <h1 className="text-xl font-bold">ResourcePulse</h1>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map(item => <li key={item.id}>
              <button onClick={() => setActiveSection(item.id)} className={`flex items-center w-full px-6 py-3 text-left ${activeSection === item.id ? 'bg-green-900 border-l-4 border-green-300' : 'hover:bg-green-700'}`}>
                <item.icon size={18} className="mr-3" />
                <span>{item.label}</span>
              </button>
            </li>)}
        </ul>
      </nav>
    </aside>;
};