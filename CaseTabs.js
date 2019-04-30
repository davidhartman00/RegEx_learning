/* DIRECTIONS
Given the following string:

str = "{key:[[value_1, value_2],[value_3, value4]], 5:10:00AM]}"

Write a function that can convert it to this hash/object:

h = {"key" => [["value_1", "value_2"],["value_3", "value4"]], 5=>"10:00AM"}
*/
function cleanStringToArray(dirtyStr){

    let arrParts = dirtyStr.match(/[^\{\}\[\]\,]+/gi) // break string into array
    let cleanArr = arrParts.map((el,index) => { //loop over elements of array and clean them
            el = el.trim()
            if (index == 0) el = el.substring(0, el.length - 1) //if first index el remove last character 
            return el
        })

        return cleanArr;
}

function buildObject(str) {
    const obj = {} 
    let arr =  cleanStringToArray(str) // run helper function

    obj[arr[0]] = [[arr[1],arr[2]],[arr[3],arr[4]]] //first key value pair
    obj[arr.length - 1] = arr[arr.length - 1] //second key value pair

    return obj
}