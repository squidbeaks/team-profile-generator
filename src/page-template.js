const generateManager = () => {
    return `
<div class="row">
    <div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">Manager Name</span>
                <p>Role</p>
            </div>
            <div class="card-action">
                <ul>
                    <li>ID: ${idInput}</li>
                    <li> Email: ${emailInput}</li>
                    <li>Office number: ${manager.officeNumInput}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`
};

const generateEngineer = () => {
    return `
    <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Engineer Name</span>
                  <p>Role</p>
                </div>
                <div class="card-action">
                    <ul>
                        <li>ID: ${idInput}</li>
                        <li> Email: ${emailInput}</li>
                        <li>Github Username: ${engineer.githubUserInput}</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>`
};

const generateIntern = () => {
    return `
    <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Intern Name</span>
                  <p>Role</p>
                </div>
                <div class="card-action">
                    <ul>
                        <li>ID: ${idInput}</li>
                        <li> Email: ${emailInput}</li>
                        <li>School: ${intern.schoolInput}</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>`
};

const generatePage = () => {
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
                        <span class="card-title">Leah</span>
                        <p>Manager</p>
                    </div>
                    <div class="card-action">
                        <ul>
                            <li>Employee ID: 1</li>
                            <li><a href = "mailto: leah@test.com">leah@test.com</a></li>
                            <li>Office number: 123</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Tom</span>
                        <p>Engineer</p>
                    </div>
                    <div class="card-action">
                        <ul>
                            <li>Employee ID: 2</li>
                            <li><a href = "mailto: tom@test.com">tom@test.com</a></li>
                            <li>Github: <a href="https://github.com/squidbeaks" target="_blank">squidbeaks</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Steven</span>
                        <p>Intern</p>
                    </div>
                    <div class="card-action">
                        <ul>
                            <li>Employee ID: 3</li>
                            <li><a href = "mailto: steven@test.com">steven@test.com</a></li>
                            <li>School: UCSB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </body>
  </html>`
};

module.exports = generatePage;