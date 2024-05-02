// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // Generate and return the license badge based on the license type
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return ""; // Return an empty string if there is no license
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    // Generate and return the license link based on the license type
    return `https://opensource.org/licenses/${license}`;
  } else {
    return ""; // Return an empty string if there is no license
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    // Generate and return the license section of README
    return `## License

This project is licensed under the [${license}](${renderLicenseLink(
      license
    )}).`;
  } else {
    return ""; // Return an empty string if there is no license
  }
}

//function to generate markdown for README
function generateMarkdown(asnwers) {
  const {
    title,
    description,
    instructions,
    usage,
    contribution,
    tests,
    liscence,
    githubUsername,
    email,
  } = asnwers;

  return ` 
# ${title}

${renderLicenseBadge(liscence)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${description}.


## Installation
${instructions}.

## Usage
${usage}.


${renderLicenseSection(liscence)}

## Contributing
${contribution}

## Tests
${tests}

## Questions
- For additional questions, contact [${githubUsername}](https://github.com/${githubUsername}) OR Email [${email}](mailto:${email})
`;
}

//exporting the generate mardown function
module.exports = generateMarkdown;
