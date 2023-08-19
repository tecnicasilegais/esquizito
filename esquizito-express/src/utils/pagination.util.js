/*
 * Returns the offset for the current page
 * @param {number} currentPage - The current page, starts with 0
 * @param {number} itemsPerPage - The number of items per page
 */
export function getOffset(currentPage = 0, itemsPerPage = 10) {
  return currentPage * itemsPerPage;
}

export function emptyOrRows(rows) {
  if (rows) {
    return rows;
  }
  return [];
}
