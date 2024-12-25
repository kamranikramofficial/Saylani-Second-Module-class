alert(`Welcome to ATM`)
alert(`your password is 4321`)
let enpass = prompt("enter your password")
let password = 4321;
let balance = 10000;
let pre = "your preous amount is";
if (password == enpass) {
    alert("acces has been granded")
    let withdraw = +prompt("enter your amount of withdraw")
    if (balance >= withdraw) {
        let newm = balance - withdraw;
        document.write(pre + newm)

    } else if (balance <= withdraw) {
        alert("plese enter valid amount")


    }
} else {
    alert("acces has been denite")
    alert("Please try agin with true password")
}
alert("Thanks for comming")