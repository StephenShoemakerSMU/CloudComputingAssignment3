const express = require("express")

const app = express()
port = 8080

app.get("/", (req,res) => {
    res.send("Hello my name is Steve")
})

app.listen(port, () => {
    console.log(`Assignment 2 listening on port ${port}`)
  })