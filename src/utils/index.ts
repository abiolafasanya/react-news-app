
// Sort by title ascending
const sortAscending = (arr: any[])=>
  arr.sort((a, b) => a.title.localeCompare(b.title));

// Sort by title descending
const sortDescending = (arr: any[]) =>
  arr.sort((a, b) => b.title.localeCompare(a.title));

// Sort by lowest price
const sortLowest = (arr: any[]) =>
  arr.sort((a, b) => a.price - b.price);

// Sort by highest price
const sortHighest = (arr: any[]) => {
    return arr.sort((a, b) => b.price - a.price);
};

export { sortAscending, sortDescending, sortHighest, sortLowest };
