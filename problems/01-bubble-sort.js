// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++){
//     for(let j = i+1; j < array.length; j++){

//       if (array[j] > array[j+1]){
//         swap(array, j, j+1);
//       }
//     }
//   }
//   return array;
// }

function bubbleSort(array) {
  let swappedVar = true;
  while (swappedVar){
    swappedVar = false; 
    for (let i = 0; i < array.length; i++){
      if (array[i] > array[i+1]){
        swap(array, i, i+1)
        swappedVar = true;
      }
    }
  }
  return array;

}



let testArray = [4, 5, 1, 2, 6, 9]

// console.log(bubbleSort(testArray))


module.exports = {
  bubbleSort,
  swap
};
