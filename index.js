// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const { default: Choices } = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
  "Whats the title of the project?",
  "Small Description of your project:",
  "Installation instructions:",
  "Usage Information:",
  "Contribution guidelines:",
  "Test Instructions: ",
  "Which liscence you want to use?",
  "What is your github username?",
  "What is your email address?",
];

function answers(response) {
  console.log(response);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: colors.cyan(questions[0]),
        name: "title",
        validate: function (title) {
          if (!title) {
            console.log(colors.bgRed("\nTitle of the project is mandatory!!!"));
            return false;
          } else if (!isNaN(title)) {
            console.log(colors.bgYellow("\nTitle cannot be a number!!!"));
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: colors.cyan(questions[1]),
        name: "description",
        validate: function (description) {
          if (!description) {
            console.log(
              colors.bgRed(
                "\nPlease enter the description of the project to proceed!!!"
              )
            );
            return false;
          } else if (!isNaN(description)) {
            console.log(colors.bgYellow("\nDescription cannot be a number!!!"));
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: colors.cyan(questions[2]),
        name: "instructions",
        validate: function (instructions) {
          if (!instructions) {
            console.log(
              colors.bgRed(
                "\nPlease enter the instructions of the project to proceed!!!"
              )
            );
            return false;
          } else if (!isNaN(instructions)) {
            console.log(
              colors.bgYellow("\ninstructions cannot be a number!!!")
            );
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: colors.cyan(questions[3]),
        name: "usage",
        validate: function (usage) {
          if (!usage) {
            console.log(
              colors.bgRed(
                "\nPlease enter the usage of the project to proceed!!!"
              )
            );
            return false;
          } else if (!isNaN(usage)) {
            console.log(colors.bgYellow("\nusage cannot be a number!!!"));
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: colors.cyan(questions[4]),
        name: "contribution",
        validate: function (contribution) {
          if (!contribution) {
            console.log(
              colors.bgRed(
                "\nPlease enter the contribution of the project to proceed!!!"
              )
            );
            return false;
          } else if (!isNaN(contribution)) {
            console.log(
              colors.bgYellow("\ncontribution cannot be a number!!!")
            );
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: colors.cyan(questions[5]),
        name: "tests",
        validate: function (tests) {
          if (!tests) {
            console.log(
              colors.bgRed(
                "\nPlease enter the tests of the project to proceed!!!"
              )
            );
            return false;
          } else if (!isNaN(tests)) {
            console.log(colors.bgYellow("\ntests cannot be a number!!!"));
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "list",
        message: colors.cyan(questions[6]),
        name: "liscence",
        choices: ["None", "Apache 2.0", "MIT", "GPL v3.0"],
        validate: function (liscence) {
          if (!liscence) {
            console.log(
              colors.bgRed(
                "\nPlease enter the liscence of the project to proceed!!!"
              )
            );
            return false;
          } else if (!isNaN(liscence)) {
            console.log(colors.bgYellow("\nliscence cannot be a number!!!"));
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: colors.cyan(questions[7]),
        name: "githubUsername",
        validate: function (githubUsername) {
          if (!githubUsername) {
            console.log(
              colors.bgRed("\nPlease enter the github username to proceed!!!")
            );
            return false;
          } else if (!isNaN(githubUsername)) {
            console.log(
              colors.bgYellow("\ngithubusername cannot be a number!!!")
            );
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        message: colors.cyan(questions[7]),
        name: "email",
        validate: function (email) {
          if (!email) {
            console.log(
              colors.bgRed("\nPlease enter the email address to proceed!!!")
            );
            return false;
          } else if (!isNaN(email)) {
            console.log(colors.bgYellow("\nemail cannot be a number!!!"));
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((response) => {
      console.log(response);
    });
}

// Function call to initialize app
init();
