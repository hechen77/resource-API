const mysql = require('mysql');
const db = mysql.createPool({
    host: '139.224.46.4',
    user: '资源整合站',
    password: 'cnMWdtFRdnNNKAfW',
    database: '资源整合站'
})
module.exports = db;