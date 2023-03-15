const express = require(`express`)
const breads_router = express.Router()
const Bread = require(`../models/bread.js`)


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
module.exports = breads_router