const addMinHeap = require('../tools/minHeap')
const minHeapSort = require('../sort/minHeapSort')
const { size, isEmpty, swap } = require('./commonFunctions')

function MinHeap (initialArray) {
  let minHeapArray = initialArray ? initialArray.length > 1 ? [...minHeapSort(initialArray)] : initialArray : []

  this.size = () => size(minHeapArray)
  this.isEmpty = () => isEmpty(minHeapArray)

  this.addValue = (value) => {
    addMinHeap(minHeapArray, value)
  }

  this.currentHeapArray = () => {
    return minHeapArray
  }

  this.getMin = () => {
    return minHeapArray[0]
  }

  this.extract = () => {
    swap(minHeapArray, 0, minHeapArray.length - 1)
    let minValue = minHeapArray.pop()
    minHeapArray = minHeapSort(minHeapArray)
    return minValue
  }

  this.delete = () => {
    swap(minHeapArray, 0, minHeapArray.length - 1)
    minHeapArray.pop()
    minHeapArray = minHeapSort(minHeapArray)
    return minHeapArray
  }

  this.replace = value => {
    swap(minHeapArray, 0, minHeapArray.length - 1)
    minHeapArray.pop()
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
