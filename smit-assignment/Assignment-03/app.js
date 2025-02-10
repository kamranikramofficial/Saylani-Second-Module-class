var pect = document.getElementById('pick');
function roll (){
let rendom = Math.ceil(Math.random()*6);
console.log(rendom)

pect.src =`img/${rendom}.png`;
}