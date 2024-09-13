// Load npm readline-sync library
let rlSync = require("readline-sync");


const calculations = ["Addition", "Subtraction", "Multiplication", "Division"];

numbers = () => {
    // Select and display chosen function
    let targetCalc = rlSync.keyInSelect(calculations, "Which function would you like to use?");
    let calcNumber = calculations[targetCalc];
    targetCalc = targetCalc + 1
    if (targetCalc == 0) {
        console.log("Operation cancelled.")
        return false;
    } else {

        console.log(`You have selected [${targetCalc}] ${calcNumber}.`);
        
        // Select numbers to be used by chosen function
        let num1 = rlSync.questionFloat("Please enter your first number: ");
        let num2 = rlSync.questionFloat("Please enter your second number: ");

        // Calculate the result
        let result = null;
        if (targetCalc == 1) {
            result = num1 + num2;
            console.log(`${num1} + ${num2} = ${result}`);
        } else if (targetCalc == 2) {
            result = num1 - num2;
            console.log(`${num1} - ${num2} = ${result}`);
        } else if (targetCalc == 3) {
            result = num1 * num2;
            console.log(`${num1} x ${num2} = ${result}`);
        } else if (targetCalc == 4) {
            result = num1 / num2;
            console.log(`${num1} ÷ ${num2} = ${result}`);
        }

        // Ask if you want to do another calculation
        if (rlSync.keyInYNStrict("Do you want to do another calculation? ")) {
            numbers();
        } else {
            console.log("Closing");
            return false;
        }

        
    }
}

numbers();
