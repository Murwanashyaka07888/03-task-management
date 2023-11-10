
//const { error } = require('mongoose');
const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-error')


const getAllTasks = asyncWrapper(async (req, res) => {
    // try {
    const task = await Task.find({});
    res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
    // try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        return next(createCustomError(`no task with id :${taskID}`,404))
    }
    // res.status(200).json({task})
    // } catch (error) {
    // res.status(500).json({msg:error})    

})

const deleteTask = asyncWrapper(async (req, res) => {
    // try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return next(createCustomError(`no task with id :${taskID}`,404))
    }
    // res.status(200).json({task})
    // res.status(200).send()
    res.status(200).json({ task: null, status: 'success' })
    //} catch(error){
    //  res.satus(500).json({msg: error})
})
const updateTask = asyncWrapper(async (req, res) => {
    //try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!task) {
        return next(createCustomError(`no task with id :${taskID}`,404))
    }
    res.status(200).json({ task })
    // } catch (error){
    ///res.status(500)({msg:error})
    // }
})

const editTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
            overwrite: true,
        })
        if (!task) {
            return res.status(404).json({ msg: `no task with id : ${task}` })

        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500)({ msg: error })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
}