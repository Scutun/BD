const db = require('../db')

class transportController {

    async createTransport(req, res){
        const {vin, lifting_capacity, email, brand, color} = req.body
        const newTransport = await db.query(`insert into transport (transport_number, lifting_capacity, fk_email, fk_brand_id, 
        fk_color_id) values ($1, $2, $3, $4, $5) returning *`, [vin, lifting_capacity, email, brand, color])

        res.json(newTransport.rows[0])
    }
    async getTransports(req, res){
        const transports = await db.query(`SELECT transport_number AS VIN, lifting_capacity, fk_email AS email,
        brand.brand_name AS brand, color.color_name AS color FROM transport
        JOIN brand ON transport.fk_brand_id = brand.brand_id
        JOIN color ON transport.fk_color_id = color.color_id`)

        res.json(transports.rows)
    }
    async getOneTransport(req, res){ 
        const transport = await db.query(`SELECT fk_email AS email, lifting_capacity, transport_number AS VIN,
        brand.brand_name AS brand, color.color_name AS color FROM transport
        JOIN brand ON transport.fk_brand_id = brand.brand_id
        JOIN color ON transport.fk_color_id = color.color_id
        WHERE transport.transport_number = $1`, [req.params.email])

        res.json(transport.rows)
    }
    async updateTransport(req, res){
        const {vin, lifting_capacity, brand, color} = req.body
        const user =  await db.query(`update transport set
        lifting_capacity = $1, fk_brand_id = $2, fk_color_id = $3
        where transport_number = $4 returning *`, [lifting_capacity, brand, color, vin])

        res.json(user.rows)
    }
    async deleteTransport(req, res){
        const transport = await db.query(`delete from transport where transport_number = $1`, [req.params.transport_number])

        res.json("Transport deleted")
    }

    //Аналитический запрос для поиска автомобиля по email владельца/водителя
    async getAllTransports(req, res){ 
        const transport = await db.query(`SELECT fk_email AS email, lifting_capacity, transport_number AS VIN,
        brand.brand_name AS brand, color.color_name AS color FROM transport
        JOIN brand ON transport.fk_brand_id = brand.brand_id
        JOIN color ON transport.fk_color_id = color.color_id
        WHERE transport.fk_email = $1`, [req.params.email])

        res.json(transport.rows)
    }

    //Аналитический запрос для отображения кол-ва всех т/с зарегистрированнных на email владельца/водителя
    async getTransportsAmount(req, res){
        const transports = await db.query(`SELECT fk_email AS mail, COUNT(*) AS counter FROM transport
        WHERE fk_email = $1
        GROUP BY fk_email`, [req.params.email])

        res.json(transports.rows)
    }
}

module.exports = new transportController()//export to routs