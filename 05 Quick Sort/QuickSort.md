# Quick Sort
- Faster than Selection Sort.
- `qsort` built-in in C programming language.

## Process
1. There are some arrays that do not need to be sorted, i.e. An Empty Array and an Array with only 1 element.
`def quickSort(array) {
    if len(array) < 2:
    return array
}`

2. An array with two elements is pretty easier to sort, just check both elements and swap the positions.
3. For three elements, we need to brak down the array until we will reach to a base case.
4. Find elements that are smaller than a PIVOT and greater than a PIVOT, this process is called *Partitioning*.
5. Now we have a sub array of all numbers less than pivot.
6. The PIVOT.
7. A Sub array of all the numbers greater than pivot.
8. At this moment both sub arrays are not sorted and if they are sorted then sorting an array would be pretty easy.
9. If both arrays are sorted we can combine these as following:
    `left array + pivot + right array`
10. As we know the base case then we do not need to worry about sorting the sub arrays, just pass these arrays back to function.
11. 

## PIVOT
1. Select an element from Array, this element will be called _*PIVOT*_.
