function findSmallest(array) {tion findSmallest(array) {
		let smallest = array[0];
		let smallest_index = 0;
		for (let counter = 1; counter < array.length; counter++) {
			if (array[counter] < smallest) {
				smallest = array[counter];
							smallest_index = counter;
						}
				}
		return smallest_index;
}

function selectionSort(array) {
		let newArray = [];
		let len = array.length;
		for (let counter = 0; counter < len; counter++) {
			let smallest = findSmallest(array);
					newArray.push(array.splice(smallest, 1)[0]);
				}
		return newArray;
}
		}
}
			}
		}
}
