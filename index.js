// *** Include packages needed for this application  ee
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');

const questions = [
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
    validate: (answer) => answer.lenght <1 ? console.log('A valid GitHub repository name is required for a badge'): true,
  },{
    type: 'input',
    message: 'Where are you from?',
    name: 'location',
    validate: (answer) => answer.lenght <1 ? console.log('Please enter a valid project title.'): true,
  },{
    type: 'input',
    message: 'What is your favorite hobby?',
    name: 'hobby',
    validate: (answer) => answer.lenght <1 ? console.log('Please enter a valid project description.'): true,
  },{
    type:'input' ,
    message: 'What is your favorite food?',
    name: 'food',
  },{
    type: 'input',
    message: 'Enter your GitHub username',
    name: 'username',
  },{
    type: 'input',
    message: 'Enter your LinkedIn URL',
    name: 'LinkedIn' ,
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateHTML(data), error => {
    if(error) {
      return console.log(error);
    } else{
      console.log('Your HTML is ready!')
    }
  });
};

// Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function(answers){
    const fileName ='about-me.html'

      writeToFile(fileName, answers);
  });
};

// Function call to initialize app
init();
