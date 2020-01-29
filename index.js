const fetch = require('node-fetch')
const express = require("express")
const app = express()
const url = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0"

//run the app
app.listen(3005, () => {
  console.log("Server running on port 3005")
})

const getData = async url => { //make an async function 
  try {
    const response = await fetch(url)
    const json = await response.json()
    //console.log(json)
    app.get("/pokemon/kanto/async", (req, res, next) => {
      res.json(json) //parse data to json 
    })
  } catch (err) {
    console.log(err)
  }
}

getData(url)
.then()
.catch(e=>console.log(e))