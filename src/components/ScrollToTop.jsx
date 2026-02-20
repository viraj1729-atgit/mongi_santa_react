import { useState, useEffect } from 'react';
import { COLORS } from '../constants/theme';

/**
 * ScrollToTop
 * Fixed "↑" button that appears after scrolling 320 px.
 * Smoothly scrolls back to the top on click.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 320);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      style={{
        position: 'fixed', bottom: 24, right: 24,
        width: 48, height: 48, borderRadius: '50%',
        background: COLORS.pink, color: '#fff',
        border: 'none', cursor: 'pointer',
        fontSize: 20, fontWeight: 900,
        boxShadow: '0 4px 20px rgba(233,30,140,0.45)',
        zIndex: 300,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      ↑
    </button>
  );
}
