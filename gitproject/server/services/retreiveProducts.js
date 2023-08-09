 const db = require("./db")

 async function retrieveProducts(category) {

    const response = await db.query(
        `SELECT * FROM products WHERE product_type = '${category}'`
    ).then((res) => {
      
        return res
    })
    return response
   
 }

module.exports = {
    retrieveProducts
}