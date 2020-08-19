// One Away
// There are 3 edits that can be done on a string.
// Insert a character
// Delete a character
// Replace a character

// Given 2 string, see if the strings are one edit away from each other

// Write and test a function that determines whether a string is an isogram.
 
// Example 1:
// Input: hat, mat
// Output: True
// Explanation:  h is replaced with m

let exampleOne = "string"
let exampleTwo = ""

let arrayOne = []
let arrayTwo = []

const checkString = (string1) => {
    for (let i = 0; i < string1.length; i++) {
        arrayOne.push(string1[i])
    }
    return arrayOne
}

console.log(checkString("string"))

// h a t and z a t

// sort strings and check against each other
// a h t    and    a t z
// a === a, h !== t, t !== z

// start with minimum length string? if condition isn't reached, return false 
// iterate over string1 and string 2
// use conditional logic to check i of each string
// check lengths of strings with .length to iterate over 
// if one instance is different, return true. else return false
// if characters are equal, how do we differentiate?