import { COLORS } from '../constants/theme';

/**
 * Testimonials
 * Renders customer review cards passed in via props.
 *
 * Props:
 *   testimonials {Array}   – [{ id, stars, text, author }]
 *   dark         {boolean}
 */
export default function Testimonials({ testimonials, dark }) {
  const bg     = dark ? COLORS.darkBgMid   : '#fff';
  const cardBg = dark ? COLORS.darkCard     : COLORS.lightCard;
  const border = dark ? COLORS.darkBorder   : COLORS.lightBorder;
  const text   = dark ? '#bbb'              : '#555';

  return (
    <section style={{ padding: '60px 20px', background: bg }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <h2 style={{
          textAlign: 'center', fontSize: 32, fontWeight: 800,
          marginBottom: 40, color: dark ? '#fff' : '#222',
        }}>
          What our clients say{' '}
          <span style={{ color: COLORS.pink }}>about us</span>
        </h2>

        <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap' }}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                flex: '1 1 260px',
                background: cardBg,
                border: `1px solid ${border}`,
                borderRadius: 14, padding: '24px 22px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(233,30,140,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
              }}
            >
              {/* Stars */}
              <div style={{ fontSize: 18, marginBottom: 12, color: '#f5a623' }}>
                {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
              </div>

              {/* Review text */}
              <p style={{
                color: text, fontStyle: 'italic',
                lineHeight: 1.7, margin: '0 0 14px', fontSize: 14,
              }}>
                "{t.text}"
              </p>

              {/* Author */}
              <p style={{ color: COLORS.pink, fontWeight: 700, margin: 0, fontSize: 14 }}>
                — {t.author}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
