// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  const value1 = arr[index1];
  const value2 = arr[index2];
  arr[index1] = value2;
  arr[index2] = value1;
}



function selectionSort(list) {
  let currentMin;
  for (let i = 0; i < list.length; i++){
    currentMin = list[i];
    let minInd = i;
    for(let j = i+1; j < list.length; j++){
      if (list[j] < currentMin){
        minInd = j;
      }
    }
    swap(list, minInd, i)
  }
  return list;
}

let testList = [3, 2, 4, 1, 5];

console.log(selectionSort(testList))

module.exports = {
  selectionSort,
  swap
};
