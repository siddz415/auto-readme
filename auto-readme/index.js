import inquirer from 'inquirer';
import fs from 'fs';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const questions = [
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation steps?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the project?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Which license does your project use?',
  },
];

function generateReadme(answers) {
  return md.render(`
# ${answers.projectName}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}
`);
}

function createReadme(content) {
  fs.writeFileSync('README.md', content);
  console.log('README.md has been generated successfully!');
}

inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateReadme(answers);
  createReadme(readmeContent);
});
