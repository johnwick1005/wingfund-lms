import React, { forwardRef } from 'react';
import { cx } from './cx.js';

/**
 * Surface container. Compound component — compose with subcomponents to keep
 * markup declarative and avoid prop bloat on the root.
 *
 * Subcomponents:
 *   <Card.Header>   - row container for eyebrow/title + actions
 *   <Card.Eyebrow>  - small uppercase label above title
 *   <Card.Title>    - the heading (renders <h2> by default; override with `as`)
 *   <Card.Action>   - right-aligned action slot inside Header
 *   <Card.Body>     - main content
 *   <Card.Footer>   - bottom section
 *
 * Interactive cards: set `interactive`, optionally with `as="a"` or `as="button"`.
 * Adds hover/focus styling and tabIndex={0} for keyboard reachability.
 *
 * @example
 *   <Card>
 *     <Card.Header>
 *       <div>
 *         <Card.Eyebrow>Recent Disbursals</Card.Eyebrow>
 *         <Card.Title>This week</Card.Title>
 *       </div>
 *       <Card.Action><Button size="sm" variant="ghost">View all</Button></Card.Action>
 *     </Card.Header>
 *     <Card.Body>{children}</Card.Body>
 *   </Card>
 */
const Card = forwardRef(function Card(
  { as: Comp = 'div', interactive = false, className, children, ...rest },
  ref
) {
  return (
    <Comp
      ref={ref}
      className={cx('card', interactive && 'card-interactive', className)}
      tabIndex={interactive && Comp === 'div' ? 0 : undefined}
      {...rest}
    >
      {children}
    </Comp>
  );
});

Card.Header = function CardHeader({ className, children, ...rest }) {
  return <div className={cx('card-h', className)} {...rest}>{children}</div>;
};
Card.Eyebrow = function CardEyebrow({ className, children, ...rest }) {
  return <div className={cx('card-eyebrow', className)} {...rest}>{children}</div>;
};
Card.Title = function CardTitle({ as: H = 'h2', className, children, ...rest }) {
  return <H className={cx('card-title', className)} {...rest}>{children}</H>;
};
Card.Action = function CardAction({ className, children, ...rest }) {
  return <div className={cx('card-action', className)} {...rest}>{children}</div>;
};
Card.Body = function CardBody({ className, children, ...rest }) {
  return <div className={cx('card-body', className)} {...rest}>{children}</div>;
};
Card.Footer = function CardFooter({ className, children, ...rest }) {
  return <div className={cx('card-footer', className)} {...rest}>{children}</div>;
};

export default Card;
