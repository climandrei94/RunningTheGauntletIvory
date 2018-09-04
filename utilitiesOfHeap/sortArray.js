const Heap = require('../index')

const sortWithHeapDataStructure = (arrayToSort) => {
  let arrayToHeap = new Heap(arrayToSort)
  let greatestToLeast = []
  let leastToGreatest = []
  for (let i = 0; i < arrayToSort.length; i++) {
    greatestToLeast.push(arrayToHeap.maxHeap.extract())
    leastToGreatest.push(arrayToHeap.minHeap.extract())
  }
  console.log('Array ordonate from gratest to least', greatestToLeast)
  console.log('Array ordonate from least to gratest', leastToGreatest)
}

sortWithHeapDataStructure([15, 20, 145, 30, 1, 10, 33, 50, 31])
