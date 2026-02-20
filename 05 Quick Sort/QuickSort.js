function quickSort(arrayNumbers) {
	if(arrayNumbers.length < 2) {
		return arrayNumbers
	} else {
		let pivot = arrayNumbers[0]
		let lessSubArray = []
		let greaterSubArray = []
		for(let element of arrayNumbers.slice(1)) {
			if (element < pivot) {
				lessSubArray.push(element)
			} else {
				greaterSubArray.push(element)
			}
		}
		return [...quickSort(lessSubArray), pivot, ...quickSort(greaterSubArray)]
	}
}

console.log(quickSort([3,5,2,1,4])) 
