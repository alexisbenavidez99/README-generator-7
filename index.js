// Packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = ({ title, description, installation, usage, license, contributions, test, username, email, badge }) => 
`# ${title}
${badge}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Testing](#test)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Contributions

${contributions}

## Testing 

${test}

## License

${license}

## Questions

For futher questions, please email me at ${email} or my GitHub at https://github.com/${username}

`

// Questions
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
            "Boost",
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
    ])
    .then((answers) => {
        const badge = generateBadge(answers.license);
        const readmeContent = generateMarkdown({...answers, badge});

        fs.writeFile('README.md', readmeContent, (err) =>
          err ? console.log (err) : console.log('Successfully created README!')
        );
    });

    function generateBadge(license) {
        let badge = '';
        if (license === 'MIT') {
            badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        } else if (license === 'Boost') {
            badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        } else if (license === 'Apache') {
            badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        } else if (license === 'GPLv3') {
            badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        } else if (license === 'BSD 3-clause') {
            badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        } else if (license === 'Unlicense') {
            badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
        } else if (license === 'BSD 2-clause') {
            badge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
        } else if (license === 'LGPLv3') {
            badge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
        } else if (license === 'AGPLv3') {
            badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
        }
    };