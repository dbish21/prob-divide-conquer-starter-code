// Function to find the index of a number in a rotated sorted array
function findRotatedIndex(array, num) {
    var pivot = findPivot(array)
    // If the number is in the first part of the rotated array
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
      return binarySearch(array, num, 0, pivot - 1);
    } else {
      // If the number is in the second part of the rotated array
      return binarySearch(array, num, pivot, array.length - 1);
    }
  }
  
  // Standard binary search function
  function binarySearch(array, num, start, end) {
    if (array.length === 0) return -1;
    if (num < array[start] || num > array[end]) return -1;
  
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (array[mid] === num) {
        return mid;
      } else if (num < array[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
  
  // Function to find the pivot point (where the rotation occurs) in the array
  function findPivot(arr) {
    // If array is not rotated, return 0
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    var start = 0
    var end = arr.length - 1;
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      // If mid element is greater than the next element, we found the pivot
      if (arr[mid] > arr[mid + 1]) return mid + 1
      else if (arr[start] <= arr[mid]) {
        // If left half is sorted, pivot is in right half
        start = mid + 1
      } else {
        // If right half is sorted, pivot is in left half
        end = mid - 1
      }
    }
  }
  
  module.exports = findRotatedIndex
