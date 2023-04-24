# Professional README Generator

## Description

A node.js application that uses user input from inquirer to populate a README.md file for user repository. The README.md file is created in the dist directory.

A walkthrough video demonstrating the functionality of the application is given below:

[walkthroughvideo](./src/walkthroughvideo-readme_generator.webm)

The application will be invoked by using the following command:

```bash
node index.js
```

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Table Of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

```bash
npm init
```

```bash
npm i inquirer@8.2.4.
```

## Usage

Run the below command in your root folder of the project:

```bash
node index.js
```

## Contributing

[sadimamaharjan](https://github.com/sadimamaharjan)

## Questions

Please visit my github link to view the project:
<br />
[sadimamaharjan](https://github.com/sadimamaharjan)
<br />
You can reach me on the below email if you have any further questions:
<br />
npsadimamaharjan@gmail.com
