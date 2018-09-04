const Heap = require('../index')

const findGratestAndSmallestValue = (arrayToSearch) => {
  let arrayToHeap = new Heap(arrayToSearch)
  console.log('The gratest value from array', arrayToHeap.maxHeap.getMax())
  console.log('The smallest value from array', arrayToHeap.minHeap.getMin())
}

findGratestAndSmallestValue([15, 20, 145, 30, 1, 10, 33, 50, 31])
