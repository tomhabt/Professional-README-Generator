// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


const generateMarkdown = require('./utils/generateMarkdown.js');

// an array of questions for user input
let questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        // validate property to check that the user provided an input
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
            return false;
             }
        }
    },{
        type: 'input',
        name: 'title',
        message: 'Title of your project? (Required)',
        // validate property to check that the user provided an input
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
            return false;
             }
        }
    },{
        type: 'input',
        name: 'description',
        message: 'Description about your project? (Required)',
        validate: aboutInput => {
            if (aboutInput) {
                return true;
            } else {
                console.log('Please enter a brief description!');
            return false;
             }
        }
    },{
        type: 'confirm',
        name: 'confirmIfContribute',
        message: 'Any contributors participated in your project? (Optional)',
        default: true
    },{
        type: 'input',
        name: 'contribute',
        message: 'Provide Names? (Required) (use comma between names)',
        when: ({ confirmIfContribute }) => confirmIfContribute,
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please enter Names!');
            return false;
             }
        }
    },{
        type: 'input',
        name: 'howContribute',
        message: 'What was the contribution about? (Required) (place a comma between each)',
        when: ({ confirmIfContribute }) => confirmIfContribute,
        validate: howContributeInput => {
            if (howContributeInput) {
                return true;
            } else {
                console.log('Please enter what others contibute towards your project!');
            return false;
             }
        }
    },{
        type: 'input',
        name: 'tableOfContents',
        message: 'Table of Contents will be included in your README file (Press Enter)',
    },{
        type: 'checkbox',
        name: 'methods',
        message: 'Toggle if any kinds of packages or methods that was used to run your app? (Check all that apply)',
        choices: ['FS', 'Inquirer', 'Util', 'jest', 'jQuery', 'Bootstrap', 'Node']
    },{
        type: 'confirm',
        name: 'confirmForInstallation',
        message: 'Any installation required by the user to run your project?',
        default: true,
    },{
        type: 'input',
        name: 'installation',
        message: 'Please specify the installations? (Required)',
        when: ({ confirmForInstallation }) => confirmForInstallation,
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter your Github username!');
            return false;
             }
        }  
    },{
        type: 'input',
        name: 'license',
        message: 'What licence is being used? (Press Enter if None) ',
        
    },{
        type: 'input',
        name: 'badge',
        message: 'What badges is being used? (Press Enter if None)  ',
    },{
        type: 'input',
        name: 'usage',
        message: 'How is the app used for? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('This question has be answered to go to the next');
            return false;
             }
        }  
       
    },{
        type: 'confirm',
        name: 'confirmForSpecialInstruction',
        message: 'Do you have any other special instructions how to use your project?',
        default: true,
    },{
        type: 'input',
        name: 'specialInstruction',
        message: 'Please specify?',
        when: ({ confirmForSpecialInstruction }) => confirmForSpecialInstruction,
        validate: specialInstructionInput => {
            if (specialInstructionInput) {
                return true;
            } else {
                console.log('This question has be answered to go to the next');
            return false;
             }
        }  
    },{
        type: 'checkbox',
        name: 'technologies',
        message: 'What are the technologies you have used in your project? (Check all that apply)',
        choices: ['JavaScript',  'HTML',  'CSS',  'ES6', 'jQuery',  'Bootstrap',  'Node']
    },{
        type: 'input',
        name: 'username',
        message: 'What is your Github username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your Github username!');
            return false;
             }
        }  
    },{
        type: 'input',
          name: 'directoryName',
          message: 'Enter GitHub directory name of your project.(Required)',
          validate: directoryNameInput => {
            if (directoryNameInput) {
              return true;
            } else {
              console.log('You need to enter the  project directory name which appears in your repo!');
              return false;
            }
          }
    },{
        type: 'input',
          name: 'email',
          message: 'Enter your valid email address. (Required)',
          validate: email => {
            if (email) {
            return true;
            } else {
            console.log('You need to enter a valid email address!');
            return false;
          }
        }
    }
];
   
// function to write README file
function writeFile(data) {

    fs.writeFile('./README.md', data, err => {
       
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}

//  function to initialize app
 function init() {
    inquirer.prompt (questions)
    // .then(initializeData => console.log(initializeData))
        .then(function (data) {
            return generateMarkdown(data);
        })
        .then(function (README) {
           return writeFile(README);
        })
        .then(function(data) {
           console.log(data);
        })
        .catch(function(err){
            console.log(err);
        })       
};

// Function call to initialize app
init();
    
