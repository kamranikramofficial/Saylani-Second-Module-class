// WHY EVENTS 
// A good website is a responsive website. The user does something—clicks a button,
// moves the mouse, presses a key—and something happens. JavaScript gives you many ways to
// respond to the user's needs. 

// REAL WORLD EXAMPLES:
// 1. The user clicks a button saying "Our Guarantee" and an alert displays spelling out the guarantee.

// 2. A page displays a "before" picture of a model. When the user mouses over the picture, it is replaced by an "after" picture of her.

// 3. The user types a number in the MILES field on a form. When she clicks in the KILOMETERS field, the equivalent in KILOMETERS displays.

// 4. The user has entered her email address in a form, and is about to type a comment. When she moves the cursor from the email field to the comment field, JavaScript checks to see if the email address is valid. In this case, it isn't—she's omitted ".com" at the end of the address. A message displays letting her know that she's entered an invalid email address.

// 5. On an online shopping site, there's a picture of a black watch. Next to it is a drop-down list asking the user to choose a color. When she chooses, the color of the watch in the picture changes to that color. 

// WHAT ARE EVENTS? 
// All of these user actions—clicking a button, moving the mouse, moving from one field to another in a form, selecting a different option—are known as events. 

// links we've used so far in html
// <a href="https://www.google.com">Google</a><br> 
// <a href="https://www.w3schools.com">W3 Schools</a>

// inline event handling
// Inline event-handling means that you combine bits of JavaScript with HTML markup. 
// NOTE: WE WON'T BE USING INLINE EVENT-HANDLING. WE'LL BE USING SCRIPTING APPROACH that is we'll write javascript in a separate file same as we did for css.
// <a href="#" onClick="alert('Hi');">Click</a> 
// <a href="#" onclick="alert('Hi')">Say Hi</a>
// <a href="#" onclick="console.log('Hi')">Say Hi</a>

// WARNING
// But there's a problem with the markup above. <a href="#" tells the browser to reload the page. This means that if the user has scrolled down to the link, the click, in addition to running the JavaScript code, will scroll the page back to the top—an action you don't normally want. I've included this flawed approach, using <a href="#", because you'll run into here and there in other people's work, but you'll probably prefer this approach:

// DO THIS INSTEAD
// <a href="JavaScript:void(0)" onClick="alert('Hi');">Click</a>

// call a function from script on link click
// <a href="JavaScript:void(0)" onclick="greetTheUser()">Greet User</a>






function greetTheUser() {
    alert("Helllo user!")
}
