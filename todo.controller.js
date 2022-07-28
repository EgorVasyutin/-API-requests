const  db = require('./db')

class TodoController {
    async createTodo(req, res){
        const {title ,isDone} = req.body
        const newTodo = await db.query(`INSERT INTO todo (title ,"isDone") values ($1, $2) RETURNING *`,[title ,isDone])
        res.json(newTodo.rows[0])
    }
    async getTodo(req, res){
        const todos = await db.query(`SELECT * FROM todo;`)
        console.log(todos)
        res.json(todos.rows)
    }
    async getOneTodo(req, res){
        const id = req.params.id
        const todos = await db.query(`SELECT * FROM todo where id = $1`,[id])
        res.json(todos.rows[0])
    }
    async updateTodo(req, res){
        const title = req.body.title
        const isDone = req.body.isDone
        console.log(req.body.isDone)
        const id = req.params.id
        const todo = await db.query(`UPDATE todo set title = $1, "isDone" = $2 where id = $3 RETURNING *`, [title, isDone, id])
        res.json(todo.rows[0])
    }
    async deleteTodo(req, res){
        const id = req.params.id
        await db.query(`DELETE FROM todo where id = $1`, [id])
        res.json(id)
    }

}

module.exports = new TodoController()