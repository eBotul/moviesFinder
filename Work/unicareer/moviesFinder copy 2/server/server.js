const express = require('express');
const db = require('./db')
require('dotenv').config()

const app = express();
app.use(express.json())


// read all the movies
app.get('/api/movies', async(req, res)=>{
    console.log('read all the movies')
    const result = await db.query('SELECT * from movies')
    console.log(result)
    try {
        res.status(200).json({
            status: 'success',
            data: result.rows
        })
    } catch (error) {
        console.log(error)
    }
})


// create a movie
app.post('/api/movies', async(req, res)=>{
    console.log('create a movie')
    console.log(req.body)
    const result = await db.query(`INSERT INTO movies(name, studio, ratings) values ($1, $2, $3) returning *`,
    [req.body.name, req.body.studio, req.body.ratings])
    console.log(result)
    try {
        res.status(200).json({
            status: 'success',
            data: result.rows
        })
    } catch (error) {
        console.log(error)
    }
})

// update a movie
app.put('/api/movies/:id', async(req, res)=>{
    console.log('update a movie')
    console.log(req.params)
    const result = await db.query(`UPDATE movies set name = $1, studio = $2, ratings = $3 where id = $4 returning *`,
    [req.body.name, req.body.studio, req.body.ratings, req.params.id])
    console.log(result)
    try {
        res.status(200).json({
            status: 'success',
            data: result.rows
        })
    } catch (error) {
        console.log(error)
    }
})

// delete a movie
app.delete('/api/movies/:id', async(req, res)=>{
    console.log('delete a movie')
    const result = await db.query(`DELETE from movies where id = $1`,
    [req.params.id])
    console.log(result)
    try {
        res.status(200).json({
            status: 'success'
        })
    } catch (error) {
        console.log(error)
    }
})

const port = process.env.PORT
app.listen(port, console.log(`server is listerning to port ${port}`));