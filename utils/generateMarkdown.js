// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[!License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)`;
  } else if (license === "ISC") {
    return `[!License: ISC](https://img.shields.io/badge/license-ISC-blue.svg)`;
  } else if (license === "GNUPv3") {
    return `[!License: GNUPv3](https://img.shields.io/badge/license-LGPL_v3-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `![License: MIT](https://opensource.org/license/mit/)`;
  } else if (license === "ISC") {
    return `![License: ISC](https://opensource.org/license/isc-license-txt/)`;
  } else if (license === "GNUPv3") {
    return `![License: GNUPv3](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This application is covered by the MIT license`;
  } else if (license === "ISC") {
    return `This application is covered by the ISC license`;
  } else if (license === "GNUPv3") {
    return `This application is covered by the GNU General Public license`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${this.renderLicenseBadge(data.license)}

## Table Of Contents
- [Project Description](#Description)
- [Project Installation Instructions](#Installation)
- [Project Usage](#Usage)
- [Project Contribution Guidelines](#Contributing)
- [Project Tests](#Tests)
- [Licenses](#License)
- [Questions](#Questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${this.renderLicenseLink(data.license)}
${this.renderLicenseSection(data.license)}

## Questions
${data.github}
${data.email}

`;
}

module.exports = generateMarkdown;
