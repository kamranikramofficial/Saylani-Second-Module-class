// In this only use fixed method fixed method to controle tha decimail number 
 
// remove all decimal
var numb = 1.343;
console.log(numb);
// using toFixed() method
numb = numb.toFixed();//remove all decimal
console.log(+numb);//1

// remove 2 decimal places
var numb = 1.343;
console.log(numb);
// using toFixed() method
numb = numb.toFixed(2);//write two  decimal becuse 2 in write tha braket
console.log(+numb);//1

// remove 3 decimal places
var numb = 1.34334;
console.log(numb);
// using toFixed() method
numb = numb.toFixed(3);//write Three  decimal becuse 2 in write tha braket
console.log(+numb);//1.343