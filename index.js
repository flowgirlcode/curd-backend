
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const productRoute =require('./routes/Product.route.js')

//mid
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//routes
app.use('/api/products',productRoute);

app.get('/', (req, res) => {
    res.send("Hello from node  gbhh updated api");
});

mongoose.connect("mongodb+srv://admin:eH7ZSr1ldG6H3sl9@curdapi.j2etmzd.mongodb.net/NOde-API?retryWrites=true&w=majority&appName=curdApi")
    .then(() => {
        console.log("connected");
    })
    .catch((error) => {
        console.log(error);
        console.log("connection failed");
    })
app.listen(3000, () => {
    console.log("Server is running on port");

})

