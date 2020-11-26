// referencing the node packages.
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions to be prompted to generate user response.
const questions = [
    {
        name: "githubUsername",
        message: "What is your GITHUB username?"
    },
    {
        name: "emailAddress",
        message: "What is your email address?"
    },
    {
        name: "title",
        message: "What is the name of your project?"
    },
    {
        name: "projectDescription",
        message: "Write a short description of your project"
    },
    {
        name: "contributors",
        message: "Name the contributor(s) in this project."
    },
    {
        name: "license",
        type: "list",
        message: "What kind of licence will your project have?",
        choices: [
            "MIT",
            "MPL",
            "GPL",
            "AGPL-3.0"
        ]
    },
    {
        name: "dependencies",
        message: "What commands should be run to install the dependecies?"
    },
    {
        name: "usage",
        message: "What command should be applied to run the application?"
    }
    
   

];

// function to write README file
function writeToFile(data) {
    console.log(data)
    fs.writeFile("README.md", generateMarkdown(data), (err) =>
    err ? console.log(err)
        : console.log("Generated a readme.md file.")
        );
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(writeToFile)  
}
// function call to initialize program
init();