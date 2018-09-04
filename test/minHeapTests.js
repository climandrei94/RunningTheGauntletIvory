const assert = require('assert')
const Heap = require('../index')

describe('Min Heap tests', function () {
  describe('#buildMinHeap', function () {
    it('should bulild correnctly for a wrong heap data structure', function () {
      let heapDataStructure = new Heap([35, 33])
      assert.deepEqual(heapDataStructure.minHeapArray, [33, 35])
    })

    it('should bulild correnctly for a corect heap data structure', function () {
      let heapDataStructure = new Heap([35, 33])
      assert.deepEqual(heapDataStructure.minHeapArray, [33, 35])
    })

    it('should construct a empty data structure', function () {
      let heapDataStructure = new Heap()
      assert.deepEqual(heapDataStructure.minHeapArray, [])
    })
  })
})