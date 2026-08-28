import React from 'react';
import {
  Radio,
  Layers,
  Bell,
  Activity,
  BarChart3,
  Settings,
  Plus,
  LucideIcon,
} from 'lucide-react';

export type NavigationRoute =
  | 'radar'
  | 'all-trades'
  | 'alerts'
  | 'activity'
  | 'analytics'
  | 'settings';

interface NavItemConfig {
  id: NavigationRoute;
  label: string;
  icon: LucideIcon;
  badge?: string;
}

const NAV_ITEMS: NavItemConfig[] = [
  { id: 'radar', label: 'Radar', icon: Radio },
  { id: 'all-trades', label: 'All Trades', icon: Layers },
  { id: 'alerts', label: 'Alerts', icon: Bell },
  { id: 'activity', label: 'Activity', icon: Activity },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

interface SidebarProps {
  currentRoute: NavigationRoute;
  onRouteChange: (route: NavigationRoute) => void;
  onAddTradeClick?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentRoute,
  onRouteChange,
  onAddTradeClick,
}) => {
  return (
    <aside className="sidebar" aria-label="Main Navigation">
      {/* Brand Header */}
      <div className="sidebar-header">
        <div className="brand-wrapper">
          <div className="brand-icon" aria-hidden="true">
            TD
          </div>
          <div className="brand-text">
            <span className="brand-title">Trade Dock</span>
            <span className="brand-subtitle">NSE Workspace</span>
          </div>
        </div>
      </div>

      {/* Global Fixed Action */}
      <div className="sidebar-action-area">
        <button
          type="button"
          className="btn-add-trade"
          onClick={onAddTradeClick}
          aria-label="Add Trade"
          title="Add Trade"
        >
          <Plus size={16} strokeWidth={2.5} aria-hidden="true" />
          <span>Add Trade</span>
        </button>
      </div>

      {/* Primary Navigation List (Exact 6 items) */}
      <nav className="sidebar-nav">
        <div className="nav-section-label">Navigation</div>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentRoute === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => onRouteChange(item.id)}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="nav-icon">
                <Icon size={18} strokeWidth={isActive ? 2.2 : 1.8} aria-hidden="true" />
              </span>
              <span className="nav-label">{item.label}</span>
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </button>
          );
        })}
      </nav>

      {/* Workspace Collaborator Footer */}
      <div className="sidebar-footer">
        <div className="workspace-badge">
          <div className="status-dot" title="Workspace Connected" />
          <span className="workspace-name">Shared Workspace</span>
        </div>
        <span className="workspace-users" title="2 Active Traders">
          2/2
        </span>
      </div>
    </aside>
  );
};
