import { useEffect, useMemo, useState } from 'react';

/**
 * Stateful pagination over a list of items.
 *
 * Behavior:
 * - Owns the current page (1-indexed) internally; expose `setPage` to consumers.
 * - Recalculates `pageItems` only when inputs change (memoized).
 * - **Auto-clamps**: if `items` shrinks (filter/search), it resets to page 1 so
 *   you never get stuck on an empty page.
 *
 * @example
 *   const { page, setPage, totalPages, pageItems, total, pageSize, from, to } =
 *     usePagination(filteredLoans, 6);
 *   …
 *   {pageItems.map(...)}
 *   <Pagination page={page} totalPages={totalPages} onPageChange={setPage}
 *               totalItems={total} pageSize={pageSize} />
 *
 * @template T
 * @param {T[]} items
 * @param {number} [pageSize=10]
 * @returns {{
 *   page: number,
 *   setPage: (p: number) => void,
 *   totalPages: number,
 *   total: number,
 *   pageSize: number,
 *   pageItems: T[],
 *   from: number,
 *   to: number,
 * }}
 */
export function usePagination(items, pageSize = 10) {
  const [page, setPage] = useState(1);
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  // Reset to page 1 if items shrink past current page.
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);

  return {
    page,
    setPage,
    totalPages,
    total,
    pageSize,
    pageItems,
    from: total === 0 ? 0 : (page - 1) * pageSize + 1,
    to:   Math.min(page * pageSize, total),
  };
}
