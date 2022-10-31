// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "none" :
      return ""
      break;

    case "Apache 2.0 License" :
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
      break

    case "The MIT License" :
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      break

    case "Boost Software License 1.0" :
      return "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)"
      break

    case "Eclipse Public Licesne 1.0" :
      return "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)"
      break 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
