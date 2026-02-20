import { useState } from 'react';
import { COLORS } from '../constants/theme';

/**
 * Newsletter
 * Email subscription form with full client-side validation via React state.
 *
 * Validation rules:
 *   - Field must not be empty
 *   - Must match basic email regex
 * On success: shows a confirmation message for 5 s then resets.
 *
 * Props:
 *   dark {boolean}
 */
export default function Newsletter({ dark }) {
  const [email,   setEmail]   = useState('');
  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState(false);

  const validate = () => {
    if (!email.trim()) {
      setError('Email address is required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address (e.g. you@example.com).');
      return;
    }
    setError('');
    setSuccess(true);
    setEmail('');
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, #ede0ff, #d6b8f8)',
      padding: '64px 20px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{ position:'absolute', right:-60, top:-60, width:220, height:220, borderRadius:'50%', background:'rgba(255,255,255,0.18)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', right:60, bottom:-40, width:130, height:130, borderRadius:'50%', background:'rgba(255,255,255,0.12)', pointerEvents:'none' }} />

      <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: '#222', marginBottom: 10 }}>
          Know The Sweet{' '}
          <span style={{ color: COLORS.pink }}>Deal First !</span>
        </h2>
        <p style={{ color: '#555', marginBottom: 28, fontSize: 15 }}>
          Sign up to our newsletter and get to know the sweets first!
        </p>

        {success ? (
          <div
            className="fade-in-up"
            style={{
              background: '#4caf50', color: '#fff',
              padding: '18px 24px', borderRadius: 12,
              fontWeight: 700, fontSize: 16,
            }}
          >
            🎉 You're subscribed! Sweet deals heading your way.
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                onKeyDown={(e) => e.key === 'Enter' && validate()}
                placeholder="Enter your email address"
                aria-label="Email address"
                style={{
                  flex: '1 1 240px', padding: '14px 18px',
                  borderRadius: 10, fontSize: 15, outline: 'none',
                  border: error ? `2px solid #f44336` : '2px solid rgba(0,0,0,0.1)',
                  background: '#fff', color: '#222',
                  transition: 'border-color 0.2s',
                }}
              />
              <button
                onClick={validate}
                style={{
                  background: '#1a1a2e', color: '#fff',
                  border: 'none', padding: '14px 32px',
                  borderRadius: 10, cursor: 'pointer',
                  fontWeight: 700, fontSize: 15,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Subscribe
              </button>
            </div>

            {error && (
              <p style={{ color: '#d32f2f', marginTop: 8, fontSize: 13 }}>
                ⚠ {error}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
