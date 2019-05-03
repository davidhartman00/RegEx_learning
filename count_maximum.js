/* DRIECTIONS
3. (Ruby/JS) Count maximum string of zeroes
A string of zeros within a positive integer N is any maximal sequence of consecutive zeros that is 
surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a string of zeros of length 2. The 
number 529 has binary representation 1000010001) and contains two zero gaps: one of length 4 and one of 
length 3. The number 20 has binary representation 10100 and contains one gap of length 1. The number 15 
has binary representation 1111 and has no zero gaps.

Write a function called zeros_count that, given a positive integer N, returns the length of its longest 
zeros. The function should return 0 if N doesn’t contain any zeroes.  Describe the algorithm’s time 
complexity and space complexity.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001
*/

function zeros_count(int){

    let arr1 = Math.abs(int) //Math.abs to convert the given integer into a an integer object to work with .toString()
        .toString(2)    // changes int into a string in the binary format
        .match(/0+/g)   //returnes an array of elements with each element a regex match

    arr2 = arr1 ? arr1.map(el => el.length) : [0] //to be sure there are regex matches, if so 
                                                // create new arrary of lengths. If not an array of zero

    return Math.max(...arr2) //return the largest number from the secound arr
 
}

// Time complexity: as there is only one loop, .map(), the time complexity is O(n) a linear algorithm.
// Space complexity: as int gets larger the binary string from .toString() grows. This is a space complexity of 0(n log n) 



