// The address of this server connected to the network is 
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require('express')
const app = express()
const PORT = 8383

// HTTP VERBS AND ROUTES (or paths)
// The method informs the nature of request and the route is a futher subdirectory
// (basically we direct the request to the body of code to respond appropriately, and 
// these locations or routes are called endpoints)
app.get('/', (req, res) => {
    // this is endpoint number 1 - /
    console.log('Yay I hit an endpoint', req.method)
    res.sendStatus(201)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))