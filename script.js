//Global variable that displays what the user is typing
var screen = document.getElementById("screen");

//Global array that holds valid keys the user can press
var validKeys = ["1","2","3","4","5","6","7","8","9","0","(",")","+","-","*","/","="];

//Global variable that holds the max character count
const maxChars = 22;

//Checks to see if the user entered a valid key for the calculator
function checkValidKey(input) {
    for(let key of validKeys) {
        if(input.key===key) {
            return true;
        }else if(input.key==="Backspace") {
            return "back";
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
            default:  
        }

}