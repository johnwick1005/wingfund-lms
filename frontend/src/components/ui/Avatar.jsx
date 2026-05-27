import React, { useState } from 'react';
import { cx } from './cx.js';

function getInitials(name) {
  if (!name) return '?';
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  const first = parts[0][0] || '';
  const last  = parts.length > 1 ? parts[parts.length - 1][0] || '' : '';
  return (first + last) || first || '?';
}

const SIZE_CLASS = { sm: 'av-sm', md: '', lg: 'av-lg' };

/**
 * Avatar with image-to-initials fallback.
 *
 * Edge cases handled:
 * - No name → renders "?".
 * - Name with one word → first letter.
 * - Image fails to load → falls back to initials automatically.
 * - Long names → only first + last initial used.
 *
 * @param {Object} props
 * @param {string}  [props.name]    - For initials and aria-label.
 * @param {string}  [props.src]     - Optional image URL.
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {'default'|'primary'} [props.variant='default']
 */
export default function Avatar({
  name,
  src,
  size = 'md',
  variant = 'default',
  className,
  ...rest
}) {
  const [imgError, setImgError] = useState(false);
  const initials = getInitials(name).toUpperCase();
  const showImg = src && !imgError;

  return (
    <span
      className={cx('av', SIZE_CLASS[size], variant === 'primary' && 'gold', className)}
      role="img"
      aria-label={name || 'avatar'}
      {...rest}
    >
      {showImg ? (
        <img
          src={src}
          alt=""
          onError={() => setImgError(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
        />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </span>
  );
}
