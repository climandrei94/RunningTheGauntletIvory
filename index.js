const MaxHeap = require('./tools/maxHeapClass')
const MinHeap = require('./tools/minHeapClass')

function Heap (initialArray) {
  this.maxHeap = new MaxHeap(initialArray)
  this.minHeap = new MinHeap(initialArray)
}

module.exports = Heap
