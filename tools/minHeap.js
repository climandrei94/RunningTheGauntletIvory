function addMinHeap (array, valueToInsert) {
  if (array.length <= 0) {
    array.push(valueToInsert)
  } else {
    array.push(valueToInsert)
    heapProperty(array, array.length - 1)
  }
}

function heapProperty (array, indexOfLastItemIntroduced) {
  if (indexOfLastItemIntroduced > 0) {
    let parrent = Math.floor((indexOfLastItemIntroduced - 1) / 2)
    if (array[parrent] > array[indexOfLastItemIntroduced]) {
      switchValues(indexOfLastItemIntroduced, parrent, array)
      heapProperty(array, parrent)
    }
  }
}

function switchValues (index1, index2, array) {
  let aux = array[index1]
  array[index1] = array[index2]
  array[index2] = aux
}

module.exports = addMinHeap
