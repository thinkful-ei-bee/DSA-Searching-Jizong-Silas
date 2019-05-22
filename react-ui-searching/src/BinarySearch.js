function BinarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  }
  else if (item < value) {
    return BinarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return BinarySearch(array, value, start, index - 1);
  }
}

export default BinarySearch;

// const sorted = [3,4,6,8,11,12,14,16,17,18];
// console.log(BinarySearch(sorted, 14));