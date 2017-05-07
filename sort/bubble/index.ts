/**
 * Name: bubble sort
 * Complexity: O(n2)
 * Stability: stable
 * Applied: array & list
 *
 * algorithm is simple,
 * suitable for small number of data to be sorted
 */

type Compare<T> = (a: T, b: T) => boolean

/**
 * bubble sort an array of type T,
 * it just mutate the original.
 *
 * @template T
 * @param {T[]} arr
 * @param {Compare<T>} [compare=(a, b) => a > b]
 * @returns {T[]}
 */
export function bubbleSortArray<T>(
  arr: T[],
  compare: Compare<T> = (a, b) => a > b,
): T[] {
  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    let swapped = false

    for (let j = 0; j < len - i; j++) {
      if (compare(arr[j], arr[j + 1])) {
        const temp = arr[j + 1]
        swapped = true
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
    if (!swapped) { break }
  }

  return arr
}
