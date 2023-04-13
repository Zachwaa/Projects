const db = require("./db");

async function login(username,password){
    try {
    const result = await db.query(
        `SELECT * FROM user_info WHERE Username = '${username}' OR Email = '${username}' AND Password = '${password}'`
    )
    let message = `${username} has successfully logged in`;
    let logged_in = true;
    if (result.length == 0){
        message="Username or password could not be found"
        logged_in = false;
    }
    return {message,logged_in}
 } catch {(err) => console.log(err)}
}

module.exports = {
    login
}