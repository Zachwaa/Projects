const db = require("./db");

async function create(username,password){
    let message = 'Account added successfully'
    const result = await db.query(
        `SELECT * FROM user_info WHERE Username = '${username}' OR Email = '${username}'`
    )
    if (result.length == 0){
        await db.query(
            `INSERT INTO user_info (Username, Password, Email, date_of_birth, email_verified, account_number) VALUES ('${username}','${password}','wth','2023-02-06',false,UUID())`
        )
    } else {
        message = "Account name already exists"
    }
   
    return {message}
}

module.exports = {
    create
}