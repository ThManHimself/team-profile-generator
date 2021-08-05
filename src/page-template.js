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
                    <li>ID: ${manager.id}</li>
                    <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li>Office Number: ${manager.officeNumber}</li>
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
                <h4>${engineer.name}</h4>
                <span class="card-title">${engineer.getRole()}</span>
                <ul>
                    <li>ID: ${engineer.id}</li>
                    <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
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
                <h4>${intern.name}</h4>
                <span class="card-title">${intern.getRole()}</span>
                <ul>
                    <li>ID: ${intern.id}</li>
                    <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li>Office Number: ${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>

    `;
};

// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const { manager, engineer, intern } = templateData;

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
            ${generateManager(manager)}    
            ${generateEngineer(engineer)}
            ${generateIntern(intern)}
        </div>
    
    
        <!-- Materialize -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>
    `;
};