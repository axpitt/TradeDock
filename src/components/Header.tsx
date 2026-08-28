import React from 'react';

export interface HeaderProps {
  title: string;
  subtitle?: string;
  badge?: string | number;
  actions?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  badge,
  actions,
}) => {
  return (
    <header className="global-header" aria-label="Page Header">
      <div className="header-left">
        <h1 className="header-title">{title}</h1>
        {subtitle && (
          <>
            <span className="header-separator" aria-hidden="true">
              —
            </span>
            <span className="header-subtitle">{subtitle}</span>
          </>
        )}
        {badge !== undefined && (
          <span className="header-badge" aria-label={`Count: ${badge}`}>
            {badge}
          </span>
        )}
      </div>

      {actions && <div className="header-right">{actions}</div>}
    </header>
  );
};

export default Header;
