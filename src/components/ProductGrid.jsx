import { COLORS } from '../constants/theme';
import SafeImg from './SafeImg';

/**
 * ProductGrid
 * Reusable grid that renders a list of circular product images.
 *
 * Props:
 *   highlight {string}   – coloured word in heading (e.g. "3D Cakes")
 *   products  {Array}    – [{ id, name, src }]
 *   dark      {boolean}
 */
export default function ProductGrid({ highlight, products, dark }) {
  const bg = dark ? COLORS.darkBg : '#fff';

  return (
    <section style={{ padding: '56px 20px', background: bg }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>

        {/* ── Heading row ─────────────────────────────────────────────────── */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 36, flexWrap: 'wrap', gap: 12,
        }}>
          <h2 style={{
            fontSize: 30, fontWeight: 800, margin: 0,
            color: dark ? '#fff' : '#222',
          }}>
            Shop By <span style={{ color: COLORS.pink }}>{highlight}</span>
          </h2>

          <button
            style={{
              background: COLORS.pink, color: '#fff',
              border: 'none', padding: '10px 26px',
              borderRadius: 8, cursor: 'pointer',
              fontWeight: 700, fontSize: 14,
              boxShadow: `0 3px 12px rgba(233,30,140,0.35)`,
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1';    e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            View all
          </button>
        </div>

        {/* ── Product circles ─────────────────────────────────────────────── */}
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {products.map((product, index) => (
            <ProductItem
              key={product.id}
              product={product}
              dark={dark}
              accentBorder={index % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── Single product circle ────────────────────────────────────────────────── */
function ProductItem({ product, dark, accentBorder }) {
  const borderColor = accentBorder ? COLORS.pink : (dark ? '#555' : '#222');

  return (
    <div style={{ flex: '1 1 170px', textAlign: 'center', cursor: 'pointer' }}>
      <div
        style={{
          width: 168, height: 168, borderRadius: '50%',
          overflow: 'hidden', margin: '0 auto 14px',
          border: `3px solid ${borderColor}`,
          transition: 'transform 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.07)';
          e.currentTarget.style.boxShadow = `0 8px 24px rgba(233,30,140,0.25)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <SafeImg
          src={product.src}
          alt={product.name}
          style={{ width: 168, height: 168 }}
        />
      </div>

      <p style={{
        fontWeight: 700, fontSize: 12,
        letterSpacing: 1.2, textTransform: 'uppercase',
        color: dark ? '#ccc' : '#333', margin: 0,
      }}>
        {product.name}
      </p>
    </div>
  );
}
