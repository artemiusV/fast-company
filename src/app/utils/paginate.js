/* eslint-disable indent */

// export function paginate(items, pageNumber, pageSize) {
//   const startIndex = (pageNumber - 1) * pageSize;
//   return [...items].splice(startIndex, pageSize);
// }

import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}