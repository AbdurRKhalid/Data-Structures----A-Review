function recursive_sum_d_and_c(listOfNumbers) {
	if (listOfNumbers.length === 1) {
		return listOfNumbers[0];
	}
	let firstElement = listOfNumbers.shift()
	return firstElement + recursive_sum_d_and_c(listOfNumbers)
}

console.log(recursive_sum_d_and_c([1,2,3,4]))
