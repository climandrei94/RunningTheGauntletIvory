const maxHeapSort = require('../sort/maxHeapSort')
const { size, addValue, isEmpty } = require('./commonFunctions')

function MaxHeap (initialArray1) {
  let maxHeapArray = initialArray1 ? initialArray1.length > 1 ? [...maxHeapSort(initialArray1)] : initialArray1 : []

  this.size = () => size(maxHeapArray)

  this.isEmpty = () => isEmpty(maxHeapArray)

  this.addValue = (value) => {
    addValue(maxHeapArray, value)
    maxHeapArray = maxHeapSort(maxHeapArray)
  }

  this.currentHeapArray = () => {
    return maxHeapArray
  }

  this.getMax = () => {
    return maxHeapArray[0]
  }

  this.extract = () => {
    let maxValue = maxHeapArray[0]
    maxHeapArray.splice(0, 1)
    maxHeapArray = maxHeapSort(maxHeapArray)
    return maxValue
  }

  this.delete = () => {
    maxHeapArray.splice(0, 1)
    maxHeapArray = maxHeapSort(maxHeapArray)
    return maxHeapArray
  }

  this.replace = value => {
    maxHeapArray.splice(0, 1)
    maxHeapArray.push(value)
    maxHeapArray = maxHeapSort(maxHeapArray)
    return maxHeapArray
  }

  this.merge = arrayToMerge => {
    return maxHeapSort([...arrayToMerge, ...maxHeapArray])
  }

  this.meld = arrayToMerge => {
    maxHeapArray = maxHeapSort([...arrayToMerge, ...maxHeapArray])
    return maxHeapArray
  }
}

module.exports = MaxHeap
