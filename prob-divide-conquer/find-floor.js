// Function to find the floor of a number in a sorted array
function findFloor(arr, num, low = 0, high = arr.length - 1) {
    // Base case: if low > high, floor doesn't exist
    if (low > high) return -1;
    
    // If num is greater than or equal to the largest element, return the largest element
    if (num >= arr[high]) return arr[high];
  
    // Calculate the middle index
    let mid = Math.floor((low + high) / 2)
  
    // If the middle element is equal to num, we've found the floor
    if (arr[mid] === num) return arr[mid];
  
    // If the middle element is the floor value
    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
      return arr[mid - 1];
    }
  
    // If num is less than the middle element, search in the left half
    if (num < arr[mid]) {
      return findFloor(arr, num, low, mid - 1);
    }
  
    // If num is greater than the middle element, search in the right half
    return findFloor(arr, num, mid + 1, high)
  }
  
module.exports = findFloor
