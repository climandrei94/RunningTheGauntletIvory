const maxHeap = require('./tools/maxHeap')
const minHeap = require('./tools/minHeap')
const MaxHeap = require('./tools/maxHeapClass')

class Heap extends MaxHeap {
  size () {
    return this.maxHeapArray.length
  }

  addValue (value) {
    this.maxHeapArray.push(value)
    this.minHeapArray.push(value)
    this.maxHeapArray = maxHeap(this.maxHeapArray)
    this.minHeapArray = minHeap(this.minHeapArray)
  }

  isEmpty () {
    return this.maxHeapArray.length === 0
  }

  increaseKey (index) {
    this.maxHeapArray[index]++
    this.minHeapArray[index]++
    this.maxHeapArray = maxHeap(this.maxHeapArray)
    this.minHeapArray = minHeap(this.minHeapArray)
  }

  decreaseKey (index) {
    this.maxHeapArray[index]--
    this.minHeapArray[index]--
    this.maxHeapArray = maxHeap(this.maxHeapArray)
    this.minHeapArray = minHeap(this.minHeapArray)
  }
}

module.export = Heap
