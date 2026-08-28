import React from 'react';
import { Radio, Pin, Activity } from 'lucide-react';
import { RadarCard, RadarTradeData } from '../components/RadarCard';

export const MOCK_AUTO_RADAR_TRADES: RadarTradeData[] = [
  {
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
    score: { freshness: 3.0, strength: 2.0, baseCandles: 2.0, total: 7.0 },
    comments: ['Fresh level, watching...', 'Looks good, agree.'],
    moreCommentsCount: 3,
    hasPhoto: true,
  },
  {
    id: 'trade-2',
    rank: 2,
    symbol: 'TCS',
    tradeType: 'Monthly',
    executionTf: 'Daily',
    cmp: 3840.0,
    entryPrice: 3925.0,
    distancePercent: 2.15,
    approachAlertPrice: 4121.0,
    status: 'ACTIVE',
    ownerName: 'Trader 2',
    isPinned: false,
    score: { freshness: 3.0, strength: 2.0, baseCandles: 2.0, total: 7.0 },
    comments: ['Strong departure with gap.', 'Monitoring 5% approach.'],
    moreCommentsCount: 2,
    hasPhoto: true,
  },
  {
    id: 'trade-3',
    rank: 3,
    symbol: 'INFY',
    tradeType: 'Weekly',
    executionTf: '125m',
    cmp: 1785.0,
    entryPrice: 1800.0,
    distancePercent: 0.85,
    approachAlertPrice: 1890.0,
    status: 'APPROACH_TRIGGERED',
    ownerName: 'Trader 2',
    isPinned: false,
    score: { freshness: 3.0, strength: 2.0, baseCandles: 1.5, total: 6.5 },
    comments: ['5% approach alert fired!', 'Approaching entry fast.'],
    moreCommentsCount: 4,
    hasPhoto: true,
  },
  {
    id: 'trade-4',
    rank: 4,
    symbol: 'HDFCBANK',
    tradeType: 'Quarterly',
    executionTf: 'Weekly',
    cmp: 1632.0,
    entryPrice: 1650.0,
    distancePercent: 1.10,
    approachAlertPrice: 1732.0,
    status: 'ACTIVE',
    ownerName: 'Arpit',
    isPinned: false,
    score: { freshness: 3.0, strength: 2.0, baseCandles: 1.5, total: 6.5 },
    comments: ['Tested once on 125m.', 'Good base formation.'],
    moreCommentsCount: 1,
    hasPhoto: true,
  },
  {
    id: 'trade-5',
    rank: 5,
    symbol: 'SBIN',
    tradeType: 'Monthly',
    executionTf: 'Daily',
    cmp: 788.0,
    entryPrice: 802.0,
    distancePercent: 1.75,
    approachAlertPrice: 842.0,
    status: 'ALERT_ISSUE',
    ownerName: 'Trader 2',
    isPinned: false,
    score: { freshness: 2.0, strength: 2.0, baseCandles: 2.0, total: 6.0 },
    comments: ['WhatsApp channel timeout.', 'Dhan webhook armed.'],
    moreCommentsCount: 2,
    hasPhoto: true,
  },
  {
    id: 'trade-6',
    rank: 6,
    symbol: 'TATAMOTORS',
    tradeType: 'Half-Yearly',
    executionTf: 'Monthly',
    cmp: 920.0,
    entryPrice: 942.0,
    distancePercent: 2.40,
    approachAlertPrice: 989.0,
    status: 'ACTIVE',
    ownerName: 'Arpit',
    isPinned: false,
    score: { freshness: 3.0, strength: 1.5, baseCandles: 1.5, total: 6.0 },
    comments: ['Heavy accumulation base.', 'Wait for confirmation.'],
    moreCommentsCount: 0,
    hasPhoto: true,
  },
  {
    id: 'trade-7',
    rank: 7,
    symbol: 'BAJFINANCE',
    tradeType: 'Monthly',
    executionTf: 'Daily',
    cmp: 7110.0,
    entryPrice: 7315.0,
    distancePercent: 2.80,
    approachAlertPrice: 7680.0,
    status: 'ACTIVE',
    ownerName: 'Arpit',
    isPinned: false,
    score: { freshness: 3.0, strength: 1.5, baseCandles: 1.5, total: 6.0 },
    comments: ['Strong volume on breakout.', 'Approaching key zone.'],
    moreCommentsCount: 2,
    hasPhoto: true,
  },
  {
    id: 'trade-8',
    rank: 8,
    symbol: 'AXISBANK',
    tradeType: 'Quarterly',
    executionTf: 'Weekly',
    cmp: 1182.0,
    entryPrice: 1196.0,
    distancePercent: 1.20,
    approachAlertPrice: 1255.0,
    status: 'ACTIVE',
    ownerName: 'Trader 2',
    isPinned: false,
    score: { freshness: 2.0, strength: 2.0, baseCandles: 1.5, total: 5.5 },
    comments: ['Testing base level.', 'Order limit placed.'],
    moreCommentsCount: 1,
    hasPhoto: true,
  },
  {
    id: 'trade-9',
    rank: 9,
    symbol: 'MARUTI',
    tradeType: 'Monthly',
    executionTf: 'Daily',
    cmp: 11240.0,
    entryPrice: 11460.0,
    distancePercent: 1.95,
    approachAlertPrice: 12033.0,
    status: 'ACTIVE',
    ownerName: 'Arpit',
    isPinned: false,
    score: { freshness: 2.0, strength: 1.5, baseCandles: 2.0, total: 5.5 },
    comments: ['Good monthly continuation.', 'Risk reward favorable.'],
    moreCommentsCount: 3,
    hasPhoto: true,
  },
  {
    id: 'trade-10',
    rank: 10,
    symbol: 'HCLTECH',
    tradeType: 'Quarterly',
    executionTf: 'Weekly',
    cmp: 1610.0,
    entryPrice: 1634.0,
    distancePercent: 1.45,
    approachAlertPrice: 1715.0,
    status: 'ACTIVE',
    ownerName: 'Trader 2',
    isPinned: false,
    score: { freshness: 2.0, strength: 1.5, baseCandles: 1.5, total: 5.0 },
    comments: ['IT sector moving up.', 'Clean base candles.'],
    moreCommentsCount: 2,
    hasPhoto: true,
  },
  {
    id: 'trade-11',
    rank: 11,
    symbol: 'SUNPHARMA',
    tradeType: 'Monthly',
    executionTf: 'Daily',
    cmp: 1710.0,
    entryPrice: 1746.0,
    distancePercent: 2.10,
    approachAlertPrice: 1833.0,
    status: 'ACTIVE',
    ownerName: 'Arpit',
    isPinned: false,
    score: { freshness: 2.0, strength: 1.5, baseCandles: 1.5, total: 5.0 },
    comments: ['Pharma rally breakout.', '5% alert active.'],
    moreCommentsCount: 1,
    hasPhoto: true,
  },
  {
    id: 'trade-12',
    rank: 12,
    symbol: 'NESTLEIND',
    tradeType: 'Yearly',
    executionTf: 'Quarterly',
    cmp: 2410.0,
    entryPrice: 2490.0,
    distancePercent: 3.25,
    approachAlertPrice: 2614.0,
    status: 'ACTIVE',
    ownerName: 'Trader 2',
    isPinned: false,
    score: { freshness: 1.5, strength: 2.0, baseCandles: 1.5, total: 5.0 },
    comments: ['Defensive setup.', 'Watching yearly drop.'],
    moreCommentsCount: 1,
    hasPhoto: true,
  },
];

