// importing the dependency packages
const inquirer = require("inquirer");
const colors = require("colors");

//node fs module
const fs = require("fs");

//importing util function
const generateMarkdown = require("./utils/generateMarkdown");

// an array of questions for user input
const questions = [
  {
    type: "input",
    message: colors.cyan("What is the title of your project?"),
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
    message: colors.cyan("Small description of your project:"),
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
    message: colors.cyan("Instructions to use:"),
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
        console.log(colors.bgYellow("\ninstructions cannot be a number!!!"));
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: colors.cyan("Usage:"),
    name: "usage",
    validate: function (usage) {
      if (!usage) {
        console.log(
          colors.bgRed("\nPlease enter the usage of the project to proceed!!!")
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
    message: colors.cyan("How to contribute:"),
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
        console.log(colors.bgYellow("\ncontribution cannot be a number!!!"));
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: colors.cyan("tests:"),
    name: "tests",
    validate: function (tests) {
      if (!tests) {
        console.log(
          colors.bgRed("\nPlease enter the tests of the project to proceed!!!")
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
    message: colors.cyan("Which liscence you want to use?"),
    name: "liscence",
    choices: ["unlicense", "Apache_2.0", "MIT", "GPLv3"],
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
    message: colors.cyan("Please Enter you github username:"),
    name: "githubUsername",
    validate: function (githubUsername) {
      if (!githubUsername) {
        console.log(
          colors.bgRed("\nPlease enter the github username to proceed!!!")
        );
        return false;
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: colors.cyan("Please enter your email address:"),
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
];

//function to write README file
function writeToFile(createdFile) {
  console.log("Creating markdown file.....");
  fs.writeFile("./generatedMd.md", createdFile, (error) => {
    error
      ? console.log(colors.bgRed(error))
      : console.log(colors.bgGreen("markdown file successfully created!!!"));
  });
}

//function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    let readme = generateMarkdown(answers);
    writeToFile(readme);
  });
}

// Function call to initialize app
init();
