// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

app.get('/',(req,res) => {
    res.send('homePage')
})
app.get('/test',(req,res) => {
    res.send('TestPage')
})

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
