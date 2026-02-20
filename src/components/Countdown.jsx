import { useState, useEffect, useCallback } from 'react';
import { COLORS } from '../constants/theme';

/**
 * Countdown
 * Displays a live countdown to a sale event.
 * No props needed – computes target date internally.
 */
export default function Countdown() {
  // Target: 6 days + 10 hours from first render
  const getTarget = useCallback(() => {
    const d = new Date();
    d.setDate(d.getDate() + 6);
    d.setHours(d.getHours() + 10);
    return d.getTime();
  }, []);

  const [target]  = useState(() => getTarget());
  const [rem, setRem] = useState(() => Math.max(0, target - Date.now()));

  useEffect(() => {
    const t = setInterval(() => setRem(Math.max(0, target - Date.now())), 1000);
    return () => clearInterval(t);
  }, [target]);

  const pad = (n) => String(Math.max(0, Math.floor(n))).padStart(2, '0');

  const days    = pad(rem / 86_400_000);
  const hours   = pad((rem % 86_400_000) / 3_600_000);
  const minutes = pad((rem % 3_600_000)  / 60_000);
  const seconds = pad((rem % 60_000)     / 1_000);

  return (
    <div style={{
      background: '#1a1a2e',
      padding: '13px 20px',
      textAlign: 'center',
      color: '#fff',
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: 0.3,
    }}>
      🎉 Next Big Sale ends in:{' '}
      <Segment value={days}    unit="d" color={COLORS.yellow}    />
      <Segment value={hours}   unit="h" color={COLORS.pinkLight} />
      <Segment value={minutes} unit="m" color={COLORS.yellow}    />
      <Segment value={seconds} unit="s" color={COLORS.pinkLight} />
    </div>
  );
}

function Segment({ value, unit, color }) {
  return (
    <span style={{ marginRight: 6 }}>
      <span style={{ color, fontWeight: 800 }}>{value}</span>{' '}
      <span style={{ color: '#aaa', fontSize: 13 }}>{unit}</span>
    </span>
  );
}
