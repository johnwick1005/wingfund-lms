import React from 'react';
import { cx } from './cx.js';

/** Build the page-number array with ellipses around the current page. */
function buildPageList(page, totalPages, siblings = 1) {
  const out = [];
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);

  if (totalPages <= 7) return range(1, totalPages);

  const left  = Math.max(2, page - siblings);
  const right = Math.min(totalPages - 1, page + siblings);
  out.push(1);
  if (left > 2) out.push('…');
  out.push(...range(left, right));
  if (right < totalPages - 1) out.push('…');
  out.push(totalPages);
  return out;
}

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/**
 * Accessible pagination. Returns null when there's only one page.
 *
 * Provides:
 * - Prev/Next icon buttons with aria-labels
 * - Smart page-number compaction with ellipses (`1 … 4 5 [6] 7 … 12`)
 * - `aria-current="page"` on the active button
 * - Optional info text ("1–9 of 24") when `totalItems` and `pageSize` are passed
 * - Disabled prev/next at the boundaries
 * - Pairs with `usePagination()` — see that hook for state.
 *
 * @example
 *   const { page, setPage, totalPages, total, pageSize, pageItems } = usePagination(rows, 10);
 *   …
 *   <Pagination
 *     page={page}
 *     totalPages={totalPages}
 *     onPageChange={setPage}
 *     totalItems={total}
 *     pageSize={pageSize}
 *   />
 *
 * @param {Object} props
 * @param {number} props.page
 * @param {number} props.totalPages
 * @param {(page:number)=>void} props.onPageChange
 * @param {number} [props.totalItems]
 * @param {number} [props.pageSize]
 * @param {number} [props.siblings=1] - How many neighbours of current page to show.
 * @param {string} [props.className]
 */
export default function Pagination({
  page,
  totalPages,
  onPageChange,
  totalItems,
  pageSize,
  siblings = 1,
  className,
  ...rest
}) {
  if (!totalPages || totalPages <= 1) return null;

  const pages = buildPageList(page, totalPages, siblings);
  const showInfo = typeof totalItems === 'number' && typeof pageSize === 'number';
  const from = totalItems > 0 ? (page - 1) * pageSize + 1 : 0;
  const to   = Math.min(page * pageSize, totalItems);

  const go = next => {
    const clamped = Math.max(1, Math.min(totalPages, next));
    if (clamped !== page) onPageChange(clamped);
  };

  return (
    <nav className={cx('ui-pagination', className)} aria-label="Pagination" {...rest}>
      {showInfo && (
        <span className="ui-pagination-info">
          {from}–{to} <span className="ui-pagination-info-of">of</span> {totalItems}
        </span>
      )}
      <div className="ui-pagination-controls">
        <button
          type="button"
          className="ui-pagination-btn"
          onClick={() => go(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
        >
          <ChevronLeft />
        </button>

        {pages.map((p, i) =>
          p === '…' ? (
            <span key={`e-${i}`} className="ui-pagination-ellipsis" aria-hidden="true">…</span>
          ) : (
            <button
              key={p}
              type="button"
              className={cx('ui-pagination-btn', page === p && 'is-active')}
              onClick={() => go(p)}
              aria-current={page === p ? 'page' : undefined}
              aria-label={`Page ${p}`}
            >
              {p}
            </button>
          )
        )}

        <button
          type="button"
          className="ui-pagination-btn"
          onClick={() => go(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
        >
          <ChevronRight />
        </button>
      </div>
    </nav>
  );
}
