// Function to count the number of zeroes in a sorted array
function countZeroes(arr) {  // Added 'arr' parameter
  let firstZero = findFirst(arr)
  if (firstZero === -1) return 0;  // If no zeroes found, return 0

  return arr.length - firstZero  // Return count of zeroes
}

// Binary search function to find the index of the first zero
function findFirst(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2)  // Calculate middle index
    
    // Check if we've found the first zero
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      // If middle element is 1, search in the right half
      return findFirst(arr, mid + 1, high)
    }
    // If middle element is 0 but not the first, search in the left half
    return findFirst(arr, low, mid - 1)
  }
  return -1;  // Return -1 if no zero is found
}

module.exports = countZeroes
