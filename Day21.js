// Chunk Array

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const arrLen = arr.length;
    if (arrLen === 0) return [];

    let newArr = [];

    for (let count = 0; count < arrLen; count += size) {
        newArr.push(arr.slice(count, count + size));
    }

    return newArr;
};
