// Sort an array
// Given an array of integers, sort the values 
// in order without using native methods like array.sort()

// Example 1:
// Input : [3,4,1]
// Output : [1,3,4]
 
// Example 2:
// Input : [-6,0,56,-100,3]
// Output : [-100,-6,0,3,56]

// Example 3:
// Input : [6,4,8,34,67,0]
// Output : [0,4,6,8,34,67]

// function that contains while loop
// while loop? is boolean sorted
   
 // iterate over array
// define function that tells if array is sorted
// previous value = array index 0
// 
    // in second array iterate over (i=1 instead of 0) item in array, compare current item with previous item
    // if current is > than previous continue, else break

    // return true if array is sorted

// compare first two values, if first bigger than second swap, repeat


const sortedArray = (arr) => {
    let swapMade = false
    let sorted = false
    // let storedValue = 0
    while (!sorted) {
        // let previousValue = arr[0]
        swapMade = false
        for (let i = 1; i <= arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                let storedValue = arr[i - 1]
                arr[i - 1] = arr[i]
                arr[i] = storedValue
                swapMade = true
            } else if (i === arr.length && swapMade === false) {
                    sorted = true
            }
        }
        console.log(arr)
    }
    return arr
}

let array = [2, 6, -133, 0, 3] 
console.log(sortedArray(array)) 
