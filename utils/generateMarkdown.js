// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about the repository, open an issue or contact [${data.username}](https://github.com/${data.username}) directly at ${data.email}.
`;
}

module.exports = generateMarkdown;
