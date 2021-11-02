const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const router = express.Router();
router.get('/', (req, res) => {
    res.send("Hello World");
});
app.use(router)
app.listen(port,() => {
    console.log('Listening on '+port)
})
