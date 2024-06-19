#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"


console.log(chalk.yellowBright("WELLCOME TO ZAHID BANK LIMITED"))
class mybank {
    private balance:number = 50000;
    constructor( accountNumber:number , accountHolder:string){}

deposite (amount:number){
    if (amount > 0 ){
        this.balance += amount;
        console.log(chalk.greenBright(`BALANCE ${amount} DEPOSITE SUCCESSFULLY!`))
        }else {
            console.log(chalk.red("ENTER VALID AMOUNT"))
        }
}

withdraw(amount :number){
    if (amount > this.balance){
        console.log(chalk.redBright("INDUFFICIENT BALANCE"))
    }else if (amount > 0){
   this.balance -= amount;
   console.log(chalk.blueBright(`WITHDRAW SUCCESSFULL ${amount}`))
    
    }
    else {
        console.log(chalk.red("ENTER VALID AMOUNT TO WITHDRAW"))
   }}
getbalance(){
    console.log(chalk.bold.yellow(` YOUR ACCOUNT BALANCE IS ${this.balance}`))
}
}
async function manageAccount(){
    let answer = await inquirer.prompt([{
        name: "enter",
        type :"input",
        message : "ENTER YOUR NAME",
    },

    {
        name : "password",
        type : "input",
        message : "ENTER YOUR ACCOUNT NUMBER",
        validate : (value)=>{
            if (!value || value.length < 4 ){
                return "ENTER EXACT ACCOUNT NUMBER"
            }
            return true
        } 
    }

])
let bank = new mybank(answer.enter,answer.password)

while(true){
let select = await inquirer.prompt({
    name: "one",
    type: "list",
    message : "SELECT OPTION",
    choices : ["deposite amount" , "withdraw amount", "check balance", "exit"]
})

switch(select.one){
    case "deposite amount" :
        let deposite = await inquirer.prompt({
            name: "amount",
            type : "number",
            message: "Enter amount to deposite",
        })
        bank.deposite(deposite.amount)
        break;

        case "withdraw amount" :
            let withdraw = await inquirer.prompt({
                name: "amount",
                type : "number",
                message : "Enter amount to withdraw:",
            })
            bank.withdraw(withdraw.amount)
            break;

            case "check balance" :
                bank.getbalance()
                break;

            case "exit" :
                console.log(chalk.yellow("THANKS! FOR COMING......"))
                return
            }
        }
  }


manageAccount()