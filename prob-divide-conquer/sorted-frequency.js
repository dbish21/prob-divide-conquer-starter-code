// Function to find the frequency of a number in a sorted array
function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx == -1) return firstIdx;  // If number not found, return -1
    let lastIdx = findLast(arr, num);
    return lastIdx - firstIdx + 1;  // Calculate frequency
}

// Binary search to find the first occurrence of the number
function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2)
        // Check if this is the first occurrence of the number
        if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
            return mid;
        } else if (num > arr[mid]) {
            // If number is greater, search in the right half
            return findFirst(arr, num, mid + 1, high)
        } else {
            // If number is smaller or equal, search in the left half
            return findFirst(arr, num, low, mid - 1)
        }
    }
    return -1  // Number not found
}

// Binary search to find the last occurrence of the number
function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2)
        // Check if this is the last occurrence of the number
        if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            // If number is smaller, search in the left half
            return findLast(arr, num, low, mid - 1)
        } else {
            // If number is greater or equal, search in the right half
            return findLast(arr, num, mid + 1, high)
        }
    }
    return -1  // Number not found
}

module.exports = sortedFrequency
