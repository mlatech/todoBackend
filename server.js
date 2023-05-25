const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')

app.use(express.json()) 

const todo = [
    {
        name: "Dishes",
        description: "Wash the dishes and put them away ",
        imageUrl: "some url",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Laundry",
        description: "Wash clothes, dry, fold, and put away  ",
        imageUrl: "some url",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "school",
        description: "Complete assignments for the day",
        imageUrl: "some url",
        completed: false,
        _id: uuidv4()
    }
]
//return entire list of todos
app.get("/todo", (req, res)=>{
    res.send(todo)
})

//get ONE todo newItem by id 
app.get("/todo/:id", (req, res)=>{
    const id = req.params.id
    const foundnewItem = todo.find(newItem => newItem._id === newItem._id)
    res.send(foundnewItem)
    })
//add a todo newItem
app.post("/todo", (req, res)=>{
    const newTodoItem = req.body
    newTodoItem._id = uuidv4()
    todo.push(newTodoItem)
    res.send(newTodoItem)
    })
//update a todo item
app.put("/todo/:id", (req, res)=>{
    const id = req.params.id
    const updatedItem = req.body
    const todoIndex = todo.findIndex(todo => todo._id === todo._id)
    const updatedTdo = Object.assign(todo[todoIndex], updatedItem)
    res.send(updatedTdo)
    })

    //delete a todo item
    app.delete("/todo/:id", (req, res)=>{
        const id = req.params.id
        const todoIndex = todo.findIndex(todo => todo._id === todo._id)
        todo.splice(todoIndex, 1)
        res.send("Successfully deleted todo item!")
        })




app.listen(9000, ()=>{
    console.log("The server is running on Port 9000")
})