/* DIRECTIONS
Given any arbitrary hash, e.g.

h = {"this" => [1,2,3,4,5,6], "that" => ['here', 'there', 'everywhere'], :other => 100}

Write a class that has methods named after each key in the hash, 
where each method returns the value for each key. 
For example, for the hash given above, it should be possible to do the following:

c = Sample.new(h)
c.this == [1,2,3,4,5,6]
c.that == ['here', 'there', 'everywhere']
c.other == 100
*/

class ConvertObj {
    constructor(obj){

        for (prop in obj){
            this[prop] = obj[prop]
        }
    }
    
    
}