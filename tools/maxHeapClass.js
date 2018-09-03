const maxHeap = require('./maxHeap')
const MinHeap = require('./minHeapClass')

class MaxHeap extends MinHeap {
  constructor (initialArray) {
    super(initialArray)
    this.maxHeapArray = initialArray.length > 1 ? maxHeap(initialArray) : initialArray
  }

  static buildMaxHeap (arrayOfValues) {
    return maxHeap(arrayOfValues)
  }

  buildMaxHeap () {
    this.maxHeapArray = maxHeap(this.maxHeapArray)
    return this.maxHeapArray
  }

  currentMaxHeapArray () {
    return this.maxHeapArray
  }

  getMax () {
    return this.maxHeapArray[0]
  }

  extractMax () {
    let maxValue = this.maxHeapArray[0]
    this.maxHeapArray.splice(0, 1)
    this.maxHeapArray = maxHeap(this.maxHeapArray)
    return maxValue
  }

  deleteMax () {
    this.maxHeapArray.splice(0, 1)
    this.maxHeapArray = maxHeap(this.maxHeapArray)
    return this.maxHeapArray
  }

  replaceMaxHeap (value) {
    this.maxHeapArray.splice(0, 1)
    this.maxHeapArray.push(value)
    this.maxHeapArray = maxHeap(this.maxHeapArray)
    return this.maxHeapArray
  }

  mergeMaxHeap (arrayToMerge) {
    return maxHeap([...arrayToMerge, ...this.maxHeapArray])
  }

  meldMaxHeap (arrayToMerge) {
    this.maxHeapArray = maxHeap([...arrayToMerge, ...this.maxHeapArray])
    return this.maxHeapArray
  }
}

module.exports = MaxHeap
