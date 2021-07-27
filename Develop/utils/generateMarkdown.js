const fs = require('fs');

//  function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (!data.badge) {
    return '';
  } 
    return ` 
  ## Badges
  This project has a badge [GitHub badge](${data.badge}). 
  `
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (!data.license) {
    return '';
  } 
    return ` 
    ${data.license}`
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (!data.license) {
    return '';
  } 
    return ` 
  ## License
  This project is licensed under the [GitHub license](${renderLicenseLink(data)}). 
  `
}

// function that returns the Contribution section
// If there is no contributors, return an empty string
function renderContributorsSection(data) {
  if (!data.confirmIfContribute) {
    return '';
  } 
    return ` 
  ## Contributors
  Contributors: **${data.contribute}**     Contributed on: **${data.howContribute}**`
}

//  function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  https://github.com/${data.username}/${data.directoryName}
  ## Description
  ${data.description}
  ${renderContributorsSection(data)}
  ## Table of Contents 
  * [Methods](#methods)
  * [Installation](#installation)
  * [License](#license)
  * [Badges](#badges)
  * [Usage](#usage)
  * [Special Instruction](#special-instruction)
  * [Technologies Used](#technologies)
  * [Repository URL](#website)
  
  ## Methods
  The following methods were used to run the application properly: **${data.methods}**.
  ## Installation
  The following necessary dependencies must be installed to run the application properly: **${data.installation}**.
  ${renderLicenseSection(data)}
  ${renderLicenseBadge(data)}
  ## Usage
  In order to use this app, **${data.usage}**.
  ## Special-instruction
  The following special instruction must me followed: **${data.specialInstruction}**.
  ## Technologies 
  The following technologies being used: **${data.technologies}**.
  ## Website
  https://github.com/${data.username}/${data.directoryName} 
  ## Contribution
  Made with ❤️ by ${data.name}.
`;
}

module.exports = generateMarkdown;