export const RadarPage: React.FC = () => {
  return (
    <div className="radar-page-container">
      {/* LEFT / MAIN COLUMN: AUTO RADAR */}
      <div className="radar-main-column">
        <section className="radar-section auto-radar-section" aria-labelledby="auto-radar-heading">
          <div className="radar-section-header">
            <div className="radar-section-title-group">
              <div className="section-icon-badge auto-radar-badge" aria-hidden="true">
                <Radio size={16} strokeWidth={2.4} />
              </div>
              <h2 id="auto-radar-heading" className="radar-section-title">
                Auto Radar
              </h2>
            </div>
          </div>

          {/* Auto Radar Cards Grid: STEP 05 Multi-Card Grid */}
          <div className="radar-cards-container">
            {MOCK_AUTO_RADAR_TRADES.map((trade) => (
              <RadarCard key={trade.id} trade={trade} />
            ))}
          </div>
        </section>
      </div>

      {/* RIGHT COLUMN: RECENT ACTIVITY (TOP) + PINNED TRADES (BOTTOM) */}
      <div className="radar-side-column">
        {/* RECENT ACTIVITY (TOP RIGHT) */}
        <section className="radar-section recent-activity-section" aria-labelledby="recent-activity-heading">
          <div className="radar-section-header">
            <div className="radar-section-title-group">
              <div className="section-icon-badge recent-activity-badge" aria-hidden="true">
                <Activity size={16} strokeWidth={2.4} />
              </div>
              <h2 id="recent-activity-heading" className="radar-section-title">
                Recent Activity
              </h2>
            </div>
          </div>

          <div className="radar-activity-container">
            <div className="radar-placeholder-box activity-placeholder-box">
              <Activity size={22} className="placeholder-icon" aria-hidden="true" />
              <p className="placeholder-primary-text">Recent Activity Container</p>
              <p className="placeholder-secondary-text">
                Timeline of recent trade scoring, comments, and alert events.
              </p>
            </div>
          </div>
        </section>

        {/* PINNED TRADES (BOTTOM RIGHT) */}
        <section className="radar-section pinned-trades-section" aria-labelledby="pinned-trades-heading">
          <div className="radar-section-header">
            <div className="radar-section-title-group">
              <div className="section-icon-badge pinned-trades-badge" aria-hidden="true">
                <Pin size={16} strokeWidth={2.4} />
              </div>
              <h2 id="pinned-trades-heading" className="radar-section-title">
                Pinned Trades
              </h2>
            </div>
          </div>

          <div className="radar-pinned-container">
            <div className="radar-placeholder-box pinned-placeholder-box">
              <Pin size={22} className="placeholder-icon" aria-hidden="true" />
              <p className="placeholder-primary-text">Pinned Trades Container</p>
              <p className="placeholder-secondary-text">
                Watchlist trades kept distinct from Auto Radar.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RadarPage;
