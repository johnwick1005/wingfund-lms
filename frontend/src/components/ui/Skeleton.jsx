import React from 'react';
import { cx } from './cx.js';

/**
 * Loading-state placeholder. Render in place of content while data is loading.
 * Marked aria-hidden — pair with aria-busy on the parent container so screen
 * readers hear the live region instead of the placeholder geometry.
 *
 * @example
 *   <div aria-busy={loading}>
 *     {loading ? <Skeleton variant="text" lines={3} /> : <Content />}
 *   </div>
 *
 * @param {Object} props
 * @param {'text'|'rect'|'circle'} [props.variant='rect']
 * @param {string|number}          [props.width]
 * @param {string|number}          [props.height]
 * @param {number}                 [props.lines] - When variant='text', stacks N lines (last is shorter).
 * @param {string}                 [props.className]
 */
export default function Skeleton({
  variant = 'rect',
  width,
  height,
  lines,
  className,
  style,
  ...rest
}) {
  if (variant === 'text' && lines && lines > 1) {
    return (
      <span className={cx('ui-skel-stack', className)} aria-hidden="true" {...rest}>
        {Array.from({ length: lines }).map((_, i) => (
          <span
            key={i}
            className="ui-skel ui-skel-text"
            style={{ width: i === lines - 1 ? '70%' : '100%' }}
          />
        ))}
      </span>
    );
  }
  return (
    <span
      className={cx('ui-skel', `ui-skel-${variant}`, className)}
      style={{ width, height, ...style }}
      aria-hidden="true"
      {...rest}
    />
  );
}
