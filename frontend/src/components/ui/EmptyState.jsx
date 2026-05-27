import React from 'react';
import { cx } from './cx.js';

/**
 * Empty-state placeholder. Use inside any list or container when there's
 * no data to show. A good empty state explains *why* it's empty and offers
 * a next action — make `description` and `action` count.
 *
 * @example
 *   <EmptyState
 *     icon={<InboxIcon />}
 *     title="No disbursals yet this week"
 *     description="New approvals will appear here as soon as they're paid out."
 *     action={<Button size="sm" onClick={createLoan}>Create loan</Button>}
 *   />
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.icon]
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {React.ReactNode} [props.action]
 */
export default function EmptyState({ icon, title, description, action, className, ...rest }) {
  return (
    <div className={cx('ui-empty', className)} role="status" {...rest}>
      {icon && <div className="ui-empty-icon" aria-hidden="true">{icon}</div>}
      <h3 className="ui-empty-title">{title}</h3>
      {description && <p className="ui-empty-desc">{description}</p>}
      {action && <div className="ui-empty-action">{action}</div>}
    </div>
  );
}
