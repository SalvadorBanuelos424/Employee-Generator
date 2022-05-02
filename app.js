const fs = require('fs');
const generatePage = require('./src/page-template');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { finished } = require('stream');

const staff = [];

const promptEmployee = () => {
    return inquirer.prompt([
    {    
        type: 'list',
        name: 'worker',
        message: 'Select a worker type or select finish.',
        choices: ['manager', 'engineer', 'intern', 'finish']  
    }])
    .then(userChoice => {
        switch (userChoice.worker) {
            case 'manager':
                promptManager();
                break;
            case 'engineer':
                promptEngineer();
                break;
            case 'intern':
                promptIntern();
                break;
            case 'finish':
                //finishInout();
                break;
        }
    });
};

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Try again, what is the managers name?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the managers employee ID number.',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Try again, enter the managers employee ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the managers email address.',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Try again, enter the managers email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'room',
            message: 'Enter the managers room number.',
            validate: room => {
                if (room) {
                    return true;
                } else {
                    console.log('Try again, enter the managers room number.');
                    return false;
                }
            }
        },
    ])
    .then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.room);
        staff.push(manager);
        promptEmployee();
    })

};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Try again, what is the engineers name?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Id',
            message: 'Enter the engineers employee ID number.',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Try again, enter the engineers employee ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the engineers email address.',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Try again, enter the engineers email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the engineers Github username',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Try again, enter the engineers Github username.');
                    return false;
                }
            }
        }
    ])
    .then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        staff.push(engineer);
        promptEmployee();
    })    
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Interns name?',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Try again, what is the interns name?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the interns employee ID number.',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Try again, enter the interns employee ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the interns email address.',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Try again, enter the interns email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the interns school name.',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Try again, enter the interns school name.');
                    return false;
                }
            }
        }
    ])
    .then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        staff.push(intern);
        promptEmployee();
    })
};

//finishInput() 
    //.then(staff => {
        //return generatePage(staff);
    //}) 
    //.then(pageHTML => {
        //return writeFile(pageHTML);

promptEmployee();
