const generateEmployee = employee => {
    if (employee.getRole() === 'Engineer') {
        return `<div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">${employee.name}</span>
                            <p>Engineer</p>
                        </div>
                        <div class="card-action">
                            <ul>
                                <li>Employee ID: ${employee.id}</li>
                                <li><a href = "mailto: ${employee.email}">${employee.email}</a></li>
                                <li>Github: ${employee.github}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
    };

    if (employee.getRole() === 'Intern') {
        return `<div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">${employee.name}</span>
                            <p>Intern</p>
                        </div>
                        <div class="card-action">
                            <ul>
                                <li>Employee ID: ${employee.id}</li>
                                <li><a href = "mailto: ${employee.email}">${employee.email}</a></li>
                                <li>School: ${employee.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
    };
};

const generatePage = manager => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="../src/style.css">
</head>
<body>
    <header>
        <h1> My Team </h1>
    </header>
    <main>
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">${manager.name}</span>
                        <p>Manager</p>
                    </div>
                    <div class="card-action">
                        <ul>
                            <li>Employee ID: ${manager.id}</li>
                            <li><a href = "mailto: ${manager.email}">${manager.email}</a></li>
                            <li>Office number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
            ${generateEmployee(manager.team[0])}
        </div>
    </main>
  </body>
  </html>`
};

module.exports = generatePage;