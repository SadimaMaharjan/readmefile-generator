// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
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
    choices: ["MIT", "Apache-2.0", "ISC", "GNUPv3.0"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
];

const readMeTemplate = (questions) => ``;

inquirer.prompt(questions).then((answers) => {
  const nameOfFile = "README.md";
  writeToFile(nameOfFile, answers);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, readMeTemplate(data), (err) =>
    err ? console.log(err) : console.log("Successfully created README.md file!")
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
