import inquirer from "inquirer";
const computer_Number = Math.floor(Math.random() * 6 + 1);
const myNumber_Guess = await inquirer.prompt([
    {
        message: "Enter Your Guessed Number between 1 to 6:",
        type: "number",
        name: "myGuessedNumber",
    }
]);
if (myNumber_Guess.myGuessedNumber === computer_Number) {
    console.log("Congratulation You Guessed the same Number.");
}
else {
    console.log("You lose, you guessed the wrong Number.");
}
