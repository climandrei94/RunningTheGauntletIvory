const addMaxHeap = require('../tools/maxHeap')
const maxHeapSort = require('../sort/maxHeapSort')
const { size, isEmpty, swap } = require('./commonFunctions')

function MaxHeap (initialArray1) {
  let maxHeapArray = initialArray1 ? initialArray1.length > 1 ? [...maxHeapSort(initialArray1)] : initialArray1 : []

  this.size = () => size(maxHeapArray)

  this.isEmpty = () => isEmpty(maxHeapArray)

  this.addValue = (value) => {
    addMaxHeap(maxHeapArray, value)
  }

  this.currentHeapArray = () => {
    return maxHeapArray
  }

  this.getMax = () => {
    return maxHeapArray[0]
  }

  this.extract = () => {
    swap(maxHeapArray, 0, maxHeapArray.length - 1)
    let maxValue = maxHeapArray.pop()
    maxHeapArray = maxHeapSort(maxHeapArray)
    return maxValue
  }

  this.delete = () => {
    swap(maxHeapArray, 0, maxHeapArray.length - 1)
    maxHeapArray.pop()
    maxHeapArray = maxHeapSort(maxHeapArray)
    return maxHeapArray
  }

  this.replace = value => {
    swap(maxHeapArray, 0, maxHeapArray.length - 1)
    maxHeapArray.pop()
    maxHeapArray.push(value)
    maxHeapArray = maxHeapSort(maxHeapArray)
    return maxHeapArray
  }

  this.merge = arrayToMerge => {
    return maxHeapSort([...arrayToMerge, ...maxHeapArray])
  }

  this.meld = arrayToMerge => {
    maxHeapArray = [...maxHeapSort([...arrayToMerge, ...maxHeapArray])]
    return maxHeapArray
  }
}

module.exports = MaxHeap
