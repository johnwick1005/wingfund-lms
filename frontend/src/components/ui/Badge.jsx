import React from 'react';
import { cx } from './cx.js';

const VARIANT_CLASS = {
  success: 'success',
  warning: 'warn',
  danger:  'danger',
  primary: 'gold',
  neutral: 'neutral',
};

/**
 * Status badge / pill. Use to label items by state.
 *
 * @example
 *   <Badge variant="success">Collected</Badge>
 *   <Badge variant="danger">Overdue</Badge>
 *   <Badge variant="primary" solid dot={false}>28 due</Badge>
 *
 * @param {Object} props
 * @param {'success'|'warning'|'danger'|'primary'|'neutral'} [props.variant='neutral']
 * @param {boolean} [props.solid=false] - Filled style instead of subtle background.
 * @param {boolean} [props.dot=true]    - Show the leading status dot.
 */
export default function Badge({
  variant = 'neutral',
  solid = false,
  dot = true,
  className,
  children,
  ...rest
}) {
  return (
    <span
      className={cx(
        'pill',
        VARIANT_CLASS[variant],
        solid && 'solid',
        !dot && 'pill-no-dot',
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
