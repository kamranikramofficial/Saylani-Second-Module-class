let welcome = "welcome to fast food restaurant";
alert(welcome)
let thinks = "what you want then click number:\n1. fingerfries\n2. burger\n3. pizza";
alert(thinks);
input = prompt("Which one you order")
if (+input == 1 || input == "fingerfries") {
    alert("your order is fingerfries")
    alert("which one :\n 1.with souse \n 2.without souse \n 3.extra souse")
    finger = prompt("Which one you order")
    if (+finger == 1 || finger == "with souse") {
        alert("your order is fingerfries with souse")
        fifsou = prompt("Wchich pakick you buy")
        alert("One packet of fingerfries with souse is 3$ \n Tha total amuont is" + (3 * fifsou))
        alert("Are you want to pay with \n 1.cash \n 2.card")
        pay = prompt("Which one you pay")
        if (+pay == 1 || pay == "cash") {
            alert("you pay with cash \n thank you")
        } else if (+pay == 2 || pay == "card") {
            alert("you pay with card \n thank you")
        }
    }
    else if (+finger == 2 || finger == "withoutsouse") {
        alert("your order is fingerfries without")
        fifwsou = prompt("Wchich pakick you buy")
        alert("One packet of fingerfries with without souse is 2$ \n Tha total amuont is" + (2 * fifwsou))
        alert("Are you want to pay with \n 1.cash \n 2.card")
        pay = prompt("Which one you pay")
        if (+pay == 1 || pay == "cash") {
            alert("you pay with cash \n thank you")
        } else if (+pay == 2 || pay == "card") {
            alert("you pay with card \n thank you")
        }
    }
    else if (+finger == 3 || finger == "extra souse") {
        alert("your order is fingerfries with extra souse")
        fifesou = prompt("Wchich pakick you buy")
        alert("One packet of fingerfries with extra souse is 4$ \n The total amount is" + (4 * fifesou))
        alert("Are you want to pay with \n 1.cash \n 2.card")
        pay = prompt("Which one you pay")
        if (+pay == 1 || pay == "cash") {
            alert("you pay with cash \n thank you")
        } else if (+pay == 2 || pay == "card") {
            alert("you pay with card \n thank you")
        } else if (+pay == 2 || pay == "card") {
            alert("you pay with card \n thank you")
        }

    }

}
else if (+input == 2 || input == "burger") {
    alert("your order is burger")
    alert("which one you by : \n 1.beefburger \n 2.chickenburger \n 3.veggieburger")
    burger = prompt("Which one you order")
    if (+burger == 1 || burger == "beefburger") {
        alert("your order is beefburger")
        bdurger1 = prompt("which burger you buy")
        alert("One packet of beefburger is 15$ \n The total amount is" + (15 * bdurger1))
        alert("Are you want to pay with \n 1.cash \n 2.card")
        pay = prompt("Which one you pay")
        if (+pay == 1 || pay == "cash") {
            alert("you pay with cash \n thank you")
        } else if (+pay == 2 || pay == "card") {
            alert("you pay with card \n thank you")
        } else if (+pay == 2 || pay == "card") {
            alert("you pay with card \n thank you")
        }
    }
    if (+burger == 2 || burger == "chickenburger") {
        alert("your order is chickenburger")
        bdurger2 = prompt("which burger you buy")
        alert("One packet of beefburger is 11$ \n The total amount is" + (11 * bdurger2))
        alert("Are you want to pay with \n 1.cash \n 2.card")
        pay = prompt("Which one you pay")
        if (+pay == 1 || pay == "cash") {
            alert("you pay with cash \n thank you")
        } else if (+pay == 2 || pay == "card") {
            alert("you pay with card \n thank you")
        } else if (+pay == 2 || pay == "card") {
            alert("you pay with card \n thank you")
        }
    }
    if (+burger == 3 || burger == "veggieburger") {
        alert("your order is veggieburger")
        bdurger3 = prompt("which burger you buy")
        alert("One packet of beefburger is 11$ \n The total amount is" + (11 * bdurger3))
        alert("Are you want to pay with \n 1.cash \n 2.card")
        pay = prompt("Which one you pay")
        if (+pay == 1 || pay == "cash") {
            alert("you pay with cash \n thank you")
        } else if (+pay == 2 || pay == "card") {
            alert("you pay with card \n thank you")
        } else if (+pay == 2 || pay == "card") {
            alert("you pay with card \n thank you")
        }
    }
}
else if (+input == 3 || input == "pizza") {
    alert("your order is pizza")
    alert("wchich flelavor you buy:\n 1.tikha \n 2.fageta")
    pizza = prompt("Which one you order")
    if (+pizza == 1 || pizza == "tikha") {
        alert("your order is tikha pizza")
        alert("which size pizza you buy:\n 1.small \n 2.medium \n 3.large")
        size = prompt("Which one you order")
        if (+size == 1 || size == "small") {
            alert("your order is small pizza")
            am1piza = prompt("which amount of pizza")
            alert(" The one pizza  is 5$\nThe total amount" + (am1piza * 5))
            alert("Are you want to pay with \n 1.cash \n 2.card")
            pay = prompt("Which one you pay")
            if (+pay == 1 || pay == "cash") {
                alert("you pay with cash \n thank you")
            }
            if (+pay == 2 || pay == "card") {
                alert("you pay with card \n thank you")
            }
        }
        if (+size == 2 || size == "medium") {
            alert("your order is medium pizza")
            am1piza = prompt("which amount of pizza")
            alert("The one pizza  is 10$\nThe total amount" + (am1piza * 10))
            alert("Are you want to pay with \n 1.cash \n 2.card")
            pay = prompt("Which one you pay")
            if (+pay == 1 || pay == "cash") {
                alert("you pay with cash \n thank you")
            }
            if (+pay == 2 || pay == "card") {
                alert("you pay with card \n thank you")
            }
        }
        if (+size == 3 || size == "large") {
            alert("your order is large pizza")
            am1piza = prompt("which amount of pizza")
            alert("The one pizza  is 13$\nThe total amount" + (am1piza * 13))
            alert("Are you want to pay with \n 1.cash \n 2.card")
            pay = prompt("Which one you pay")
            if (+pay == 1 || pay == "cash") {
                alert("you pay with cash \n thank you")
            }
            if (+pay == 2 || pay == "card") {
                alert("you pay with card \n thank you")
            }
        }

    }
    if (+pizza == 2 || pizza == "fageta") {
        alert("your order is fageta pizza")
        alert("which size pizza you buy:\n 1.small \n 2.medium \n 3.large")
        size = prompt("Which one you order")
        if (+size == 1 || size == "small") {
            alert("your order is Small pizza")
            am1piza = prompt("which amount of pizza")
            alert("The one pizza  is 5 \n The total amount" + (am1piza * 5))
            alert("Are you want to pay with \n 1.cash \n 2.card")
            pay = prompt("Which one you pay")
            if (+pay == 1 || pay == "cash") {
                alert("you pay with cash \n thank you")
            }
            if (+pay == 2 || pay == "card") {
                alert("you pay with card \n thank you")
            }
        }
        if (+size == 2 || size == "medium") {
            alert("your order is medium pizza")
            am1piza = prompt("which amount of pizza")
            alert("The one pizza  is 10\nThe total amount" + (am1piza * 10))
            alert("Are you want to pay with \n 1.cash \n 2.card")
            pay = prompt("Which one you pay")
            if (+pay == 1 || pay == "cash") {
                alert("you pay with cash \n thank you")
            }
            if (+pay == 2 || pay == "card") {
                alert("you pay with card \n thank you")
            }
        }
        if (+size == 3 || size == "large") {
            alert("your order is large pizza")
            am1piza = prompt("which amount of pizza")
            alert("The one pizza  is 13\nThe total amount" + (am1piza * 13))
            alert("Are you want to pay with \n 1.cash \n 2.card")
            pay = prompt("Which one you pay")
            if (+pay == 1 || pay == "cash") {
                alert("you pay with cash \n thank you")
            }
            if (+pay == 2 || pay == "card") {
                alert("you pay with card \n thank you")
            }
        }

    }

}
alert = ("thank you for your order")



