var now = new Date()
var hours = now.getHours();

if (hours === 12) { // noon: mtlb din 12 bje
    console.log(`${hours} PM`);
} else if (hours === 0) { //mid-night: mtlb raat 12 bje
    console.log(`${hours + 12} AM`)
} else if (hours > 11) {
    console.log(`${hours - 12} PM`);
} else {
    console.log(`${hours} AM`);
}