import { bubbleSortArray } from '../index'

describe('bubble sort an array', () => {
  it('ascending', () => {
    const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    bubbleSortArray(arr)
    result.forEach((item, index) => {
      expect(item).toBe(arr[index])
    })
  })

  it('descending', () => {
    const result = [9, 8, 7, 6, 5, 4, 3, 2, 1]
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    bubbleSortArray(arr, (a, b) => a < b)
    result.forEach((item, index) => {
      expect(item).toBe(arr[index])
    })
  })
})
