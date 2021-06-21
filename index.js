const inquirer = require("inquirer");
const fs = require("fs");
//const utils = require('inquirer/lib/utils/utils');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML.html');

let team = [];
const value = new Employee();

function addtoTeam() {

};

let generateHtml;

function createManager() {
    //ask questions 
    inquirer.prompt([{
                type: 'input',
                message: "Enter team manager's name",
                name: 'manName',
            },
            {
                type: 'number',
                message: "Enter manager's ID",
                name: 'manId',
            },
            {
                type: 'input',
                message: "Enter manager's email address",
                name: 'manEmail',
            },
            {
                type: 'number',
                message: "Enter manager's office phone number (10 digits no dashes or spaces)",
                name: 'manPhone',
            },

        ])
        .then(function (data) {
            const managerInfo = new Manager(data.manName, data.manId, data.manEmail, data.manPhone);
            team.push(managerInfo);
            addtoTeam();
        })
    //add data to data structure ie array object etc - store data
    //prompt()
};

function createEngineer() {
    //ask questions
    inquirer.prompt([{
            type: 'input',
            message: "Enter engineer's name",
            name: 'engName',
        },
        {
            type: 'number',
            message: "Enter engineer's ID",
            name: 'engId',
        },
        {
            type: 'input',
            message: "Enter engineer's email address",
            name: 'engEmail',
        },
        {
            type: 'number',
            message: "Enter engineer's GitHub username",
            name: 'engGit', //github
        },
        {
            type: 'list',
            message: "Add another employee?",
            choices: [
                "Engineer",
                "Intern",
                "No, I'm done"
            ],
            name: "addEmp"
        },
    ]);
    //add data to data structure - store data
    //prompt()
};

function createIntern() {
    //ask questions
    inquirer.prompt([{
            type: 'input',
            message: "Enter intern's name",
            name: 'intName',
        },
        {
            type: 'number',
            message: "Enter intern's ID",
            name: 'intId',
        },
        {
            type: 'input',
            message: "Enter intern's email address",
            name: 'intEmail',
        },
        {
            type: 'number',
            message: "Enter intern's school name",
            name: 'intSchool',
        },
        {
            type: 'list',
            message: "Add another employee?",
            choices: [
                "Engineer",
                "Intern",
                "No, I'm done"
            ],
            name: "addEmp"
        },
    ]);
    //add data to data structure - store data
    //prompt()
};

function addAnother() {
    inquirer.prompt([{
                type: 'list',
                message: "Add another employee?",
                choices: [
                    "Engineer",
                    "Intern",
                    "No, I'm done"
                ],
                name: "addEmp"
            },
            // if engineer then createEngineer(), if intern then createIntern(), if done then generateHtml()
        ])
        .then(function (data) {
            const empRole = data.addEmp;
            if (empRole === "Engineer") {
                createEngineer();

            } else if (empRole === "Intern") {
                createIntern();

            } else {
                //function (data) {
                //renderTeam();
                //}
                fs.writeFile("index.html", generateHTML(data), function (err) {
                    if (err) {
                        throw err;
                    };
                    console.log("Team page has been created!");
                });
            };
        })
};


/* ADD THIS BACK
inquirer
    .prompt(manQuest)
    .then(function (data) {
        fs.writeFile("index.html", generateHTML(data), function (err) {
            if (err) {
                throw err;
            };
            console.log("Your team profile HTML page has been created!");
        });
    });
*/

//from activity 28
// .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Your team profile HTML page has been created!')
//     );
//   });


// // initialize app
// function init() {

// };

// // // Function call to initialize app
// init();