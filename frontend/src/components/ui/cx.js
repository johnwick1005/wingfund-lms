/**
 * Concatenates class names, filtering out falsy values.
 * Tiny utility kept in-tree to avoid pulling clsx/classnames as a dependency.
 *
 * @example
 *   cx('btn', isPrimary && 'btn-primary', size === 'sm' && 'btn-sm')
 *
 * @param  {...(string|false|null|undefined)} args
 * @returns {string}
 */
export function cx(...args) {
  let out = '';
  for (const a of args) {
    if (!a) continue;
    out = out ? out + ' ' + a : a;
  }
  return out;
}
