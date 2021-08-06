const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-site');
const generatePage = require('./src/page-template');


const promptAddEmployees = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployeeCheck',
            message: "Would you like to add another Employee?",
            choices: ['Manager', 'Engineer', 'Intern', "Nope! That's everyone!"],
            default: false,
        },
    ]);
};

const promptManager = myTeam => {

    // if there's no 'managers' array property, create one
    if (!myTeam.managers) {
        myTeam.managers = [];
    }

    console.log(`
    =================
    Add a Manager
    =================
    `);

    return inquirer.prompt([
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
        {
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: "Would you like to add another employee to your team?",
            deafult: false
        },
    ])
    .then(manager => {
        myTeam.managers.push(manager);
        if (manager.addAnotherEmployee) {
            return promptAddEmployees(myTeam)
        } else {
            return myTeam;
        }
    });
};

const promptEngineer = myTeam => {

    // if there's no engineers array property, create one
    if (!myTeam.engineers) {
        myTeam.engineers = [];
    }

    console.log(`
    =================
    Add an Engineer
    =================
    `);
    
    return inquirer.prompt([
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
        {
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: "Would you like to add another employee to your team?",
            deafult: false
        },
    ])
    .then(engineer => {
        myTeam.engineers.push(engineer);
        if (engineer.addAnotherEmployee) {
            return promptAddEmployees(myTeam)
        } else {
            return myTeam;
        }
    });
};

const promptIntern = myTeam => {
    
    // if there's no interns array property, create one
    if (!myTeam.interns) {
        myTeam.interns = [];
    }

    console.log(`
    =================
    Add an Intern
    =================
    `);

    return inquirer.prompt([
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
        {
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: "Would you like to add another employee to your team?",
            deafult: false
        },
    ])
    .then(intern => {
        myTeam.interns.push(intern);
        if (engineer.addAnotherEmployee) {
            return promptAddEmployees(myTeam)
        } else {
            return myTeam;
        }
    });
};

promptAddEmployees()
    .then(addEmployee => {
        if (addEmployee.addEmployeeCheck === 'Manager') {
            promptManager();
        } else if (addEmployee.addEmployeeCheck === 'Engineer') {
            promptEngineer();
        } else if (addEmployee.addEmployeeCheck === 'Intern') {
            promptIntern();
        }
    })
    .then()