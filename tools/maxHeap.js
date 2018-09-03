const maxHeap = arrayOfValues => {
  var newArray = []

  for (let i = 0; i <= arrayOfValues.length - 1; i++) {
    insert(newArray, arrayOfValues[i])
  }
  newArray.splice(0, 1)
  return newArray
}

function insert (array, valueToInsert) {
  if (array.length <= 0) {
    array.push(null)
    array.push(valueToInsert)
  } else {
    array.push(valueToInsert)
    heapProperty(array, array.length - 1)
  }
}

function heapProperty (array, indexOfItemToCheck) {
  const indexOfItemToCompare = Math.floor(indexOfItemToCheck / 2)
  if (array[indexOfItemToCheck] > array[indexOfItemToCompare] && indexOfItemToCheck !== 1) {
    switchValues(indexOfItemToCheck, indexOfItemToCompare, array)
    heapProperty(array, indexOfItemToCompare)
    return null
  }
  return null
}

function switchValues (index1, index2, array) {
  let aux = array[index1]
  array[index1] = array[index2]
  array[index2] = aux
}

module.exports = maxHeap
