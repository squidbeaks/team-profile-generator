// Packages needed for this application
//const fs = require('fs');
const inquirer = require('inquirer');
//const Employee = require('../lib/Employee');
const Manager = require('./lib/Manager.js');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');

// Array of questions for user input
const questions = [
    "What is your team's manager name?",
    "What is your team's manager employee ID?",
    "What is your team's manager email address?",
    "What is your team's manager office number?"
];

const addNewEngineer = () => {
    console.log('You would like to add a new engineer to your team!');
};

const addNewIntern = () => {
    console.log('You would like to add a new intern to your team!');
};

const generateHTML = () => {
    console.log('You are done building out your team!');
};

const addNewTeamMember = () => {
    return inquirer.prompt([{
        type: 'number',
        name: 'newTeamMember',
        message: "Would you like to add an ENGINEER, INTERN or FINISH building your team? Select 1 for ENGINEER, 2 for INTERN, or 3 if you're finished."
        //validate
    }])
    .then(answers => {
        console.log(answers);
        if (answers.newTeamMember === 1) {
            addNewEngineer();
        }
        if (answers.newTeamMember === 2) {
            addNewIntern();
        }
        if (answers.newTeamMember === 3) {
            generateHTML();
        }
    });
};

// Prompt user with questions
const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: questions[0],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: questions[1],
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's employee id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[2],
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: questions[3],
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter the description of the office number!');
                    return false;
                }
            }
        }
    ])

    .then(({ name, id, email, officeNumber }) => {
        this.manager = new Manager(name, id, email, officeNumber, role = 'Manager');

        console.log(this.manager);
        // prompt user to select next option: engineer or intern
        addNewTeamMember();
    });
};

promptUser();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
