// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'repoName',
        message: 'What is you GitHub Repo Name?',
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of you project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief descripton of your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the purpose of your project?',
    },
    {
        type: 'input',
        name: 'contributionGuidlines',
        message: 'How you would like people to contribute?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test your project?',
        // answer: npm run test
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ["MIT", "Apache", "GPLv2", "GPLv3", "Unlicense"]
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(
            (answers) => {
                console.log(answers)
                const   README = generateMarkdown(answers);
                fs.writeFile('README.md', README, (err) =>
                err ? console.log(err) : console.log('Successfully created README!')
              );
            }
        )
}

// Function call to initialize app
init();

