require('dotenv').config()
const express = require('express')
const app = express()
// create a route called calcquery that takes in 2 params and a query operation
app.get("/calcquery/:num1/:num2", (request, response) => {
    console.log(request.params.num1, request.params.num2)
    // response.send("You did the thing")
    const num1 = parseInt(request.params.num1)
    const num2 = parseInt(request.params.num2)
    const operation = request.query.operation
    if(operation === 'add') {
        response.send(`The sum is ${num1 + num2}`)
        // localhost:3002/calcquery/1/2?operation=add (this is the syntax for the url)
    } else if(operation === 'subtract') {
        response.send(`The subtracted value is ${num1 - num2}`)
    } else if(operation === 'multiply') {
        response.send(`The product is ${num1 *num2}`)
    } else if(operation === 'divide') {
        response.send(`The remainder is ${num1/num2}`)
    } else if(operation === 'exponent') {
        response.send(`The exponent value is ${num1**num2}`)
    } else {
        response.send(`No operation`)
    }
})
app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port ${process.env.PORT}`)
})
