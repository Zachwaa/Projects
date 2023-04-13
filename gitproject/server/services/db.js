const mysql = require("mysql2/promise");
require('dotenv').config()

const config = {
    db: {
        host:process.env.HOST,
        user:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATABASE
    }
}

async function query(sql){
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql);

    return results
}

module.exports = {
    query
}