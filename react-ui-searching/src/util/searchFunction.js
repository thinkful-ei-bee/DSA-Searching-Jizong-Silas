
const SearchAlgo = {


LinearSearch(array, value) {
    
    for (let i = 0; i < array.length; i++) {
      
        if (array[i] === value) {
            return i;
        }
    }
    return array.length;
},

binarySearch(array, value, start, end,count=0) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
  
  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];
  
  
  if(start===end){
    return count
  }
  console.log(start,end)
  if (item === value) {
      return [index,count];
  }
  else if (item < value) {
      return SearchAlgo.binarySearch(array, value, index + 1, end,count+1);
  }
  else if (item > value) {
      return SearchAlgo.binarySearch(array, value, start, index - 1,count+1);
  }
  
  }
}

export default SearchAlgo
