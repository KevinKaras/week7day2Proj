// Implement Insertion Sort

function insertionSort(list) {
  for(let i = 1; i < list.length; i++){
    let leadEl = list[i];
    for(var j = i-1; j >= 0 && list[j] > leadEl; j--){
      list[j+1] = list[j];
    }
    list[j+1] = leadEl;
  }
  return list;
}

let testArray = [4, 2, 5, 6, 9, 1]

console.log(insertionSort(testArray));


// psuedo
// mark first element as sorted

// for each unsorted element X

//   'extract' the element X

//   for j = lastSortedIndex down to 0

//     if current element j > X

//       move sorted element to the right by 1

//     break loop and insert X here


module.exports = {
  insertionSort
};
