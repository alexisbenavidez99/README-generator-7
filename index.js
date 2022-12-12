// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
          type: 'input',
          message: 'What is the title of your project?',
          name: 'title',
          validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter a project title.");
                return false;
            }
          },
        },
        {
          type: 'input',
          message: 'What is a description of your project?',
          name: 'description',
          validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description for your project.");
                return false;
            }
          },
        },
        {
          type: 'input',
          message: 'What are the installation instructions?',
          name: 'installation',
          validate: (installationInput) => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter installation instructions.");
                return false;
            }
          },
        },
        {
          type: 'input',
          message: 'What is the usage information?',
          name: 'usage',
          validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter usage information.");
                return false;
            }
          },
        },
        {
          type: 'list',
          message: 'Which license would you like to use?',
          name: 'license',
          choices: [
            "MIT",
            "Other",
            "GPLv2",
            "Apache",
            "GPLv3",
            "BSD 3-clause",
            "Unlicense",
            "BSD 2-clause",
            "LGPLv3",
            "AGPLv3",
          ],
          validate: (licenseInput) => {
            if (licenseInput) {
                return true;
            } else {
                console.log("Please choose a license.");
                return false;
            }
          },
        },
        {
          type: 'input',
          message: 'How can other people contribute to this project?',
          name: 'contributions',
          validate: (contributionsInput) => {
            if (contributionsInput) {
                return true;
            } else {
                console.log("Please enter how people can contribute to the project.");
                return false;
            }
          },
        },
        {
          type: 'input',
          message: 'How can others test your project?',
          name: 'test',
          validate: (testInput) => {
            if (testInput) {
                return true;
            } else {
                console.log("Please enter testing instructions.");
                return false;
            }
          },
        },
        {
          type: 'input',
          message: 'Enter your GitHub username:',
          name: 'username',
          validate: (usernameInput) => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username.");
                return false;
            }
          },
        },
        {
          type: 'input',
          message: 'Enter your email address:',
          name: 'email',
          validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email.");
                return false;
            }
          },
        }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
