const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project?',
      },
      {
        type: 'input',
        name: 'instalation',
        message: 'What command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', "Apache 2.0", "Boost 1.0", "BSD 3-Clause", "BSD 2-Clause"],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
      },
      {
        type: 'input',
        name: 'question1',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'question2',
        message: 'What is your email adress?',
      },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
