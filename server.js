require(`dotenv`).config()
const express = require(`express`)
const app = express()
const mongoose = require(`mongoose`)

//Dependencies
const methodOverride = require(`method-override`)

//config
const PORT = process.env.PORT
console.log(PORT);
// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
//     () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
//   )
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log(`${process.env.MONGO_URI}Connection successful`))
  .catch((err) => console.error('Connection error', err));
  

//middleware
app.use(methodOverride(`_method`))
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

