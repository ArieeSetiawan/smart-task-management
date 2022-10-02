const router = require('express').Router();
const dailyTaskController = require('../controllers/dailytask-controller');
const { authentication, authorization } = require ('../middlewares/auth')

router.post('/create',authentication, authorization.pengguna,dailyTaskController.createDTask);
router.get('/',authentication, authorization.pengguna,dailyTaskController.getDTask);
router.put('/update',authentication, authorization.pengguna,dailyTaskController.updateDTask);
router.delete('/delete',authentication, authorization.pengguna,dailyTaskController.deleteDTask);

module.exports = router;