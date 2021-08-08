// create manager card
const generateManager = managerInfo => {
    if(!managerInfo) {
        return '';
    }

    var managerList = '';
	for (var i = 0; i < managerInfo.length; i++) {
		managerList +=
		`
			<!-- Manager Card -->
			<div class="col s12 m4 center">
				<div class="card blue-grey darken-1">
					<div class="card-content white-text">
						<h4>${managerInfo[i].name}</h4>
						<span class="card-title">${managerInfo[i].getRole()}</span>
						<ul>
							<li>Employee ID: ${managerInfo[i].id}</li>
							<li>Email: <a href="mailto:${managerInfo[i].email}">${managerInfo[i].email}</a></li>
							<li>Office Number: ${managerInfo[i].officeNumber}</li>
						</ul>
					</div>
				</div>
			</div>
		`;
	}
	return managerList;
};

// create Engineer card
const generateEngineer = engineerInfo => {
    if (!engineerInfo) {
        return '';
    }

    var engineerList = '';
	for (var i = 0; i < engineerInfo.length; i++) {
		engineerList +=
		`
			<!-- engineer Card -->
			<div class="col s12 m4 center">
				<div class="card blue-grey darken-1">
					<div class="card-content white-text">
						<h4>${engineerInfo[i].name}</h4>
						<span class="card-title">${engineerInfo[i].getRole()}</span>
						<ul>
							<li>Employee ID: ${engineerInfo[i].id}</li>
							<li>Email: <a href="mailto:${engineerInfo[i].email}">${engineerInfo[i].email}</a></li>
							<li>Github: <a href="https://github.com/${engineerInfo[i].github}/">${engineerInfo[i].github}</a></li>
						</ul>
					</div>
				</div>
			</div>
		`;
	}
	return engineerList;
};

// create Intern card
const generateIntern = internInfo => {
    if (!internInfo) {
        return '';
    }

    var internList = '';
	for (var i = 0; i < internInfo.length; i++) {
		internList +=
		`
			<!-- intern Card -->
			<div class="col s12 m4 center">
				<div class="card blue-grey darken-1">
					<div class="card-content white-text">
						<h4>${internInfo[i].name}</h4>
						<span class="card-title">${internInfo[i].getRole()}</span>
						<ul>
							<li>Employee ID: ${internInfo[i].id}</li>
							<li>Email: <a href="mailto:${internInfo[i].email}">${internInfo[i].email}</a></li>
							<li>School: ${internInfo[i].getSchool()}</li>
						</ul>
					</div>
				</div>
			</div>
		`;
	}
	return internList;
};

function generatePage(templateData) {
    const managers = templateData.managers
    const engineers = templateData.engineers
    const interns = templateData.interns

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
            ${generateManager(managers)}
            ${generateEngineer(engineers)}
            ${generateIntern(interns)}
        </div>
    
    
        <!-- Materialize -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>
    `;
}
// export function to generate entire page
module.exports = generatePage;