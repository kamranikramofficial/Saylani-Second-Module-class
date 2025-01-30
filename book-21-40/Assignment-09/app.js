//This chapter i will learn how to change number in to string

// methord one
var integerString = "24"
console.log(typeof integerString);
//Write number in tis plase
var num = Number(integerString);
console.log(typeof num);

// methord two

var float = "24"
console.log(typeof float);
//Write + in tis plase
var num = +(integerString);
console.log(typeof num);

//methord three
var floatingNumString = "24.9876";
console.log(typeof floatingNumString);
var num = Number(floatingNumString);
console.log(typeof num);

// change number to string 
var numberAsNumber = 1234;
console.log(typeof numberAsNumber);
// convert number to string  and than write tis mehord .tostring()
var numberAsString = numberAsNumber.toString();
console.log(typeof numberAsString);