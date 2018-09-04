const minHeap = require('./minHeap')
const { size, addValue, isEmpty } = require('./commonFunctions')

function MinHeap (initialArray) {
  let minHeapArray = initialArray ? initialArray.length > 1 ? minHeap(initialArray) : initialArray : []

  this.size = () => size(minHeapArray)
  this.isEmpty = () => isEmpty(minHeapArray)

  this.addValue = (value) => {
    addValue(minHeapArray, value)
    minHeapArray = minHeap(minHeapArray)
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
    minHeapArray = minHeap(minHeapArray)
    return minValue
  }

  this.delete = () => {
    minHeapArray.splice(0, 1)
    minHeapArray = minHeap(minHeapArray)
    return minHeapArray
  }

  this.replace = value => {
    minHeapArray.splice(0, 1)
    minHeapArray.push(value)
    minHeapArray = minHeap(minHeapArray)
    return minHeapArray
  }

  this.merge = arrayToMerge => {
    return minHeap([...arrayToMerge, ...minHeapArray])
  }

  this.meld = arrayToMerge => {
    minHeapArray = minHeap([...arrayToMerge, ...minHeapArray])
    return minHeapArray
  }
}

module.exports = MinHeap
