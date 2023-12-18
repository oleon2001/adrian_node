const Sequelize = require("sequelize");


let hostPos = '10.1.57.157';


let configArray = [];


for(var i=0; i<=2; i++) {
    configArray.push('CRPOS', 'usercr2', 'usercr2', {host: hostPos, dialect: 'mysql'})
}

console.log(hostPos);

console.log(configArray);

// const sqlize = new Sequelize(
//     'CRPOS',
//     'usercr2',
//     'usercr2',
//     {
//         host: '10.1.57.157',
//         dialect: 'mysql'
//     }
// );

// const sqlize = new Sequelize(
//     'CRPOS',
//     'usercr2',
//     'usercr2',
//     {
//         host: hostPos,
//         dialect: 'mysql'
//     }
// );


// sqlize.authenticate().then(() => {
//    console.log('Connection has been established successfully.');
// }).catch((error) => {
//    console.error('Unable to connect to the database: ', error);
// });