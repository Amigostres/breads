require(`dotenv`).config()
const express = require(`express`)
const app = express()

//config
const PORT = process.env.PORT
console.log(PORT);


//middleware
app.use(express.static(`public`))
app.use(express.urlencoded({extended:true}))



app.set(`views`, __dirname + `/views`)
app.set(`view engine`, `jsx`)
app.engine(`jsx`, require(`express-react-views`).createEngine())


app.get(`/`, (req, res) => {
    res.send(`hi`)
})

const breadsController = require(`./controllers/breads_controller.js`)
app.use(`/breads`, breadsController)

//404 GO LAST
app.get(`*`, (req, res) =>{
    res.send(`This is a 404 page`)
})


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

