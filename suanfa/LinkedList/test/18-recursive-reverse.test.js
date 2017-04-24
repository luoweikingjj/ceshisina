const { Node } = require('../lib/00-utils')
const { buildList } = require('../lib/01-push-and-build-one-two-three')
const { buildRandomArray } = require('./support/helpers')
const { reverse } = require('../lib/18-recursive-reverse')

describe('18 Recursive Reverse', () => {
  createTests(reverse)

  function createTests(fn) {
    describe(fn.name, () => {
      it('should be able to handle a null list.', () => {
        expect(reverse(null)).toEqual(null)
      })

      it('should be able to handle a list of length 1', () => {
        expect(reverse(buildList([1]))).toEqualLinkedList(buildList([1]))
      })

      it('should be able to handle lists of length 2', () => {
        expect(reverse(buildList([1, 3]))).toEqualLinkedList(buildList([3, 1]))
        expect(reverse(buildList([3, 1]))).toEqualLinkedList(buildList([1, 3]))
      })

      it('should be able to handle lists of length 3', () => {
        expect(reverse(buildList([1, 3, 8]))).toEqualLinkedList(buildList([8, 3, 1]))
        expect(reverse(buildList([8, 3, 1]))).toEqualLinkedList(buildList([1, 3, 8]))
        expect(reverse(buildList([1, 8, 3]))).toEqualLinkedList(buildList([3, 8, 1]))
        expect(reverse(buildList([3, 8, 1]))).toEqualLinkedList(buildList([1, 8, 3]))
      })

      it('should be able to handle a list of length 8', () => {
        expect(reverse(buildList([1, 3, 5, 7, 9, 11, 13, 15])))
          .toEqualLinkedList(buildList([15, 13, 11, 9, 7, 5, 3, 1]))

        expect(reverse(buildList([15, 13, 11, 9, 7, 5, 3, 1])))
          .toEqualLinkedList(buildList([1, 3, 5, 7, 9, 11, 13, 15]))

        expect(reverse(buildList([9, 1, 7, 3, 5, 15, 13, 11])))
          .toEqualLinkedList(buildList([11, 13, 15, 5, 3, 7, 1, 9]))

        expect(reverse(buildList([1, 1, 1, 1, 1, 1, 1, 1])))
          .toEqualLinkedList(buildList([1, 1, 1, 1, 1, 1, 1, 1]))
      })

      it('should be able to handle a very large list.', () => {
        const largeArray = buildRandomArray(1000)
        const list = buildList(largeArray.slice())
        const largeReversedArray = largeArray.slice()
        largeReversedArray.reverse()
        expect(reverse(list)).toEqualLinkedList(buildList(largeReversedArray))
      })
    })
  }
})
