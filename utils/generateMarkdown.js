const fs = require('fs');

//  function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (!data.badge) {
    return '';
  } 
    return ` 
  ## Badges
  This project has a badge.
  ![badmath](${data.badge})
  `
}
//  function if the badge be part of Table of Contents
function includeBadgeInTableOfContents(data) {
  if (data.badge === '') {
    return '';
  } 
    return ` 
  * [Badges](#badges)`
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
  This project is licensed.  
  ![GitHub license](${renderLicenseLink(data)})
  `
}
//  function if the License be part of Table of Contents
function includeLicenseInTableOfContents(data) {
  if (data.license === '') {
    return '';
  } 
    return ` 
  * [License](#license)`
}

// function that returns the Contribution section
// If there is no contributors, return an empty string
function renderContributorsSection(data) {
  if (!data.confirmIfContribute) {
    return '';
  } 
    return ` 
  ## Credits
  Contributors on this Project: **${data.contribute}**     Contributed on: **${data.howContribute}**`
}

// function that returns the installation section
// If there is no installation, return an empty string
function renderInstallationSection(data) {
  if (!data.confirmForInstallation) {
    return '';
  } 
    return ` 
  ## Installation
  The following necessary dependencies must be installed to run the application properly: **${data.installation}**.`
}
//  function if the installation be part of Table of Contents
function includeInstallationInTableOfContents(data) {
  if (!data.confirmForInstallation) {
    return '';
  } 
    return ` 
  * [Installation](#installation)`
}

// function that returns the special instruction section
// If there is no special instruction, return an empty string
function renderSpecialInstructionSection(data) {
  if (!data.confirmForSpecialInstruction) {
    return '';
  } 
    return ` 
  ## Special-instruction
  The following special instruction must me followed: **${data.specialInstruction}**.`
}
//  function if the special instruction be part of Table of Contents
function includeSpecialInstructionInTableOfContents(data) {
  if (!data.confirmForSpecialInstruction) {
    return '';
  } 
    return ` 
  * [Special Instruction](#special-instruction)`
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
  * [Methods](#methods)${includeInstallationInTableOfContents(data)}${includeLicenseInTableOfContents(data)}${includeBadgeInTableOfContents(data)} 
  * [Usage](#usage)${includeSpecialInstructionInTableOfContents(data)}
  * [Technologies Used](#technologies)
  * [Repository URL](#website)
  * [Questions](#questions)
  
  ## Methods
  The following methods were used to run the application properly: **${data.methods}**.
  ${renderInstallationSection(data)}${renderLicenseSection(data)}${renderLicenseBadge(data)}
  ## Usage
  In order to use this app, **${data.usage}**.
  ${renderSpecialInstructionSection(data)}
  ## Technologies 
  The following technologies being used: **${data.technologies}**.
  ## Website
  https://github.com/${data.username}/${data.directoryName} 
  ## Contribution
  Made with ❤️ by ${data.name}.
  ## Questions
  If you have any questions about the repo, open an issue or contact **${data.username}** directly at : ${data.email}
`;
}

module.exports = generateMarkdown;
