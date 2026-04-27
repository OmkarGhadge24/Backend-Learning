const { body, validationResult } = require('express-validator');

async function validatorResult(req,res,next){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    next();
}

const registerUserValidationRules = [
    body("username")
        .isString()
        .withMessage('Username must be string')
        .isLength({ min: 3, max: 20 })
        .withMessage('Username must be in length of 3 to 20'),
    
    body("password")
        .isString()
        .withMessage('Password must be string')
        .isLength({ min: 6, max: 20 })
        .withMessage('Password must be in length of 6 to 20'),
    
    body("email")
        .isString()
        .withMessage('Email must be string')
        .isEmail()
        .withMessage('Email must be a valid email'),
    
    validatorResult
]

module.exports = {
    registerUserValidationRules
}