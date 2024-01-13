// . Array Prototype Last

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
   let strippedArray = this.filter(item =>  item !== undefined);

    // Check if the array is not empty after stripping
    if (strippedArray.length > 0) {
        return strippedArray[strippedArray.length - 1]; // Return the last element
    } else {
        return -1; // Return -1 if the array is empty or contains only null/undefined
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
