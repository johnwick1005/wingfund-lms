import React, { forwardRef } from 'react';
import { cx } from './cx.js';

/**
 * Accessible inline loading spinner.
 *
 * Inherits color from the surrounding text color (`currentColor`) so it works
 * inside buttons, on dark or light surfaces, and within any theme.
 *
 * Announces "Loading…" to assistive tech via role="status" + a visually-hidden
 * label. Respects `prefers-reduced-motion`.
 *
 * @param {Object} props
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {string}         [props.label='Loading…'] - Screen-reader text.
 * @param {string}         [props.className]
 */
const Spinner = forwardRef(function Spinner(
  { size = 'md', label = 'Loading…', className, ...rest },
  ref
) {
  return (
    <span
      ref={ref}
      role="status"
      aria-live="polite"
      className={cx('ui-spinner', `ui-spinner-${size}`, className)}
      {...rest}
    >
      <span className="ui-sr-only">{label}</span>
    </span>
  );
});

export default Spinner;
