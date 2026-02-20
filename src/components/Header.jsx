import { useState } from 'react';
import { NAV_ITEMS } from '../constants/data';
import { COLORS } from '../constants/theme';

/**
 * Header
 * Props:
 *   dark       {boolean}   – dark mode active
 *   toggleDark {function}  – toggle dark mode
 *   active     {string}    – currently active nav item
 *   setActive  {function}  – set active nav item
 */
export default function Header({ dark, toggleDark, active, setActive }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const bg     = dark ? COLORS.darkBg    : COLORS.lightBg;
  const border = dark ? COLORS.darkBorder : '#e8e8e8';

  const handleNav = (item) => {
    setActive(item);
    setMenuOpen(false);
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 200,
      background: bg,
      borderBottom: `2px solid ${border}`,
      boxShadow: '0 2px 14px rgba(0,0,0,0.09)',
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      {/* ── Main bar ─────────────────────────────────────────────────────── */}
      <div style={{
        maxWidth: 1300, margin: '0 auto', padding: '0 20px',
        display: 'flex', alignItems: 'center', height: 66, gap: 16,
      }}>

        {/* Logo */}
        <div style={{
          fontSize: 26, fontWeight: 800,
          fontFamily: "'Playfair Display', Georgia, serif",
          whiteSpace: 'nowrap', letterSpacing: -0.5,
          userSelect: 'none',
        }}>
          <span style={{ color: dark ? COLORS.goldLight : COLORS.gold }}>mongi</span>
          <span style={{ color: COLORS.pink }}>Santa</span>
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={toggleDark}
          style={{
            border: `2px solid ${COLORS.pink}`,
            borderRadius: 20, padding: '5px 14px',
            background: 'transparent', cursor: 'pointer',
            color: dark ? '#fff' : '#333',
            fontSize: 13, fontWeight: 600,
            whiteSpace: 'nowrap', transition: 'all 0.2s',
          }}
        >
          {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        {/* Desktop nav */}
        <nav
          className="nav-desktop"
          style={{ display: 'flex', gap: 2, marginLeft: 'auto', flexWrap: 'wrap' }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '7px 11px', borderRadius: 6, fontSize: 13,
                fontWeight: active === item ? 700 : 500,
                color: active === item ? COLORS.pink : dark ? '#ccc' : '#444',
                borderBottom: active === item
                  ? `2px solid ${COLORS.pink}`
                  : '2px solid transparent',
                transition: 'all 0.2s', whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => { if (active !== item) e.currentTarget.style.color = COLORS.pink; }}
              onMouseLeave={(e) => { if (active !== item) e.currentTarget.style.color = dark ? '#ccc' : '#444'; }}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            display: 'none', marginLeft: 'auto',
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 26, color: dark ? '#fff' : '#333',
            alignItems: 'center', lineHeight: 1,
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* ── Mobile nav ───────────────────────────────────────────────────── */}
      {menuOpen && (
        <nav
          className="slide-in"
          style={{
            background: bg, padding: '8px 20px 16px',
            borderTop: `1px solid ${border}`,
            display: 'flex', flexDirection: 'column',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => handleNav(item)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '11px 0', textAlign: 'left',
                fontSize: 15, fontWeight: active === item ? 700 : 400,
                color: active === item ? COLORS.pink : dark ? '#ccc' : '#444',
                borderBottom: `1px solid ${dark ? '#333' : '#f0f0f0'}`,
              }}
            >
              {item}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
