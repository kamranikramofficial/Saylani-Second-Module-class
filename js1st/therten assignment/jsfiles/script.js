// let originvalu = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// for(var i=0; i<=originvalu.length; i++){
//     if(originvalu[i] % 2==0){
//         console.log("even numbar:" + originvalu[i])
//     }else{
//         console.log("odd numbar:" + originvalu[i])
//     }
// }

let originvalu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let even = [];
let odd = [];

for (var i = 0; i < originvalu.length; i++) {
    if (originvalu[i] % 2 == 0) {
        even.unshift(originvalu[i]);
        console.log("even number: " + originvalu[i]);
    } else {
        odd.push(originvalu[i]);
        console.log("odd number: " + originvalu[i]);
    }
}
console.log("Even numbers:", even);
console.log("Odd numbers:", odd);

