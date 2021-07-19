// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
let questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
            return false;
             }
        }
    },
    {
        type: 'input',
        name: 'introduction',
        message: 'Provide details about the repository of your project? (Required)',
        validate: introductionInput => {
            if (introductionInput) {
                return true;
            } else {
                console.log('Please enter a brief description!');
            return false;
             }
        }
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide a detail description about your project? (Required)',
        validate: aboutInput => {
            if (aboutInput) {
                return true;
            } else {
                console.log('Please enter a brief description!');
            return false;
             }
        }
    },
    {
        type: 'confirm',
        name: 'confirmIfContribute',
        message: 'Are there any contributors participated in your project?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Describe how others had contributed in your project.',
        when: ({ confirmIfContribute }) => confirmIfContribute
    },
    {
        type: 'confirm',
        name: 'confirmForSpecialsteps',
        message: 'Are there any steps required to run your project?',
        default: true,
    },
    {
        type: 'input',
        name: 'specialSteps',
        message: 'What are these steps required to install your project?',
        when: ({ confirmForSpecialSteps }) => confirmForSpecialSteps
    },
    {
        type: 'confirm',
        name: 'confirmForSpecialInstruction',
        message: 'Do you have any special instructions and examples how to use your project?',
        default: true,
    },
    {
        type: 'input',
        name: 'specialInstructions',
        message: 'Provide these instructions and examples for use. Include screenshots as needed.',
        when: ({ confirmForSpecialInstruction }) => confirmForSpecialInstruction
    },
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'What are the technologies you have used in your project? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
          name: 'link',
          message: 'Enter the GitHub link to your project. (Required)',
          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a project GitHub link!');
              return false;
            }
          }
    } 
];
    // TODO: Create a function to initialize app
    const init = () => inquirer.prompt (questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init()
    .then(initializeData => console.log(initializeData));
