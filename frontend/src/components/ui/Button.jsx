import React, { forwardRef } from 'react';
import Spinner from './Spinner.jsx';
import { cx } from './cx.js';

const VARIANT_CLASS = {
  primary:   'btn-primary',
  secondary: 'btn-secondary',
  ghost:     'btn-ghost',
  danger:    'btn-danger',
};

const SIZE_CLASS = {
  sm: 'btn-sm',
  md: '',
  lg: 'btn-lg',
};

/**
 * Production-grade button.
 *
 * Features:
 * - Variants: primary | secondary | ghost | danger
 * - Sizes:    sm | md (default) | lg
 * - States:   hover, active, focus-visible (keyboard ring), disabled, loading
 * - Loading:  shows a spinner in place of leftIcon, disables interaction,
 *             sets aria-busy="true" so assistive tech knows it's working.
 * - Polymorphic via `as` — render as <a>, <Link>, etc. while keeping styles.
 *   When polymorphic, disabled becomes aria-disabled (no `disabled` attribute
 *   on non-button elements).
 * - Defaults `type="button"` to avoid accidental form submission.
 * - Accepts a ref (forwardRef) so it composes with Tooltips/Menus.
 *
 * @example
 *   <Button onClick={save}>Save</Button>
 *   <Button variant="ghost" leftIcon={<DownloadIcon />} isLoading>Export</Button>
 *   <Button variant="danger" size="sm" onClick={remove}>Delete</Button>
 *   <Button as="a" href="/help" variant="secondary">Help</Button>
 *
 * @param {Object} props
 * @param {'primary'|'secondary'|'ghost'|'danger'} [props.variant='primary']
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {boolean}        [props.isLoading=false]
 * @param {React.ReactNode}[props.leftIcon]
 * @param {React.ReactNode}[props.rightIcon]
 * @param {boolean}        [props.fullWidth=false]
 * @param {React.ElementType} [props.as='button']
 * @param {boolean}        [props.disabled]
 * @param {string}         [props.type] - Defaults to 'button'. Set 'submit' inside forms.
 */
const Button = forwardRef(function Button(
  {
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    as: Comp = 'button',
    type,
    disabled,
    className,
    children,
    ...rest
  },
  ref
) {
  const isDisabled = disabled || isLoading;
  const elementProps =
    Comp === 'button'
      ? { type: type || 'button', disabled: isDisabled }
      : { 'aria-disabled': isDisabled || undefined, role: rest.role || 'button' };

  return (
    <Comp
      ref={ref}
      className={cx(
        'btn',
        VARIANT_CLASS[variant],
        SIZE_CLASS[size],
        fullWidth && 'btn-full',
        className
      )}
      aria-busy={isLoading || undefined}
      {...elementProps}
      {...rest}
    >
      {isLoading ? <Spinner size="sm" label="Working" /> : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </Comp>
  );
});

export default Button;
