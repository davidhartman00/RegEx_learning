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
    try {
        return Math.max(           //last operation run - returns the largest number provided
            ...Math.abs(int)//two things: first the spread '...' opporator breaking down the array into elements
                //and Math.abs to convert the given integer into a an integer object to work with .toString()
                .toString(2)    // changes int into a string in the binary format
                .match(/0+/g)   //returnes an array of elements for each regex match
                .map(el => el.length)//loops over the array and returns a new arry consisting of the legth value of each 
            //element in the first array.
        )        
    } catch (error) {
        return 0
    }
}