import React, { useState } from 'react';
import {
  Bell,
  MessageSquare,
  User,
  Pin,
  MoreHorizontal,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react';

export interface RadarTradeData {
  id: string;
  rank?: number;
  symbol: string;
  tradeType: string; // e.g. 'Quarterly'
  executionTf: string; // e.g. 'Weekly'
  cmp: number;
  entryPrice: number;
  distancePercent: number;
  approachAlertPrice: number;
  status: 'ACTIVE' | 'ALERT_ISSUE' | 'APPROACH_TRIGGERED' | 'ENTRY_REACHED';
  ownerName: string;
  isPinned?: boolean;
  score: {
    freshness: number; // /3
    strength: number; // /2
    baseCandles: number; // /2
    total: number; // /7
  };
  comments: string[];
  moreCommentsCount: number;
  hasPhoto: boolean;
}

export const SAMPLE_RELIANCE_TRADE: RadarTradeData = {
  id: 'trade-1',
  rank: 1,
  symbol: 'RELIANCE',
  tradeType: 'Quarterly',
  executionTf: 'Weekly',
  cmp: 1397.0,
  entryPrice: 1420.0,
  distancePercent: 1.62,
  approachAlertPrice: 1491.0,
  status: 'ACTIVE',
  ownerName: 'Arpit',
  isPinned: false,
  score: {
    freshness: 3.0,
    strength: 2.0,
    baseCandles: 2.0,
    total: 7.0,
  },
  comments: ['Fresh level, watching...', 'Looks good, agree.'],
  moreCommentsCount: 3,
  hasPhoto: true,
};

interface RadarCardProps {
  trade?: RadarTradeData;
  onViewTrade?: (tradeId: string) => void;
  onTogglePin?: (tradeId: string) => void;
  onMoreActions?: (tradeId: string) => void;
}

export const RadarCard: React.FC<RadarCardProps> = ({
  trade = SAMPLE_RELIANCE_TRADE,
  onViewTrade,
  onTogglePin,
  onMoreActions,
}) => {
  const [isScoreExpanded, setIsScoreExpanded] = useState(false);
  const [isPinnedLocal, setIsPinnedLocal] = useState(trade.isPinned || false);

  const handlePinClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPinnedLocal(!isPinnedLocal);
    if (onTogglePin) onTogglePin(trade.id);
  };

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <article className="radar-card-vertical" aria-label={`Trade setup for ${trade.symbol}`}>
      {/* 1. Header: Symbol & Score */}
      <div className="card-v-header">
        <div className="card-v-symbol-wrap">
          {trade.rank !== undefined && <span className="card-v-rank-badge">{trade.rank}</span>}
          <span className="card-v-symbol">{trade.symbol}</span>
        </div>

        {/* Score Pill */}
        <div className="score-pill-wrapper">
          <button
            type="button"
            className={`card-v-score-pill ${isScoreExpanded ? 'expanded' : ''}`}
            onClick={() => setIsScoreExpanded(!isScoreExpanded)}
            aria-expanded={isScoreExpanded}
            aria-label={`Score ${trade.score.total} out of 7`}
            title="Click to view scoring breakdown"
          >
            <span className="score-star" aria-hidden="true">★</span>
            <span className="score-val">{trade.score.total}/7</span>
            {isScoreExpanded ? (
              <ChevronUp size={10} className="score-chev" aria-hidden="true" />
            ) : (
              <ChevronDown size={10} className="score-chev" aria-hidden="true" />
            )}
          </button>

          {/* Score Popover */}
          {isScoreExpanded && (
            <div className="score-breakdown-popover" role="dialog" aria-label="Score Breakdown">
              <div className="score-breakdown-header">Score Breakdown</div>
              <div className="score-breakdown-row">
                <span>Freshness:</span>
                <span className="font-mono">{trade.score.freshness} / 3</span>
              </div>
              <div className="score-breakdown-row">
                <span>Strength:</span>
                <span className="font-mono">{trade.score.strength} / 2</span>
              </div>
              <div className="score-breakdown-row">
                <span>Base Candles:</span>
                <span className="font-mono">{trade.score.baseCandles} / 2</span>
              </div>
              <div className="score-breakdown-total-row">
                <span>Total:</span>
                <span className="font-mono text-amber">{trade.score.total} / 7</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. Subheader: Trade Type • Execution Timeframe */}
      <div className="card-v-timeframe">
        {trade.tradeType} • {trade.executionTf}
      </div>

      {/* 3. Core Financial Metrics (Vertical Key-Value Rows) */}
      <div className="card-v-metrics-group">
        <div className="card-v-metric-row">
          <span className="metric-v-label">CMP</span>
          <span className="metric-v-value font-mono">{formatINR(trade.cmp)}</span>
        </div>
        <div className="card-v-metric-row">
          <span className="metric-v-label">ENTRY</span>
          <span className="metric-v-value font-mono text-entry">{formatINR(trade.entryPrice)}</span>
        </div>
        <div className="card-v-metric-row">
          <span className="metric-v-label">DISTANCE</span>
          <span className="metric-v-value font-mono text-distance">{trade.distancePercent.toFixed(2)}%</span>
        </div>
      </div>

      {/* 4. Alert & Status Lines */}
      <div className="card-v-alert-group">
        <div className="card-v-alert-row">
          <span className="alert-v-label">
            <Bell size={11} className="alert-bell-icon" aria-hidden="true" />
            <span>5% Alert</span>
          </span>
          <span className="alert-v-price font-mono text-approach">{formatINR(trade.approachAlertPrice)}</span>
        </div>
        <div className="card-v-status-row">
          <span className="status-v-dot" aria-hidden="true" />
          <span className="status-v-text">{trade.status}</span>
        </div>
      </div>

      {/* 5. Comments Area */}
      <div className="card-v-comments-group">
        {trade.comments.map((comment, index) => (
          <div key={index} className="card-v-comment-item">
            <MessageSquare size={10} className="comment-v-icon" aria-hidden="true" />
            <span className="comment-v-text">"{comment}"</span>
          </div>
        ))}
        {trade.moreCommentsCount > 0 && (
          <div className="card-v-more-comments">
            + {trade.moreCommentsCount} more comments
          </div>
        )}
      </div>

      {/* 6. Photo Preview Area (Blurred Box with VIEW TRADE Button) */}
      <div className="card-v-photo-box">
        <div className="photo-v-blur-bg" aria-hidden="true" />
        <button
          type="button"
          className="btn-v-view-trade"
          onClick={() => onViewTrade && onViewTrade(trade.id)}
          aria-label="View trade chart"
        >
          <span>VIEW TRADE</span>
          <ExternalLink size={9} aria-hidden="true" />
        </button>
        <span className="photo-v-subtext">blurred chart photo</span>
      </div>

      {/* 7. Footer: Owner & Actions */}
      <div className="card-v-footer">
        <div className="card-v-owner">
          <User size={11} className="owner-v-icon" aria-hidden="true" />
          <span className="owner-v-name">{trade.ownerName}</span>
        </div>

        <div className="card-v-actions">
          <button
            type="button"
            className={`card-v-pin-btn ${isPinnedLocal ? 'pinned' : ''}`}
            onClick={handlePinClick}
            aria-label={isPinnedLocal ? 'Unpin trade' : 'Pin trade'}
            title={isPinnedLocal ? 'Pinned' : 'Pin trade'}
          >
            <Pin size={11} strokeWidth={isPinnedLocal ? 2.5 : 2} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="card-v-more-btn"
            onClick={() => onMoreActions && onMoreActions(trade.id)}
            aria-label="More actions"
            title="More actions"
          >
            <MoreHorizontal size={13} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default RadarCard;
