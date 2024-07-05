#! /usr/bin/env node

let myPin = 1234;
let myBalance = 10000;

console.log("Welcome to command line ATM");

import inquirer from "inquirer";

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please Enter Your Pin",
    },
]);

if (pinAnswer.pin === myPin) {
    console.log("Correct Pin");

    pinAnswer = await inquirer.prompt([
        {
            name: "Transaction",
            message: "Please Select one of these options",
            type: "list",
            choices: ["Cash Withdrawal", "Check Balance"],
        },
    ]);

    if (pinAnswer.Transaction === "Cash Withdrawal") {
        pinAnswer = await inquirer.prompt([
            {
                name: "Amount",
                type: "number",
                message: "Please Enter Withdrawal Amount",
            },
        ]);
        console.log(
            "Transaction Successfull",
            `\nYour Remaining Balance Is $${myBalance - pinAnswer.Amount}`
        );
    };
    if (pinAnswer.Transaction === "Check Balance") {
        console.log(`Your Account Balance Is $${myBalance.toFixed(2)}`);
    };
    if (pinAnswer.Amount > myBalance) {
        console.log("SORRY! Insufficient Balance");
    };
} else {
    console.log("Wrong Pin");
};
