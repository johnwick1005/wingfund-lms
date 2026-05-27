import React, { forwardRef } from 'react';
import { cx } from './cx.js';

/**
 * Icon-only button. Required `label` becomes both the screen-reader name
 * (aria-label) and the hover tooltip (title) — this is the single biggest
 * a11y miss in dashboard UIs, so we make it impossible to omit.
 *
 * @param {Object} props
 * @param {string} props.label - **Required.** Describes the action.
 * @param {React.ReactNode} props.icon
 * @param {'sm'|'md'} [props.size='md']
 * @param {boolean}   [props.disabled]
 */
const IconButton = forwardRef(function IconButton(
  { label, icon, size = 'md', className, disabled, ...rest },
  ref
) {
  if (!label && typeof console !== 'undefined') {
    console.warn('<IconButton> requires a `label` prop for accessibility.');
  }
  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      className={cx('tb-icon', `ui-iconbtn-${size}`, className)}
      {...rest}
    >
      {icon}
    </button>
  );
});

export default IconButton;
