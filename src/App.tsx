import React, { useState } from 'react';
import { Sidebar, NavigationRoute } from './components/Sidebar';
import { Header } from './components/Header';
import { RadarPage } from './pages/RadarPage';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<NavigationRoute>('radar');

  const getRouteConfig = (
    route: NavigationRoute
  ): { title: string; subtitle?: string } => {
    switch (route) {
      case 'radar':
        return { title: 'Radar', subtitle: 'Active Monitoring' };
      case 'all-trades':
        return { title: 'All Trades', subtitle: 'Trade Library' };
      case 'alerts':
        return { title: 'Alerts', subtitle: 'Provider Health & Triggers' };
      case 'activity':
        return { title: 'Activity', subtitle: 'Workspace Timeline' };
      case 'analytics':
        return { title: 'Analytics', subtitle: 'Foundation' };
      case 'settings':
        return { title: 'Settings', subtitle: 'Preferences & Integrations' };
      default:
        return { title: 'Trade Dock' };
    }
  };

  const routeConfig = getRouteConfig(currentRoute);

  return (
    <div className="app-layout">
      {/* Step 01: Left Sidebar Shell (LOCKED) */}
      <Sidebar
        currentRoute={currentRoute}
        onRouteChange={setCurrentRoute}
        onAddTradeClick={() => {
          // Modal will be implemented in future step
        }}
      />

      {/* Main Content Area */}
      <main className="main-content" id="main-content">
        {/* Step 02: Global Page Header (LOCKED) */}
        <Header
          title={routeConfig.title}
          subtitle={routeConfig.subtitle}
        />

        {/* Step 03: Radar Page Structure */}
        {currentRoute === 'radar' ? (
          <RadarPage />
        ) : (
          <section className="shell-preview-body">
            <div className="shell-placeholder-card">
              <p>
                <strong>{routeConfig.title}</strong> — Structural section will be built in its respective step.
              </p>
              <p style={{ marginTop: '8px' }}>
                Current Route: <code>{currentRoute}</code>
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
