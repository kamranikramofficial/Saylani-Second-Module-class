
let str = "AirForShare is an app that allows users to share files, text, and links across devices on a Wi-Fi network. It can be used on both Android and iOS devices.".toLowerCase();
document.write(str);

let find = prompt("Enter the substring to search for:").toLowerCase();
let cont = 0;

for (var i = 0; i < str.length; i++) {
    if (str.slice(i, i + find.length) == find) {
        cont++;
    }
}

console.log(cont);
document.write("<br>The substring '" + find + "' appears " + cont + " times in the given string.");

let vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelCount = 0;

for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        vowelCount++;
    }
}

console.log(vowelCount);
document.write("<br>The number of vowels in the given string is: " + vowelCount);