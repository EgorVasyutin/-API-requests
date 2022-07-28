// import express from 'express'
const express = require('express')
const cors = require('cors')
// import todoRouter from 'todo.routes'
const todoRouter = require('./todo.routes')
const PORT = process.env.PORT || 1000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', todoRouter)

app.listen(PORT, () => console.log('SERVERS START PORT ' + PORT))



