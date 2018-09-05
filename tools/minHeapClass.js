const minHeapSort = require('../sort/minHeapSort')
const { size, addValue, isEmpty } = require('./commonFunctions')

function MinHeap (initialArray) {
  let minHeapArray = initialArray ? initialArray.length > 1 ? [...minHeapSort(initialArray)] : initialArray : []

  this.size = () => size(minHeapArray)
  this.isEmpty = () => isEmpty(minHeapArray)

  this.addValue = (value) => {
    addValue(minHeapArray, value)
    minHeapArray = minHeapSort(minHeapArray)
  }

  this.currentHeapArray = () => {
    return minHeapArray
  }

  this.getMin = () => {
    return minHeapArray[0]
  }

  this.extract = () => {
    let minValue = minHeapArray[0]
    minHeapArray.splice(0, 1)
    minHeapArray = minHeapSort(minHeapArray)
    return minValue
  }

  this.delete = () => {
    minHeapArray.splice(0, 1)
    minHeapArray = minHeapSort(minHeapArray)
    return minHeapArray
  }

  this.replace = value => {
    minHeapArray.splice(0, 1)
    minHeapArray.push(value)
    minHeapArray = minHeapSort(minHeapArray)
    return minHeapArray
  }

  this.merge = arrayToMerge => {
    return minHeapSort([...arrayToMerge, ...minHeapArray])
  }

  this.meld = arrayToMerge => {
    minHeapArray = minHeapSort([...arrayToMerge, ...minHeapArray])
    return minHeapArray
  }
}

module.exports = MinHeap
