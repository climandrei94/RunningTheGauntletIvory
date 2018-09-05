const heapSort = (arrayOfValues) => {
  let len = arrayOfValues.length
  for (let i = Math.floor((len - 1) / 2); i >= 0; i--) {
    heapify(arrayOfValues, len, i)
  }
  return arrayOfValues
}

const heapify = (arrayOfValues, len, i) => {
  let j = i
  let heap = false
  while ((2 * j + 1 < len) && !heap) {
    let k = 2 * j + 1
    if (k < len && arrayOfValues[k] > arrayOfValues[k + 1]) {
      k++
    }
    if (arrayOfValues[j] > arrayOfValues[k]) {
      swap(arrayOfValues, j, k)
      j = k
    } else {
      heap = true
    }
  }
}

const swap = (arrayOfValues, index1, index2) => {
  let aux = arrayOfValues[index1]
  arrayOfValues[index1] = arrayOfValues[index2]
  arrayOfValues[index2] = aux
}

module.exports = heapSort
