const TICKER_ITEMS = [
  { label: 'IND vs AUS', pct: 'IND 65%', up: true },
  { label: 'ENG vs PAK', pct: 'ENG 72%', up: true },
  { label: 'SA vs NZ', pct: 'SA 58%', up: true },
  { label: 'SL vs BAN', pct: 'SL 81%', up: true },
  { label: 'WI vs ZIM', pct: 'WI 90%', up: true },
  { label: 'AFG vs IRE', pct: 'AFG 77%', up: true },
];

export const TickerSection = () => {
  const duplicated = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker">
      <div className="ticker-inner" id="ticker">
        {duplicated.flatMap((item, i) => [
          <span key={`${i}-m`} className="ticker-item">
            🏏 {item.label} · <span className={item.up ? 'up' : 'down'}>{item.pct}</span>
          </span>,
          <span key={`${i}-d`} className="ticker-item dot">·</span>,
        ])}
      </div>
    </div>
  );
};
