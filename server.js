require(`dotenv`).config()
const express = require(`express`)
const app = express()

//config
const PORT = process.env.PORT
console.log(PORT);




app.get(`/`, (req, res) => {
    res.send(`hi`)
})

const breadsController = require(`./controllers/breads_controller.js`)
app.use(`/breads`, breadsController)

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

