const assert = require('assert')
const Heap = require('../index')

describe('Max Heap tests', function () {
  describe('#buildMaxHeap', function () {
    it('should bulild correnctly for a corect heap data structure', function () {
      let heapDataStructure = new Heap([35, 33])
      assert.deepEqual(heapDataStructure.maxHeapArray, [35, 33])
    })

    it('should bulild correnctly for a wrong heap data structure', function () {
      let heapDataStructure = new Heap([33, 35])
      assert.deepEqual(heapDataStructure.maxHeapArray, [35, 33])
    })

    it('should construct a empty data structure', function () {
      let heapDataStructure = new Heap()
      assert.deepEqual(heapDataStructure.maxHeapArray, [])
    })
  })
})