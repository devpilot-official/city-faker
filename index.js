const express = require("express")
const all = require("./lib/all")
const region = require("./lib/region")
const country = require("./lib/country")


const app = express()

const port = process.env.PORT || 3100

app.get("/", (req, res) => {
    // console.log(me)
    res.send({
        data: all()
    })
})

app.get("/:country", (req, res) => {
    res.send({
        city: country(req.params.country)
    })
})

app.get("/:country/:region", (req, res) => {
    res.send({
        city: region(req.params.country, req.params.region)
    })
})

// module.exports = {all, region, country}

app.listen(port, () => {
    console.log("Server started on port:", port)
})