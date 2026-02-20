import { useState } from 'react';
import { SPECIALTIES } from '../constants/data';
import { COLORS } from '../constants/theme';

/**
 * Speciality
 * Displays the "Our Speciality" stats section.
 * The stats grid is hidden by default and toggled via state (show/hide).
 *
 * Props:
 *   dark {boolean}
 */
export default function Speciality({ dark }) {
  const [show, setShow] = useState(false);

  const bg     = dark ? COLORS.darkBg    : '#fff';
  const cardBg = dark ? COLORS.darkBgMid : '#fdf8ff';
  const text   = dark ? '#ccc'           : '#333';

  return (
    <section style={{ padding: '60px 20px', background: bg }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>

        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16, color: dark ? '#fff' : '#222' }}>
          Our <span style={{ color: COLORS.pink }}>Speciality</span>
        </h2>

        {/* Toggle button */}
        <button
          onClick={() => setShow((v) => !v)}
          style={{
            border: `2px solid ${COLORS.pink}`,
            borderRadius: 22, padding: '8px 24px',
            background: 'transparent', cursor: 'pointer',
            color: COLORS.pink, fontWeight: 700, fontSize: 14,
            marginBottom: 36, transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.pink; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = COLORS.pink; }}
        >
          {show ? '▲ Hide Details' : '▼ Show Details'}
        </button>

        {/* Conditional stats grid */}
        {show && (
          <div
            className="fade-in-up"
            style={{
              display: 'flex', justifyContent: 'center',
              gap: 24, flexWrap: 'wrap', marginBottom: 40,
            }}
          >
            {SPECIALTIES.map((s) => (
              <div
                key={s.id}
                style={{
                  flex: '1 1 140px', textAlign: 'center',
                  padding: '24px 16px', borderRadius: 14,
                  background: cardBg,
                  boxShadow: '0 2px 12px rgba(233,30,140,0.08)',
                }}
              >
                <div style={{ fontSize: 52, marginBottom: 12 }}>{s.emoji}</div>
                <p style={{ fontWeight: 700, fontSize: 14, color: text, margin: 0, lineHeight: 1.4 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* SEO / search tags */}
        <div style={{
          padding: '20px 24px', borderRadius: 12,
          background: dark ? COLORS.darkBgMid : '#f8f4ff',
          textAlign: 'left', fontSize: 13,
          color: dark ? '#aaa' : '#666', lineHeight: 1.9,
        }}>
          <strong style={{ color: dark ? '#eee' : '#222' }}>MOST SEARCHED ON MONGINIS:</strong>{' '}
          Cakes | 3D & Sp Cakes | Pastries | Savories | Baker Wares | Chocolates | Cakes Deals
          <br />
          <strong style={{ color: dark ? '#eee' : '#222' }}>CAKES:</strong>{' '}
          Packaged Cake | Blueberry Cake | Chocolate Cake | Pineapple Cake | Truffle Cake |
          Double Chocolate Cake | Walnut Truffle Cake | Classic Chocolate Cake
          <br />
          <strong style={{ color: dark ? '#eee' : '#222' }}>SAVORIES:</strong>{' '}
          Namkeen | Rusk | Rolls | Pizza Slices | Veg Rolls | Veg Paneer Patty | Breads | Tea Time Snacks
        </div>

      </div>
    </section>
  );
}
