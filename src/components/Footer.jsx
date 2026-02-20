import { FOOTER_LINKS, SOCIAL_LINKS } from '../constants/data';
import { COLORS } from '../constants/theme';

/**
 * Footer
 * Props:
 *   dark {boolean}
 */
export default function Footer({ dark }) {
  const bg      = dark ? COLORS.darkBgDeep : '#fff';
  const border  = dark ? '#222'            : '#eee';
  const heading = dark ? '#fff'            : '#222';
  const link    = dark ? '#aaa'            : '#666';

  return (
    <footer style={{
      background: bg,
      padding: '56px 20px 28px',
      borderTop: `1px solid ${border}`,
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{
            fontSize: 28, fontWeight: 800,
            fontFamily: "'Playfair Display', Georgia, serif",
          }}>
            <span style={{ color: dark ? COLORS.goldLight : COLORS.gold }}>mongi</span>
            <span style={{ color: COLORS.pink }}>Santa</span>
          </span>
        </div>

        {/* Link columns */}
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginBottom: 40 }}>
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} style={{ flex: '1 1 150px' }}>
              <h4 style={{ fontWeight: 700, fontSize: 14, color: heading, marginBottom: 16 }}>
                {section}
              </h4>
              {links.map((l) => (
                <p key={l} style={{ marginBottom: 10, fontSize: 13 }}>
                  <a
                    href="#"
                    style={{ color: link, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.pink)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = link)}
                  >
                    {l}
                  </a>
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Social */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h4 style={{ fontWeight: 700, fontSize: 14, color: heading, marginBottom: 16 }}>
            Connect with us
          </h4>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            {SOCIAL_LINKS.map((s) => (
              <button
                key={s.label}
                title={s.label}
                aria-label={s.label}
                style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: s.bg, border: 'none',
                  cursor: 'pointer', color: '#fff',
                  fontWeight: 700, fontSize: 16,
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.82'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1';    e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          textAlign: 'center',
          borderTop: `1px solid ${border}`,
          paddingTop: 20,
        }}>
          <p style={{ color: dark ? '#555' : '#aaa', fontSize: 13, marginBottom: 4 }}>
            Copyright © Monginis. All rights reserved
          </p>
          <p style={{ color: dark ? '#555' : '#aaa', fontSize: 13 }}>
            Designed &amp; Developed by QPSIT
          </p>
        </div>

      </div>
    </footer>
  );
}
