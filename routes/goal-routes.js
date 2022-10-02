const router = require('express').Router();
const goalController = require('../controllers/goal-controller');
const { authentication, authorization } = require ('../middlewares/auth')
const multer = require ('../config/multer-attachment');

router.post('/create',authentication, authorization.pengguna,goalController.createGoal);
router.put('/addmember',authentication, authorization.pengguna,goalController.addMembertoGoal);
router.put('/removemember',authentication, authorization.pengguna,goalController.removeMemberfromGoal);
router.put('/attachfile',authentication, authorization.pengguna,multer.single('attachment'),goalController.attachfiletoGoal);
router.put('/removefile',authentication, authorization.pengguna,goalController.removefilefromGoal);
router.delete('/delete',authentication, authorization.pengguna,goalController.deleteGoal);
router.get('/',goalController.getAllGoals)
router.post('/byid',goalController.getGoalsbyID)
router.put('/byid',authentication, authorization.pengguna,goalController.editGoalsbyID)
router.post('/searchbydate',goalController.findBetween);
router.post('/search',goalController.search);
router.post('/searchbyprogress',goalController.getGoalsbyProgress);

module.exports = router;