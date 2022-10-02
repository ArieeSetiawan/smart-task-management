const router = require('express').Router();
const userController = require('../controllers/user-controller');
const multer = require ('../config/multer')
const validateUser = require('../middlewares/validator');

router.post('/register',multer.single('photo'),validateUser,userController.register);
router.post('/login',userController.login);
router.get('/',userController.getAllUser);
router.post('/byid',userController.getUserbyID);
router.put('/byid',userController.editUserbyID);
router.delete('/byid',userController.deleteUser);

module.exports = router;