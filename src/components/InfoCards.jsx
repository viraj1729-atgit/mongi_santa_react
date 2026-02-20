import { useState } from 'react';
import { INFO_CARDS } from '../constants/data';
import { COLORS } from '../constants/theme';
import SafeImg from './SafeImg';

/**
 * InfoCards
 * Shows two promo cards (Order Online / Visit Store).
 * Clicking any CTA opens a confirmation modal.
 *
 * Props:
 *   dark {boolean}
 */
export default function InfoCards({ dark }) {
  const [modal, setModal] = useState(null); // null | string (CTA label)

  const sectionBg = dark ? COLORS.darkBgMid : '#f8f6ff';

  return (
    <>
      <section style={{ background: sectionBg, padding: '56px 20px' }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'flex', gap: 24, flexWrap: 'wrap',
        }}>
          {INFO_CARDS.map((card) => (
            <Card key={card.id} card={card} dark={dark} onCta={setModal} />
          ))}
        </div>
      </section>

      {/* ── Modal overlay ─────────────────────────────────────────────────── */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.55)',
            zIndex: 500,
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="fade-in-up"
            style={{
              background: '#fff', borderRadius: 20,
              padding: '40px 32px', maxWidth: 380, width: '100%',
              textAlign: 'center',
              boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
            }}
          >
            <div style={{ fontSize: 52, marginBottom: 16 }}>🎂</div>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#222', marginBottom: 10 }}>
              {modal}
            </h3>
            <p style={{ color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
              Redirecting you to our platform! Use code{' '}
              <strong style={{ color: COLORS.pink }}>MONGINIS</strong> for flat{' '}
              <strong>10% off</strong> on your first order.
            </p>
            <button
              onClick={() => setModal(null)}
              style={{
                background: COLORS.pink, color: '#fff',
                border: 'none', padding: '13px 36px',
                borderRadius: 10, cursor: 'pointer',
                fontWeight: 700, fontSize: 15,
                boxShadow: `0 4px 16px rgba(233,30,140,0.35)`,
              }}
            >
              Got it! 🎉
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ── Individual card ──────────────────────────────────────────────────────── */
function Card({ card, dark, onCta }) {
  const isLight = card.variant === 'light';

  return (
    <div style={{
      flex: '1 1 340px',
      background: card.bg,
      borderRadius: 18, padding: 28,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: 14,
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    }}>
      <h3 style={{ fontSize: 22, fontWeight: 800, color: card.titleColor, margin: 0 }}>
        {card.title}
      </h3>

      {card.subtitle && (
        <p style={{ fontStyle: 'italic', color: isLight ? '#666' : 'rgba(255,255,255,0.85)', margin: 0 }}>
          {card.subtitle}
        </p>
      )}

      {/* Image */}
      <div style={{ width: '100%', borderRadius: 14, overflow: 'hidden', maxWidth: 340 }}>
        <SafeImg src={card.src} alt={card.imgAlt} style={{ width: '100%', height: 190 }} />
      </div>

      <p style={{
        color: card.textColor,
        fontWeight: isLight ? 400 : 700,
        fontSize: isLight ? 15 : 20,
        textAlign: 'center', margin: 0,
      }}>
        {card.desc}
      </p>

      {/* Primary CTA */}
      <CtaButton
        label={card.cta}
        onClick={() => onCta(card.cta)}
        variant={isLight ? 'pink' : 'ghost'}
      />

      {/* Secondary CTA (store card only) */}
      {card.cta2 && (
        <CtaButton
          label={card.cta2}
          onClick={() => onCta(card.cta2)}
          variant="outline"
        />
      )}
    </div>
  );
}

function CtaButton({ label, onClick, variant }) {
  const styles = {
    pink: {
      background: COLORS.pink, color: '#fff',
      border: 'none', boxShadow: '0 3px 12px rgba(233,30,140,0.3)',
    },
    ghost: {
      background: 'rgba(255,255,255,0.18)', color: '#fff',
      border: '1px solid rgba(255,255,255,0.4)',
    },
    outline: {
      background: '#fff', color: COLORS.pink,
      border: `2px solid ${COLORS.pink}`,
    },
  }[variant];

  return (
    <button
      onClick={onClick}
      style={{
        width: '100%', padding: '12px',
        borderRadius: 10, cursor: 'pointer',
        fontWeight: 700, fontSize: 14,
        transition: 'all 0.2s', ...styles,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '1';    e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {label}
    </button>
  );
}
