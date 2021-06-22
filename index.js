const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern");

let team = [];


function startingPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your team's name?",
            name: "teamName"
        }
    ])
        .then(function(data){
            const teamName = data.teamName
            team.push(teamName)
            addManager();
        })
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your team manager's name?",
            name: "name"
        },
        {
            type: 'number',
            message: "What is your team manager's ID?",
            name: "id"
        },
        {
            type: 'input',
            message: "What is your team manager's email address?",
            name: "email"
        },

        {
            type: "number",
            message: "What is your team manager's phone number? (10 digits no dashes or spaces)",
            name: "phone"
        },
    ])
        .then(function (data) {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const phone = data.phone;
            const teamMember = new Manager(name, id, email, phone);
            team.push(teamMember);
            addAnother();
        });

}

function addAnother() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices: [
                "Yes, add an engineer", 
                "Yes, add an intern", 
                "No, I'm done"
            ],
            name: "addMemberData"
        }
    ])

        .then(function (data) {

            switch (data.addMemberData) {
                case "Yes, add an engineer":
                    addEngineer();
                    break;

                case "Yes, add an intern":
                    addIntern();
                    break;
                case "No, I'm done":
                    compileTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter engineer's name:",
            name: "name"
        },
        {
            type: 'input',
            message: "What is the engineer's ID?",
            name: "id"
        },
        {
            type: 'input',
            message: "What is the engineer's email address?",
            name: "email"
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub profile?",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const github = data.github;
            const teamMember = new Engineer(name, id, email, github);
            team.push(teamMember);
            addAnother();
        });

};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is intern's name?",
            name: "name"
        },
        {
            type: 'input',
            message: "What is intern's ID?",
            name: "id"
        },
        {
            type: 'input',
            message: "What is intern's email address?",
            name: "email"
        },
        {
            type: 'input',
            message: "What is intern's school?",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const school = data.school;
            const teamMember = new Intern(name, id, email, school);
            team.push(teamMember);
            addAnother();
        });

};

function compileTeam() {
    const htmlArray = [];
    const htmlBeginning = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
            <title>My Team</title>
    </head>
    
    <body>
        <header class="container-fluid bg-success text-white p-5 mb-5">
            <h1 class="text-center display-4">My Team</h1>
        </header>
        <main class="container">
            <div class="row">
    `;
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < team.length; i++) {
        let object = `
        <div class="col d-flex justify-content-around">
        <div class="card mb-4" style="width: 18rem;">
                    <div class="card-body bg-info">
                        <h2 class="card-title">${team[i].name}</h2>
                        <h3 class="card-subtitle mb-2 h4">${team[i].title}</h3>
                    </div>
                    <div class="bg-light">
                        <ul class="list-group m-3">
                            <li class="list-group-item">ID: ${team[i].id}</li>
                            <li class="list-group-item">Email: ${team[i].email}</li>
        `;
        if (team[i].phone) {
            object += `
            <li class="list-group-item">${team[i].phone}</li></ul>
            `
        };
        if (team[i].github) {
            object += `
            <li class="list-group-item">GitHub: <a href="https://github.com/${team[i].github}">${team[i].github}</a></li></ul>
            `
        };
        if (team[i].school) {
            object += `
            <li class="list-group-item">School: ${team[i].school}</li></ul>
            `
        };
        object += `
        </div>
        </div>
        </div>
        `;
        htmlArray.push(object);
    };

    const htmlEnd = `
    </div>
    </main>
    </body>
    </html>
    `;
    htmlArray.push(htmlEnd);

    console.log("Team page has been created!");

    fs.writeFile(`./src/team-profile.html`, htmlArray.join(""), function (err) {
        
    });
};

startingPrompt();