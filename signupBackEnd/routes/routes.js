
const express = require("express")
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup',(request, response) => {

    const signedUpUser = new signUpTemplateCopy({
        firstName:request.body.firstName,
        email:request.body.email,
        date:request.body.date,
        storeChoice:request.body.storeChoice,
        optionalField:request.body.optionalField
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

 
module.exports = router

