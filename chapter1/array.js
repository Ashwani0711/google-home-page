const array = [1,2,3]
//shallow and deep copy
//to copy an array we use following command 
let copyArray = array //-shallow copy(if we make changes in const array it will done in let copyArray as well and vice versa)

let deepCopyArray = array.concat()//(we can merge 2 different arrays and deep copy-{if we make changes in one it will not reflect in another})

console.log("this is array before push",array);
array.push(456)
console.log("this is after push array", array);
console.log("shallow copy array",copyArray);
console.log("deep copy array",deepCopyArray);

//** to get a value from an array we pass the index (postion) to the array */
console.log(array.length);
console.log(array[0]);
console.log(array[3]);
//-to find a length of array ,first element of array,fourth element of an array
console.log(array[array.length-1]);