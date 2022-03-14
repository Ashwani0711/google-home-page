// there are 7 primitive data type 
// 1-string-it is immutable (whose value cannot be changed)
const xyz = "abc"
// every ops done to string should return a value and the initial string will remain the same
//2-number- they are of two type intiger(int), decimal(float)
const numberInt = 123
const numberFloat = 1.75
//3-boolean-it represents 0(false) and 1(true);
const fifa = true
const uefa = false
// every camparitor always return a boolean;
// 4- null- whose value is not assinged/determined(it is mutable)
const madrid = null
// 5- undefined- whose value is not declared/assigned
/*  naveen **/
let dwivedi
// in above case dwivedi is undefined and naveen give a type error means( not declared)
// 6- symbol- 
// 7 bigint-it also a type of number which takes 16 bit of space in memory whereas Int takes 8 bit of space
// ================================================================================


// non primitive data type
// -array- list of data,mutable could be any data type but recomended to maintain  single data type.
const array = [1,2,"abc"]
//- object - is an index stored data type(key and value pair)
const obj = {
    name: "sunny", // (string)
    age: 28, //(number)
    rank: [1,2,3], //a(array)
    dinner: true //(boolean)

}
//- functions-which executes set of command
// to declare a function we use the following syntax
/* 
    function <name of function>(<argument for function>){
        <our logic>
    }

    note:- function can take multiple ARGUMENT

**/ 
function lala() {
    console.log("lala");
}
function amit(pandit) {
    console.log(pandit);
}
//dedclaration/creation of function
// to run a function we use the following syntax
lala()
//-we run function name lala which print lala

amit(786)  //this function take an argument and print it to pass an argument in paranthesis(brackets)
amit("idgaf")
//set,map,genertor function,promise,higher order function,
