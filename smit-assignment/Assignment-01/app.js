function qustion1 (){
  let first = prompt("Enter your first name");
  let second = prompt("Enter your second name");
  alert(first+second+"This is your full name")
}
function qustion2 (){
    let phone= prompt("Enter your phone name and cheak name lenth");
    alert("this is lenth of your phone name "+phone.length)
}

function qustion3 (){
    let name = prompt("Enter your name");
    let inp = prompt("Enter any character of your name and cheak name destinaton");
    let fine ="This is number of location of your caracter but check only one and he is star"+(name.indexOf(inp)+1);
    alert(fine)
}
function qustion4 (){
    let name = prompt("Enter your name");
    let inp = prompt("Enter any character of your name and cheak name destinaton");
    let fine ="This is number of location of your caracter but check olny one in last"+(name.lastIndexOf(inp)+1);
    alert(fine)
}
function qustion5 (){
    let name = prompt("Enter your name");
    let inp = +prompt("Enter you any number you check valu in tis numbar fo this name tha valu start from 0");
    let fine ="tis is your valu in this number" +  " "+name.charAt(inp);
    alert(fine)
}
function qustion6 (){
    let first = prompt("Enter your first name");
    let second = prompt("Enter your second name");
    alert(first.concat(second," ","This is your full name by using concat() mathod")); 
  }
  function qustion7 (){
    let first = prompt("Enter your para and replace one word");
    let second = prompt("Enter your word and replace");
    let third = prompt("Enter your replaced word");
    alert(first.replace(second,third));
  }
