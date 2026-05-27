/**
 * WingFund UI primitives — single import surface.
 *
 *   import { Button, Card, Badge, Avatar, EmptyState } from '../components/ui';
 *
 * Design principles:
 *  1. **Tokens over hardcoding.** Every color/spacing comes from CSS variables
 *     in index.css (`--primary`, `--surface`, `--pad`, …) so theme switches
 *     (light/dark) work for free.
 *  2. **Accessibility is non-optional.** Required labels on IconButton,
 *     aria-busy on loading Buttons, role=status on Spinner/EmptyState/Skeleton.
 *  3. **Edge cases up front.** Avatar handles missing/broken images. Badge
 *     handles unknown variants gracefully (drops to neutral classes).
 *  4. **Compound over prop bloat.** Card uses subcomponents (Card.Header etc.)
 *     instead of 10 different rendering props.
 *  5. **Polymorphism via `as`.** Render Button as an <a>, Card as a <section>,
 *     etc., without losing styling or behaviour.
 *  6. **Refs forwarded** everywhere a focus/positioning concern exists.
 */
export { default as Button }     from './Button.jsx';
export { default as IconButton } from './IconButton.jsx';
export { default as Card }       from './Card.jsx';
export { default as Badge }      from './Badge.jsx';
export { default as Avatar }     from './Avatar.jsx';
export { default as Spinner }    from './Spinner.jsx';
export { default as Skeleton }   from './Skeleton.jsx';
export { default as EmptyState } from './EmptyState.jsx';
export { default as Pagination } from './Pagination.jsx';
export { usePagination }         from './usePagination.js';
export { cx } from './cx.js';
