function binarySearch(arrayOfItems, toSearch) {
    let low = 0;
    let high = arrayOfItems.length - 1;

    while (low <= high) {
        let midPoint = Math.floor((low + high) / 2);
        let guess = arrayOfItems[midPoint];

        if (guess === toSearch) {
            return midPoint;
        }
        if (guess > toSearch) {
            high = midPoint - 1;
        } else {
            low = midPoint + 1;
        }
    }

    return -1;
}


const myList = [1,3,5,7,9]
console.log(binarySearch(myList, 3))
