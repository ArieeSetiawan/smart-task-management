const {check, validationResult} = require ('express-validator');
const fs = require('fs')

const ruleRegister = [
    check ('name')
    .notEmpty().withMessage('Name cannot be Empty')
    .isLength({min:3}).withMessage('Name Length is between 3 to 12')
    .isLength({max:12}).withMessage('Name Length is between 3 to 12')
    .bail(),
    check('email')
    .notEmpty().withMessage('Email cannot be Empty')
    .isEmail().withMessage('Enter with Correct Email')
    .bail(),
    check('password')
    .notEmpty().withMessage('Password cannot be Empty')
    .isLength({min:6}).withMessage('Password Length is 6 to 12')
    .isLength({max:12}).withMessage('Password Length is 6 to 12')
    .trim()
    .not().isLowercase().withMessage('musthaveUppercase')
    .not().isUppercase().withMessage('musthaveLowercase')
    .not().isNumeric().withMessage('musthaveLetter')
    .not().isAlpha().withMessage('musthaveNumber')
    .bail(),
];

const validateRegister = [
    ruleRegister,
    (req,res,next)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            fs.unlinkSync(req.file.path)
            return res.status(422).json({errors: errors.array()})
        }
        next();
    }
];


module.exports = validateRegister;