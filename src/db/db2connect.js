const config = {
    host: '192.168.118.20',
    user: 'USERDB2',
    password: 'USERDB2',
    port: '446',
    //database: 'CR400'
}
const pool = require('node-jt400').pool(config);

pool
    .query('SELECT c.IP FROM CR400.CAJA c ORDER BY c.IP ASC')
    .then(result => {
        for(var i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
        process.exit(1);
    })
    .catch(error => {
        console.log('error');
        console.error('Ha ocurrido un error: ', error);
    });