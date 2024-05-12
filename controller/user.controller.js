const db = require('../db')

class userController {
    async createUser(req, res){
        const {email, password, surname, first_name, second_name, role} = req.body
        const newPerson = await db.query(`insert into userr (email, password, surname, first_name, second_name, role) 
        values ($1, $2, $3, $4, $5, $6) returning *`, [email, password, surname, first_name, second_name, role])

        res.json(newPerson.rows[0])
    }
    async getUsers(req, res){
        const users = await db.query(`select * from userr`)
        users.rows = users.rows.map(element => {
            delete element.password
            return element
    })

        res.json(users.rows)
    }
    async getOneUser(req, res){ 
        const user = await db.query(`select * from userr where email = $1`, [req.params.email])
        delete user.rows[0].password
        res.json(user.rows)
    }
    async updateUser(req, res){
        const {email, surname, first_name, second_name} = req.body
        const user =  await db.query(`update userr set surname = $1, first_name = $2, second_name = $3 where email = $4 
        returning *`, [surname, first_name, second_name, email])

        res.json(user.rows)
    }
    async deleteUser(req, res){
        const transport = await db.query(`delete from transport where fk_email = $1`, [req.params.email])
        const user = await db.query(`delete from userr where email = $1`, [req.params.email])

        res.json("User deleted")
    }
}

module.exports = new userController()//export to routs