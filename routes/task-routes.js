const router = require('express').Router();
const taskController = require('../controllers/task-controller');
const { authentication, authorization } = require ('../middlewares/auth')

router.post('/create',authentication, authorization.pengguna,taskController.createTask);
router.put('/update',authentication, authorization.pengguna,taskController.updateTask);
router.delete('/delete',authentication, authorization.pengguna,taskController.deleteTask);

module.exports = router;