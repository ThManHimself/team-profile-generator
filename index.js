const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-site');
const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([

        // MANAGER QUESTIONS

        {
            type: 'input',
            name: 'name',
            message: "What is your team Manager's name?",
            validate: nameInput =>{
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the Manager's ID Number?",
            validate: nameInput =>{
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Manager's Employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your Manager's Email Address?",
            validate: ManagerNameInput =>{
                if (ManagerNameInput) {
                    return true;
                } else {
                    console.log("Please enter your Manager's Email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is your Manager's Office Number?",
            validate: managerOfficeNumber =>{
                if (managerOfficeNumber) {
                    return true;
                } else {
                    console.log("Please enter your Manager's Office Number!");
                    return false;
                }
            }
        },

        // ADD ADDITIONAL EMPLOYEES???

        {
            type: 'checkbox',
            name: 'addEmployeeCheck',
            message: "Would you like to add another Employee?",
            choices: ['Manager', 'Engineer', 'Intern', "Nope! That's everyone!"]
        },

        // ENGINEER QUESTIONS

        {
            type: 'input',
            name: 'engineerName',
            message: "What is your Engineer's name?",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter your Engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is your Engineer's employee ID Number?",
            validate: engineerId => {
                if (engineerId) {
                    return true;
                } else {
                    console.log("Please enter your Engineer's employee ID Number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is your Engineer's Email Address?",
            validate: engineerEmailAddress => {
                if (engineerEmailAddress) {
                    return true;
                } else { 
                    console.log("Please enter your Engineer's email address!");
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is your Engineer's Github username?",
            validate: engineerGithub => {
                if (engineerGithub) { 
                    return true;
                } else {
                    console.log("Please enter your Engineer's Github username!");
                }
            }
        },
        
        // INTERN QUESTIONS

        {
            type: 'input',
            name: 'internName',
            message: "What is the name of your Intern?",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log("Please enter your Inter's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is your Intern's employee ID Number?",
            validate: internID => {
                if (internID) {
                    return true;
                } else {
                    console.log("Please enter your Intern's ID Number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the Intern's Email address?",
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    console.log("Please enter the Intern's Email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What school is the intern attending?",
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log("Please enter the name of the school the intern attends!");
                    return false;
                }
            }
        },
    ]);
};