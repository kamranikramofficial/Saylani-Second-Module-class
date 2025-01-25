alert("welcome to learn Array")
//array varivabal decleyer simple mathord
let city = ["karachi", "panjab", "multan", "lahore"];
console.log([city])
console.log(city[0])
console.log(city[3])

// array declure value change
let opra = ["karachi", "panjab", "multan", "lahore"];
opra[2] = "pindi";
console.log(opra[0]);

// array declure with different data type
let diff = ["karachi", 1, true,]
console.log(diff[1])

// array in pop method
let pope = ["karachi", "panjab", "multan", "lahore"];
pope.pop();
console.log(pope)



//array in shift method remove first element in array add this is same of pop method but this is remove first element

let shish = ["karachi", "panjab", "multan", "lahore"];
shish.shift();
console.log(shish)


// array in pop method remove two than increse pop commad and remove more  element
let poper = ["karachi", "panjab", "multan", "lahore"];
poper.pop();
poper.pop();
console.log(poper


)
//array in shift method remove first element in array add this is same of pop method but this is remove first element

let shis = ["karachi", "panjab", "multan", "lahore"];
shis.shift();
shis.shift();
console.log(shis)


// array in push method add onei or more element in array 
let pets = ["dog", "cat", "bird"];
pets.push("fish", "gerbil");
console.log(pets)

//aaray in unshift method add one or more element in array add this is same of push method but this is add first element
let pets1 =["dog", "cat", "bird"];
pets1.unshift("fish", "gerbil");
console.log(pets1)


//array in splice method to add and remove ane one in index 
//for example
//varvablename.fuction(index, howmany, value1, value2, value3)
//variname.splice(2,2,"index","add")
//this remove last two element and add two element 
let pets2 = ["dog", "cat", "bird" ,"remv"];
pets2.splice(2, 2, "fish", "gerbil");
console.log(pets2)

//this only remove tha 1 ka bad ka element remove no add
let pats4 =["dog","cat","bird"]
pats4.splice(1)
console.log(pats4)

//this only remove tha onle index number go ap chatha ha remove  no add
let pats5 =["dog","cat","bird"]
pats5.splice(1,1)
console.log(pats5)

//splice practice
let pets6 = ["dog", "cat", "bird"];
pets6.splice(1, 2, "fish",);
console.log(pets6)

let pets7 = ["dog", "cat", "bird"];
pets7.splice(1, 1, "fish","more add");
console.log(pets7)

//array in slice method to gererate tha new array in old array
//varvablename.fuction(start, end)
let pets8 = ["dog", "cat", "bird"];
console.log(pets8.slice(1,3))

