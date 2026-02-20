import { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants/data';
import { COLORS } from '../constants/theme';
import SafeImg from './SafeImg';

/**
 * Hero
 * Features: auto-advancing image slider, promo bubble (dismissable), dot & arrow nav
 */
export default function Hero() {
  const [slide, setSlide]             = useState(0);
  const [promoVisible, setPromoVisible] = useState(true);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(
      () => setSlide((s) => (s + 1) % HERO_SLIDES.length),
      3800
    );
    return () => clearInterval(t);
  }, []);

  const prev = () => setSlide((s) => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => setSlide((s) => (s + 1) % HERO_SLIDES.length);

  return (
    <section style={{
      background: `linear-gradient(135deg, ${COLORS.pinkLight} 0%, ${COLORS.pinkHero} 45%, ${COLORS.pink} 100%)`,
      padding: '44px 20px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        gap: 40, flexWrap: 'wrap',
      }}>

        {/* ── Promo bubble ────────────────────────────────────────────────── */}
        {promoVisible && (
          <div style={{ position: 'relative', flexShrink: 0 }} className="fade-in-up">
            {/* Close button */}
            <button
              onClick={() => setPromoVisible(false)}
              aria-label="Close promo"
              style={{
                position: 'absolute', top: -8, right: -8,
                width: 24, height: 24, borderRadius: '50%',
                background: '#fff', border: 'none', cursor: 'pointer',
                fontSize: 12, color: COLORS.pink, fontWeight: 800,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)', zIndex: 2,
              }}
            >✕</button>

            {/* Circle */}
            <div style={{
              width: 210, height: 210, borderRadius: '50%',
              background: 'rgba(255,255,255,0.14)',
              border: '4px solid rgba(255,255,255,0.35)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 6, padding: 28, textAlign: 'center',
            }}>
              <span style={{ color: '#fff', fontSize: 15, fontWeight: 600 }}>Use code</span>
              <div style={{
                background: COLORS.purple, borderRadius: 8, padding: '6px 16px',
              }}>
                <span style={{ color: '#fff', fontSize: 16, fontWeight: 800 }}>"MONGINIS"</span>
              </div>
              <span style={{ color: '#fff', fontSize: 14, fontWeight: 600 }}>and get flat</span>
              <span
                className="pulse"
                style={{ color: COLORS.yellow, fontSize: 38, fontWeight: 900, lineHeight: 1.15 }}
              >
                10%<br />OFF
              </span>
            </div>
          </div>
        )}

        {/* ── Image slider ────────────────────────────────────────────────── */}
        <div style={{ flex: '1 1 320px', minWidth: 0 }}>
          <div style={{
            position: 'relative', borderRadius: 18,
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
          }}>
            <SafeImg
              key={slide}
              src={HERO_SLIDES[slide].src}
              alt={HERO_SLIDES[slide].alt}
              style={{ width: '100%', height: 300 }}
              className="fade-in-up"
            />

            {/* Arrows */}
            {[
              { fn: prev, side: 'left',  ch: '‹' },
              { fn: next, side: 'right', ch: '›' },
            ].map((a) => (
              <button
                key={a.side}
                onClick={a.fn}
                aria-label={a.side === 'left' ? 'Previous slide' : 'Next slide'}
                style={{
                  position: 'absolute', [a.side]: 10,
                  top: '50%', transform: 'translateY(-50%)',
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.88)',
                  border: 'none', cursor: 'pointer',
                  fontSize: 22, fontWeight: 900, color: '#333',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                {a.ch}
              </button>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 14 }}>
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
                style={{
                  width: i === slide ? 22 : 10, height: 10,
                  borderRadius: 5, border: 'none', cursor: 'pointer',
                  background: i === slide ? '#fff' : 'rgba(255,255,255,0.5)',
                  padding: 0, transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </div>

      </div>

      {/* ── Section tagline ─────────────────────────────────────────────────── */}
      <p style={{
        textAlign: 'center', color: '#fff',
        fontSize: 32, fontWeight: 800,
        marginTop: 36,
        fontFamily: "'Playfair Display', Georgia, serif",
      }}>
        Bring A Box Of <span style={{ color: COLORS.yellow }}>Happiness Today</span>
      </p>
    </section>
  );
}
