const express = require(`express`)
const breads_router = express.Router()
const Bread = require(`../models/bread.js`)

breads_router.get(`/new`, (req, res) => {
    res.render(`new`)
})


breads_router.get('/:arrayIndex', (req, res) => {
    // res.send(Bread[req.params.arrayIndex])
    if(Bread[req.params.arrayIndex]){
        res.render(`show`, {
            bread: Bread[req.params.arrayIndex]
        })
    }else{
        res.send(`this index does not exist ==> 404`)
    }
})

//index
breads_router.get(`/`, (req, res) => {
    res.render(`index`, {
        breads: Bread,
        title: 'indexdsadsad'
    })// this means I am going to send {breads} object into index.jsx
    // res.send(Bread)
})

breads_router.post(`/`, (req, res) => {
    req.body.hasGluten = req.body.hasGluten == `on`
    if(!req.body.image){ // if the image is no there then we'' use this defualt
        req.body.image = "https://cdn-icons-png.flaticon.com/512/4241/4241664.png"
    }
    // if(req.body.hasGluten == `on`) {
    //     req.body.hasGluten = `true`
    // }else{
    //     req.body.hasGluten = `false`
    // }
    Bread.push(req.body)
    // res.send(Bread)
    res.redirect(`/breads`)
})


module.exports = breads_router