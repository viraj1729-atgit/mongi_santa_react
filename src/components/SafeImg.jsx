import { useState } from 'react';

/**
 * SafeImg – renders an <img> and falls back to a styled placeholder
 * if the src URL fails to load (network error / 404).
 *
 * Props:
 *   src       {string}  – image URL
 *   alt       {string}  – alt text (also used as placeholder label)
 *   style     {object}  – additional inline styles (width, height, etc.)
 *   className {string}  – optional CSS class
 */
export default function SafeImg({ src, alt = 'Image', style = {}, className = '' }) {
  const [errored, setErrored] = useState(false);

  const w = style.width  || 300;
  const h = style.height || 200;
  const label = encodeURIComponent(alt);
  const fallback = `https://placehold.co/${w}x${h}/ffb6d9/ffffff?text=${label}`;

  return (
    <img
      src={errored ? fallback : src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
      style={{
        objectFit: 'cover',
        display: 'block',
        ...style,
      }}
    />
  );
}
