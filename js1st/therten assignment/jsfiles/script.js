//program for finding tha even & odd numbers in a array and show
let origin = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for(var i=0; i<=origin.length; i++){
    if(origin[i] % 2==0){
        console.log("even numbar:" + origin[i])
    }else{
        console.log("odd numbar:" + origin[i])
    }
}

//program for finding tha even & odd numbers in a array and store tha valu in new array and show

let originvalu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let even = [];
let odd = [];

for (var i = 0; i < originvalu.length; i++) {
    if (originvalu[i] % 2 == 0) {
        even.unshift(originvalu[i]);
    } else {
        odd.push(originvalu[i]);
    }
}
console.log("Even numbers:", even);
console.log("Odd numbers:", odd);

//program for finding tha even & odd numbers in a array and store tha valu in new array and show
let originvalue = [1, 2, 3, 4, 5, 6,7,8,8,9,10,11,12,13,45,56,44,34];
let even1=[];
let odd1=[];
for(var i=1; i < originvalue.length; i++){
    if(originvalue[i] % 2==0){
        even1.push(originvalue[i]);
    }else{
        odd1.push(originvalue[i]);
    }
}
console.log("Even numbers:", even1);
console.log("Odd numbers:", odd1);