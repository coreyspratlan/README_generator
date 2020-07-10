var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the name of the project?"
  },

  {
    type: "input",
    name: "description",
    message: "Write a description of the project"
  },

  {
    type: "input",
    name: "instillation",
    message: "What are the installation instructions?"
  },

  {
    type: "input",
    name: "name",
    message: "WHat are the usage instructions?"
  },

  {
    type: "list",
    message: "Choose a license",
    name: "license",
    choices: [
      "Adobe License 2.0",  
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revised' License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public Licesne 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General PUblic License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense"
    ]
  },

  {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines?"
  },

  {
    type: "input",
    name: "test",
    message: "What are the test instructions?"
  },
// Questions
  {
    type: "input",
    name: "github",
    message: "What is your GitHub profile?"
  },

  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },

]).then(function(data) {

  var filename = data.name.toLowerCase().split(' ').join('') + ".json";

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
