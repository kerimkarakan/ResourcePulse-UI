import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './components/sections/Dashboard';
import { Suggestions } from './components/sections/Suggestions';
import { Reports } from './components/sections/Reports';
import { Forecasts } from './components/sections/Forecasts';
import { Benchmarks } from './components/sections/Benchmarks';
import { Goals } from './components/sections/Goals';
import { FloorPlan } from './components/sections/FloorPlan';
import { Devices } from './components/sections/Devices';
import { Notifications } from './components/sections/Notifications';
import { Settings } from './components/sections/Settings';
import { Login } from './components/pages/Login';
export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('household'); // 'household' or 'workplace'
  const [activeSection, setActiveSection] = useState('dashboard');
  const handleLogin = type => {
    setUserType(type);
    setIsLoggedIn(true);
  };
  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard userType={userType} />;
      case 'suggestions':
        return <Suggestions userType={userType} />;
      case 'reports':
        return <Reports userType={userType} />;
      case 'forecasts':
        return <Forecasts userType={userType} />;
      case 'benchmarks':
        return <Benchmarks userType={userType} />;
      case 'goals':
        return <Goals userType={userType} />;
      case 'floorplan':
        return <FloorPlan userType={userType} />;
      case 'devices':
        return <Devices userType={userType} />;
      case 'notifications':
        return <Notifications userType={userType} />;
      case 'settings':
        return <Settings userType={userType} />;
      default:
        return <Dashboard userType={userType} />;
    }
  };
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }
  return <div className="flex h-screen bg-white">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header userType={userType} />
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          {renderSection()}
        </main>
      </div>
    </div>;
}