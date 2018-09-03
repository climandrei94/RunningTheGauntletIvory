const minHeap = require('./minHeap')

class MinHeap {
  constructor (initialArray) {
    this.minHeapArray = initialArray.length > 1 ? minHeap(initialArray) : initialArray
  }

  static buildMinHeap (arrayOfValues) {
    return minHeap(arrayOfValues)
  }

  buildMinHeap () {
    this.minHeapArray = minHeap(this.minHeapArray)
    return this.minHeapArray
  }

  currentMinHeapArray () {
    return this.minHeapArray
  }

  getMin () {
    return this.minHeapArray[0]
  }

  extractMin () {
    let minValue = this.minHeapArray[0]
    this.minHeapArray.splice(0, 1)
    this.minHeapArray = minHeap(this.minHeapArray)
    return minValue
  }

  deleteMin () {
    this.minHeapArray.splice(0, 1)
    this.minHeapArray = minHeap(this.minHeapArray)
    return this.minHeapArray
  }

  replaceMinHeap (value) {
    this.minHeapArray.splice(0, 1)
    this.minHeapArray.push(value)
    this.minHeapArray = minHeap(this.minHeapArray)
    return this.minHeapArray
  }

  mergeMinHeap (arrayToMerge) {
    return minHeap([...arrayToMerge, ...this.minHeapArray])
  }

  meldMaxHeap (arrayToMerge) {
    this.minHeapArray = minHeap([...arrayToMerge, ...this.minHeapArray])
    return this.minHeapArray
  }
}

module.exports = MinHeap
