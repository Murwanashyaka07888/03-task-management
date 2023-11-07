const express = require('express')
const router = express.Router()
const {
    getAllTasks,createTask,getTask,updateTask,deleteTask
} = require('../conrollers/tasktask');


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)




//router.get('/,getPeople)
//router.post('/,createPerson)
//router.post('/postman,createPerson)
//router.gput('/:id',updatePerson)
//router.delete('/id,deletePerson)


module.exports = router