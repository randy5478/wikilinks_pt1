const express = require("express")
const addPage = require("../views/addPage")
const wikiRouter = express.Router()

wikiRouter.get("/", (req,res) =>{
    res.send("hello world")
})

wikiRouter.post("/", (req,res) =>{
    const resJson = res.json(req.body)
    console.log("----------->", resJson)
})

wikiRouter.get("/add", (req,res) =>{
    res.send(addPage())
})

module.exports = wikiRouter