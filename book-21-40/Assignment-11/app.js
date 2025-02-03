//this is way to print date
var rightNow = new Date();
var theDay = rightNow.getDay();
console.log(rightNow);
console.log(thaDay);


// check if the day is a weekend
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
 var nameOfToday = dayNames[theDay];
 console.log(nameOfToday);

// check if tha month in a year
var monnames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","agu","sep","oct","nov","dec"]
var now = new Date();   
var theMonth = now.getMonth();
var nameOfTheMonth = monnames[theMonth];
console.log(nameOfTheMonth);


 // check if the month is a leap year
 var year = 2016;
 var month = 2;
 var day = 29;
 if (month == 2 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
        console.log("This is a leap year");
    } else {
            console.log("This is not a leap year");
    }



