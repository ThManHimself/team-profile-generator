const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-site');
const generatePage = require('./src/page-template');

const myTeam = {managers:[], engineers: [], interns: []};

const promptAddEmployees = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployeeCheck',
            message: "Which employee would you like to add?",
            choices: ['Manager', 'Engineer', 'Intern', "There are no more employees to add."],
        },
    ])
    .then(addEmployee => {
        if (addEmployee.addEmployeeCheck === 'Manager') {
            promptManager();
        } 
        if (addEmployee.addEmployeeCheck === 'Engineer') {
            promptEngineer();
        } 
        if (addEmployee.addEmployeeCheck === 'Intern') {
            promptIntern();
        } 
        if (addEmployee.addEmployeeCheck === 'There are no more employees to add.') {
            return myTeam;
        }
    })
};

const promptManager = () => {

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
    ])
    .then(manager => {
        let tempManager = new Manager(manager);
        myTeam.managers.push(tempManager);
        console.log(myTeam);
        return promptAddEmployees();
    });
};

const promptEngineer = () => {

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
    ])
    .then(engineer => {
        let tempEngineer = new Engineer(engineer);
        myTeam.engineers.push(tempEngineer);
        console.log(myTeam);
        return promptAddEmployees()
    });
};

const promptIntern = () => {
    
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
    ])
    .then(intern => {
        let tempIntern = new Intern(intern);
        myTeam.interns.push(tempIntern);
        console.log(myTeam);
        return promptAddEmployees()
    });
};
function init() {
    promptAddEmployees()
        .then(teamData => {
            console.log(teamData);
            generatePage(teamData);
        })
        .then(pageHTML => {
            console.log(pageHTML);
            return writeFile(pageHTML);
        })
        .catch(err => {
            console.log(err);
        });
}
init();