
const express = require('express')
const path = require('path')
const dbu = require('./dbUtils.js')

const app = express()
const port = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/api/users', async ( req, res ) => {

    const users = await dbu.getUsers()

    res.send(users)
})

app.get('/api/users/:id', async ( req, res ) => {

    const userId = req.params.id

    console.log(userId)

    const user = await dbu.getUser(userId)

    res.json(user)

})

app.post('/api/create', async ( req, res ) => {


    const name = req.query.name
    const loc = req.query.location

    const createdUser = await dbu.createUser(name, loc)

    res.send(createdUser)

})

app.listen(port, () => {
    console.log('server up on', port)
})
