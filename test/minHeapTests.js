const assert = require('assert')
const Heap = require('../index')

describe('Min Heap tests', function () {
  describe('#buildMinHeap', function () {
    it('should bulild correnctly for a corect heap data structure', function () {
      let heapDataStructure = new Heap([33, 35])
      let heapDataStructureToCompare = [33, 35]
      assert.deepStrictEqual(heapDataStructure.minHeap.currentHeapArray(), heapDataStructureToCompare)
    })

    it('should bulild correnctly for a wrong heap data structure', function () {
      let heapDataStructure = new Heap([35, 33])
      let heapDataStructureToCompare = [33, 35]
      assert.deepStrictEqual(heapDataStructure.minHeap.currentHeapArray(), heapDataStructureToCompare)
    })

    it('should construct a empty data structure', function () {
      let heapDataStructure = new Heap()
      let heapDataStructureToCompare = []
      assert.deepStrictEqual(heapDataStructure.maxHeap.currentHeapArray(), heapDataStructureToCompare)
    })
  })

  describe('#size', function () {
    it('should return value 0 for a empty Heap', function () {
      let heapDataStructure = new Heap()
      let expectedLengthOfDataStructure = 0
      assert.deepStrictEqual(heapDataStructure.maxHeap.size(), expectedLengthOfDataStructure)
    })
    it('should return value 2 for a Heap with 2 values in array', function () {
      let heapDataStructure = new Heap([1, 2])
      let expectedLengthOfDataStructure = 2
      assert.deepStrictEqual(heapDataStructure.maxHeap.size(), expectedLengthOfDataStructure)
    })
    it('should return value 4 for a Heap with 4 values in array', function () {
      let heapDataStructure = new Heap([1, 2, 3, 4])
      let expectedLengthOfDataStructure = 4
      assert.deepStrictEqual(heapDataStructure.maxHeap.size(), expectedLengthOfDataStructure)
    })
  })

  describe('#isEmpty', function () {
    it('should return true for a empty Heap', function () {
      let heapDataStructure = new Heap()
      let expectedBoolValue = true
      assert.deepStrictEqual(heapDataStructure.maxHeap.isEmpty(), expectedBoolValue)
    })
    it('should return false for a non-empty Heap', function () {
      let heapDataStructure = new Heap([1, 2])
      let expectedBoolValue = false
      assert.deepStrictEqual(heapDataStructure.maxHeap.isEmpty(), expectedBoolValue)
    })
  })

  describe('#addValue', function () {
    it('should add value to the Heap and check property of min Heap', function () {
      let heapDataStructure = new Heap([1, 2])
      let expectedContentOfHeap = [1, 2, 3]
      heapDataStructure.minHeap.addValue(3)
      assert.deepStrictEqual(heapDataStructure.minHeap.currentHeapArray(), expectedContentOfHeap)
    })
    it('should change the size after insert', function () {
      let heapDataStructure = new Heap([1, 2])
      let expectedLengthOfDataStructure = 3
      heapDataStructure.minHeap.addValue(3)
      assert.deepStrictEqual(heapDataStructure.minHeap.size(), expectedLengthOfDataStructure)
    })
  })

  describe('#getMin', function () {
    it('should return the smallest value from Heap', function () {
      let heapDataStructure = new Heap([1, 2])
      let expectedValue = 1
      assert.deepStrictEqual(heapDataStructure.minHeap.getMin(), expectedValue)
    })
    it('should return undefined for a empty Heap', function () {
      let heapDataStructure = new Heap()
      assert.deepStrictEqual(heapDataStructure.minHeap.getMin(), undefined)
    })
  })

  describe('#extract', function () {
    it('should be implemented soon',function () {
      assert.deepStrictEqual(1, 1)
    })
  })

  describe('#delete', function () {
    it('should be implemented soon',function () {
      assert.deepStrictEqual(1, 1)
    })
  })

  describe('#replace', function () {
    it('should be implemented soon',function () {
      assert.deepStrictEqual(1, 1)
    })
  })

  describe('#merge', function () {
    it('should be implemented soon',function () {
      assert.deepStrictEqual(1, 1)
    })
  })

  describe('#meld', function () {
    it('should be implemented soon',function () {
      assert.deepStrictEqual(1, 1)
    })
  })
})