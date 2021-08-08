// create manager card
const generateManager = managerInfo => {
    return `
    <!-- Manager Card -->
    <div class="col s12 m4 center">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <h4>${manager.name}</h4>
                <span class="card-title">${manager.getRole()}</span>
                <ul>
                    <li>ID: ${manager.managerId}</li>
                    <li>Email: <a href="mailto:${manager.managerEmail}">${manager.managerEmail}</a></li>
                    <li>Office Number: ${manager.managerOfficeNumber}</li>
                </ul>
            </div>
        </div>
    </div>

    `;
};

// create Engineer card
const generateEngineer = engineerInfo => {
    if (!engineerInfo) {
        return '';
    }

    return `
    <!-- Engineer Card -->
    <div class="col s12 m4 center">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <h4>${engineer.engineerName}</h4>
                <span class="card-title">${engineer.getRole()}</span>
                <ul>
                    <li>ID: ${engineer.engineerId}</li>
                    <li>Email: <a href="mailto:${engineer.engineerEmail}">${engineer.engineerEmail}</a></li>
                    <li>GitHub: <a href="https://github.com/${engineer.engineerGithub}">${engineer.engineerGithub}</a></li>
                </ul>
            </div>
        </div>
    </div>

    `;
};

// create Intern card
const generateIntern = internInfo => {
    if (!internInfo) {
        return '';
    }

    return `
    <!-- Intern Card -->
    <div class="col s12 m4 center">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <h4>${intern.internName}</h4>
                <span class="card-title">${intern.getRole()}</span>
                <ul>
                    <li>ID: ${intern.internId}</li>
                    <li>Email: <a href="mailto:${intern.internEmail}">${intern.internEmail}</a></li>
                    <li>Office Number: ${intern.internSchool}</li>
                </ul>
            </div>
        </div>
    </div>

    `;
};

function generatePage(templateData) {
    const { managers, engineers, interns } = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <!-- Materialize css -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
        <!-- Website Header -->
        <header>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">My Team</a>
                </div>
            </nav>
        </header>
    
        <!-- Employee Cards -->
        <div class="row">
            ${managers.map(manager=> generateManager(manager)).join('')}
            ${engineers.map(engineer => generateEngineer(engineer)).join('')}
            ${interns.map(intern => generateIntern(intern)).join('')}    
        </div>
    
    
        <!-- Materialize -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>
    `;
}
// export function to generate entire page
module.exports = generatePage;

// (templateData = {managers:[], engineers: [], interns: []}) => {
//     // destructure page data by section
//     const { managers, engineers, interns } = templateData;

//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>My Team</title>
//         <!-- Materialize css -->
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
//     </head>
//     <body>
//         <!-- Website Header -->
//         <header>
//             <nav>
//                 <div class="nav-wrapper">
//                     <a href="#" class="brand-logo center">My Team</a>
//                 </div>
//             </nav>
//         </header>
    
//         <!-- Employee Cards -->
//         <div class="row">
//             ${managers.map(manager=> generateManager(manager)).join('')}
//             ${engineers.map(engineer => generateEngineer(engineer)).join('')}
//             ${interns.map(intern => generateIntern(intern)).join('')}    
//         </div>
    
    
//         <!-- Materialize -->
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
//     </body>
//     </html>
//     `;
// };