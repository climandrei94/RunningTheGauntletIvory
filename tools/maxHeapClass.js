const maxHeap = require('./maxHeap')
const { size, addValue, isEmpty } = require('./commonFunctions')

function MaxHeap (initialArray) {
  let maxHeapArray = initialArray ? initialArray.length > 1 ? maxHeap(initialArray) : initialArray : []

  this.size = () => size(maxHeapArray)
  this.isEmpty = () => isEmpty(maxHeapArray)

  this.addValue = (value) => {
    addValue(maxHeapArray, value)
    maxHeapArray = maxHeap(maxHeapArray)
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
    maxHeapArray = maxHeap(maxHeapArray)
    return maxValue
  }

  this.delete = () => {
    maxHeapArray.splice(0, 1)
    maxHeapArray = maxHeap(maxHeapArray)
    return maxHeapArray
  }

  this.replace = value => {
    maxHeapArray.splice(0, 1)
    maxHeapArray.push(value)
    maxHeapArray = maxHeap(maxHeapArray)
    return maxHeapArray
  }

  this.merge = arrayToMerge => {
    return maxHeap([...arrayToMerge, ...maxHeapArray])
  }

  this.meld = arrayToMerge => {
    maxHeapArray = maxHeap([...arrayToMerge, ...maxHeapArray])
    return maxHeapArray
  }
}
module.exports = MaxHeap
