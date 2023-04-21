// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide description of the project",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide the installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide the usage information",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide the contribution guidelines",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide the test instructions",
  },
  {
    type: "list",
    name: "license",
    message: "Select preferred license",
    choices: ["MIT", "Apache-2.0", "General Public License v3.0"],
  },
  {
    type: "input",
    name: "questions",
    message: "Enter your Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
