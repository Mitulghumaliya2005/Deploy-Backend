require('dotenv').config()
const express = require('express')
const app = express();
const port = 3000
// console.log(process.env)
// console.log(process.env.PORT)

app.get("/", (req, res) => {
    console.log("Hello Backend")
    res.send("Welcome To Backend Series")
})

app.get("/login", (req, res) => {
    console.log("login called");
    res.send("You Are Loggendin")
})

app.get("/youtube", (req, res) => {
    console.log("Youtube Called");
    res.send("Go To Learn Backend From Chai Aur Code Chanel")

})

app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} port are listen`)
})
