
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for the user to gather info for README file
const questions = [
     {
        // User Name
        type: 'input',
        name: 'name',
        message: 'What is your Name?',
    },
    {
        // Repo of the project for the README being generated
        type: 'input',
        name: 'repoName',
        message: 'What is the GitHub Repo Name?',
    },
    {
        // Description of the project
        type: 'input',
        name: 'description',
        message: 'Please give a brief descripton of your project',
    },
    {
        // Install and how to use project
        type: 'input',
        name: 'install',
        message: 'How do you install this project?',
    },
    {
        // Why was this project made
        type: 'input',
        name: 'usage',
        message: 'What is the purpose of your project?',
    },
    {
        // How would the user like contirbutions to be added
        type: 'input',
        name: 'contributionGuidlines',
        message: 'How you would like people to contribute?',
    },
    {
        // What tests are to be run
        type: 'input',
        name: 'test',
        message: 'How do you test your project?',
    
    },
    {
        // Which license was selected for this project
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ["MIT", "Apache", "GPLv2", "GPLv3", "Unlicense"]
    },
    {
        // GitHub user name
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub user name?',
    },
    {
        // User email
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// Will be run on the node index.js command in the terminal
function init() {
    inquirer
        .prompt(questions)
        .then(
            (answers) => {
                console.log(answers)
                const   README = generateMarkdown(answers);
                // Create README.md file
                fs.writeFile('README.md', README, (err) =>
                err ? console.log(err) : console.log('Successfully created README!')
              );
            }
        )
}


init();

