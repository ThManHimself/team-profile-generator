const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-site');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

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
            return writeFile(generatePage(myTeam));
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
            validate: name =>{
                if (name) {
                    return true;
                } else {
                    console.log("Please enter your Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Manager's ID Number?",
            validate: id =>{
                if (id) {
                    return true;
                } else {
                    console.log("Please enter your Manager's Employee ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your Manager's Email Address?",
            validate: email =>{
                if (email) {
                    return true;
                } else {
                    console.log("Please enter your Manager's Email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your Manager's Office Number?",
            validate: officeNumber =>{
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Please enter your Manager's Office Number!");
                    return false;
                }
            }
        },
    ])
    .then(manager => {
        let tempManager = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);
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
            name: 'name',
            message: "What is your Engineer's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter your Engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your Engineer's employee ID Number?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("Please enter your Engineer's employee ID Number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your Engineer's Email Address?",
            validate: email => {
                if (email) {
                    return true;
                } else { 
                    console.log("Please enter your Engineer's email address!");
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your Engineer's Github username?",
            validate: github => {
                if (github) { 
                    return true;
                } else {
                    console.log("Please enter your Engineer's Github username!");
                }
            }
        },
    ])
    .then(engineer => {
        let tempEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
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
            name: 'name',
            message: "What is the name of your Intern?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter your Inter's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your Intern's employee ID Number?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("Please enter your Intern's ID Number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's Email address?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter the Intern's Email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is the intern attending?",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter the name of the school the intern attends!");
                    return false;
                }
            }
        },
    ])
    .then(intern => {
        let tempIntern = new Intern(intern.name, intern.id, intern.email, intern.school);
        myTeam.interns.push(tempIntern);
        console.log(myTeam);
        return promptAddEmployees()
    });
};

function init() {
    promptAddEmployees();
}
init();
// function init() {
//     promptAddEmployees()
//         .then(teamData => {
//             console.log(teamData);
//             return generatePage(teamData);
//         }) 
//         .then(pageHTML => {
//             console.log(pageHTML);
//             return writeFile(pageHTML);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }