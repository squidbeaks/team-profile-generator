// Packages needed for this application
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const writeFile = require('./utils/generate-site');
const generatePage = require('./src/page-template');

// Array of questions for user input
const managerQuestions = [
    "What is your team's manager name?",
    "What is your team's manager employee ID?",
    "What is your team's manager email address?",
    "What is your team's manager office number?"
];

const engineerQuestions = [
    "What is the engineer's name?",
    "What is the engineer's employee ID?",
    "What is the engineer's email address?",
    "What is the engineer's GitHub username?"
];

const internQuestions = [
    "What is the intern's name?",
    "What is the intern's employee ID?",
    "What is the intern's email address?",
    "What is the intern's school?"
];

const addNewIntern = () => {
    console.log('You would like to add a new intern to your team!');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: internQuestions[0],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: internQuestions[1],
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's employee id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: internQuestions[2],
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: internQuestions[3],
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        }
    ])

    .then(({ name, id, email, school }) => {
        this.intern = new Intern(name, id, email, school, role = 'Intern');

        console.log(this.intern);
        // prompt user to select next option: engineer or intern
        addNewTeamMember();
    });
};

const addNewEngineer = () => {
    console.log('You would like to add a new engineer to your team!');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: engineerQuestions[0],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: engineerQuestions[1],
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's employee id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: engineerQuestions[2],
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: engineerQuestions[3],
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer github username!');
                    return false;
                }
            }
        }
    ])
    .then(({ name, id, email, github }) => {
        this.engineer = new Engineer(name, id, email, github, role = 'Engineer');

        console.log(this.engineer);
        // prompt user to select next option: engineer or intern
        addNewTeamMember();
    });
};

const addNewTeamMember = () => {
    return inquirer.prompt([{
        type: 'number',
        name: 'newTeamMember',
        message: "Would you like to add an ENGINEER, INTERN or FINISH building your team? Select 1 for ENGINEER, 2 for INTERN, or 3 if you're finished."
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
            return;
        }
    });
};

// Prompt user with questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: managerQuestions[0],
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
            message: managerQuestions[1],
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
            message: managerQuestions[2],
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
            message: managerQuestions[3],
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

promptUser()
    .then(teamInfo => {
        return generatePage(teamInfo);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
