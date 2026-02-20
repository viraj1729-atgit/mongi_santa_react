import { COLORS } from '../constants/theme';

/**
 * PromoBanner
 * Full-width pink banner promoting the first-order discount code.
 */
export default function PromoBanner() {
  return (
    <section style={{
      background: `linear-gradient(135deg, ${COLORS.pinkHero}, ${COLORS.pink})`,
      padding: '48px 20px',
      textAlign: 'center',
    }}>
      <h2 style={{
        color: '#fff', fontSize: 28,
        fontWeight: 800, marginBottom: 10, lineHeight: 1.3,
      }}>
        Placing your first order? Get Upto 10% Off
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 18, margin: 0 }}>
        Use Code :{' '}
        <strong style={{
          background: 'rgba(255,255,255,0.2)',
          padding: '2px 12px', borderRadius: 6, letterSpacing: 0.5,
        }}>
          monginis
        </strong>
      </p>
    </section>
  );
}
