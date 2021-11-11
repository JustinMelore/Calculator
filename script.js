//Tells the user how to use the calculator when you first open the site
alert("Welcome! To use this calculator, simply click the buttons on the display or enter the corresponding keys on your keyboard.");

//Global variable that displays what the user is typing
var screen = document.getElementById("screen");

//Global array that holds valid keys the user can press
const validKeys = ["1","2","3","4","5","6","7","8","9","0","(",")","+","-","*","/","."];

//Global variable that holds the max character count
const maxChars = 22;

//Checks to see if the user entered a valid key for the calculator
function checkValidKey(input) {
    for(let key of validKeys) {
        // if(input.key===key) {
        //     return true;
        // }else if(input.key==="Backspace") {
        //     return "back";
        // }
        switch (input.key) {
            case key :
                return true;
            case "Backspace":
                return "back";
            case "Enter":
            case "=":
                return "=";
            case "c":
                return "c";
        }
    }
    return false;
}

//Adds an event listener for the user pressing keys
document.addEventListener("keydown",addText);

//Adds text based off of inputs from the user
function addText(input) {
    switch(checkValidKey(input)) {
        case true:
            if(screen.textContent.toString().length<maxChars) {
                screen.textContent += input.key;
            }
            break;
        case "back":
            screen.textContent = screen.textContent.substring(0,screen.textContent.length-1);
            break;
        case "=":
            screen.textContent = completeCalc();
            break;
        case "c":
            screen.textContent = "";
            break;
        default:
    }
}

//Adds text based off of the button pressed
function buttonPress(input) {
    let button = document.getElementById(input);
    switch(button.textContent) {
        case "Back":
            screen.textContent = screen.textContent.substring(0,screen.textContent.length-1);
            break;
        case "=":
            screen.textContent = completeCalc();
            break;
        case "C":
            screen.textContent = "";
            break;
        default:
            if(screen.textContent.toString().length<maxChars) {
                screen.textContent += button.textContent;
            }
    }
}

//Takes the user's equation and returns the output of it
function completeCalc() {
    try {
        return eval(document.getElementById("screen").textContent);
    }catch(e) {
        alert("There was a problem calculating your values. Please try re-doing your equation.");
        return "";
    }
}