


const getAllTasks = (req,res) =>{
    res.send('all items from the file')
}
const createTask = (req,res) =>{
    res.json(req.body);

} 
const getTask = (req,res) =>{
    res.json({req:id.param.id})

}
const updateTask = (req,res) =>{
    res.send('update  task')

}
const deleteTask = (req,res) =>{
    res.send('deletetask')

}
module.exports =
{
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask

}








