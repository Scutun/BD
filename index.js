const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user.routes')
const transportRouter = require('./routes/transport.routes')
const bodyParser = require('body-parser')

const PORT = 3000
const app = express()


app.use(express.json())
app.use(cors())
app.use('/api', userRouter)
app.use('/api', transportRouter)


app.listen(3000, () => {
    console.log("Server work")
})