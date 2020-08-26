// Julius Caesar protected his confidential information 
// by encrypting it using a cipher. Caesar's cipher shifts 
// each letter by a number of letters. If the shift takes
//  you past the end of the alphabet, just rotate back to 
// the front of the alphabet. In the case of a rotation by 
// 3, w, x, y and z would map to z, a, b and c.
// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

// For example, the text “There’s-a-starman-waiting-in-the-sky” 
// with the alphabet rotated by 3 will result in an encrypted string 
// of “Wkhuh’v-d-vwdupdq-zdlwlqj-lq-wkh-vnb”.
// Note: The cipher only encrypts letters; symbols, such as -,
//  remain unencrypted.
// Implement a function “caesarCipher” that takes two arguments, 
// a string to encode and the size of the shift to use. It should return
//  the encoded string.

// Example 1:
// Input : X = "Don’t forget to drink your Ovaltine",  Y = "35"

const dictionary = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
}

// function and parameters will be string and number to shift letters
// convert all to lower case
// map array from letters to numbers
// add shift to numbers
// get modulus of alphabet (26 % number) to help with shift after Z
// map back from numbers to letters
// charCodeAt() and fromCharCode() to get code for alphabet

const cipher = (str, num) => {
    let lowerCase = str.toLowerCase().split("")
    const inputNumbers = lowerCase.map(letter => {
        return dictionary[letter] + num
    })
    const inputLetters = inputNumbers.map(number => {
        return dictionary[number]
        // maybe use for loop instead?
    })
}

console.log(cipher("abc", 3))