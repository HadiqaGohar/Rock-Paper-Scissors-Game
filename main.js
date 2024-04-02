#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from "chalk";
const choices = ['rock', 'paper', 'scissors'];
async function playGame() {
    const { userChoice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'userChoice',
            message: 'Choose rock, paper, or scissors:',
            choices,
        },
    ]);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(chalk.magentaBright(`You chose: ${userChoice}`));
    console.log(chalk.cyanBright(`Computer chose: ${computerChoice}`));
    if (userChoice === computerChoice) {
        console.log(chalk.bgGray('It\'s a tie!'));
    }
    else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(chalk.bgYellow('You win!'));
    }
    else {
        console.log(chalk.bgRedBright('Computer wins!'));
    }
}
playGame();
