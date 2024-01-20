// Join Two Arrays by ID
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  const map = arr1.reduce((acc, item) => {
    acc.set(item.id, item);
    return acc;
  }, new Map());

  arr2.forEach(item => {
    const existingItem = map.get(item.id) || {};
    map.set(item.id, { ...existingItem, ...item });
  });

  return Array.from(map.values()).sort((a, b) => (a.id < b.id ? -1 : 1)); 
};
