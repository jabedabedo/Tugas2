const express = require('express')
const app = express()
const condition = require("./lib/condition")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})


/**
 * How to using query parameter:
 * 
 * http://your_url:your_port/your_route?q=your_value
 * or type in Query Params when using postman
 * key      | value
 * q        | your_value
 */
app.get("/task1", (req, res) => {
    let q = req.query.q
    console.log("First value ", q)

    let result = condition.equal(q)

    return res.send(result)
})

app.get("/task2", (req, res) => {
    let today = new Date().getDay()
    console.log("Today ", today)

    let result = condition.day(today)

    return res.send(result)
})

app.post("/task3", (req, res) => {
    let number = req.body.number
    console.log("section1 ", typeof number)
    number = parseInt(number)
    console.log("section2 ", typeof number)

    let result = condition.compare(number)

    return res.send(result)
})

app.get("/tugas1", (req, res) => {
    let key1 = req.query.key1
    let key2 = req.query.key2
    let a = parseInt(key1)
    let b = parseInt(key2)
    console.log("key1",typeof a)
    console.log("key2",typeof b)

    let result = condition.tugas1(a,b)

    return res.send(result)
})

app.post("/tugas2", (req, res) => {
    let { name, email } = req.body
    let result = condition.tugas2(name, email)

    return res.send(result)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})
