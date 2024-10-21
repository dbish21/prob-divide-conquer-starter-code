// Function to find the number of rotations in a sorted rotated array
function findRotationCount(arr, low = 0, high = arr.length - 1) {
    // Base case: if array is not rotated
    if (high < low) return 0;
    // Base case: if there's only one element
    if (high === low) return low;

    let mid = Math.floor((low + high) / 2)
  
    // Check if element (mid+1) is minimum element.
    // This case identifies the pivot point of rotation
    if (mid < high && arr[mid + 1] < arr[mid])
      return mid + 1;
  
    // Check if mid itself is minimum element
    // This case also identifies the pivot point
    if (mid > low && arr[mid] < arr[mid - 1]) {
      return mid;
    }
  
    // Decide whether we need to go to left half or right half
    if (arr[high] > arr[mid]) {
      // If the right half is sorted, pivot must be in left half
      return findRotationCount(arr, low, mid - 1);
    }
  
    // If right half is not sorted, pivot must be in right half
    return findRotationCount(arr, mid + 1, high);
  }
  
  module.exports = findRotationCount
