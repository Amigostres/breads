const express = require(`express`)
const breads_router = express.Router()
const Bread = require(`../models/bread.js`)

breads_router.get(`/new`, (req, res) => {
    res.render(`new`)
})

//EDIT
breads_router.get('/:arrayIndex/edit', (req, res) => {
    Bread.findById(req.params.arrayIndex) 
      .then(foundBread => { 
        res.render('edit', {
          bread: foundBread 
        })
      })
  })
  


//show
breads_router.get('/:arrayIndex', (req, res) => {
    Bread.findById(req.params.arrayIndex)
    .then(foundBread => {
        let bakedBy = foundBread.getBakedBy()
        console.log(bakedBy);
        res.render('show', {
            bread: foundBread
      })
    })
    .catch(err => {
        console.log(err);
      res.send('404')
    })
})

//update
breads_router.put(`/:arrayIndex`, (req, res) => {
    req.body.hasGluten = req.body.hasGluten == `on`
    //Bread[req.params.arrayIndex] = req.body
    Bread.findByIdAndUpdate(req.params.arrayIndex, req.body, {new: true})
    .then((updatedBread) => {
        console.log(updatedBread);
        res.redirect(`/breads/${req.params.arrayIndex}`)
    })
    
})


//DELETE
breads_router.delete(`/:arrayIndex`, (req, res) => {
    Bread.findByIdAndDelete(req.params.arrayIndex)
    .then((deletedBread) => {
        res.status(303).redirect(`/breads`)
    })
})

//index
breads_router.get('/', (req, res) => {
    Bread.find()
        .then(foundBreads => {
            res.render('index', {
                breads: foundBreads,
                title: 'Index Page'
            })
        })
  })

//create
breads_router.post(`/`, (req, res) => {
 
    if(!req.body.image){ // if the image is no there then we use this defualt
        req.body.image = "https://cdn-icons-png.flaticon.com/512/4241/4241664.png"
    }
    req.body.hasGluten = req.body.hasGluten == `on`

    Bread.create(req.body)
    res.redirect(`/breads`)
})


module.exports = breads_router