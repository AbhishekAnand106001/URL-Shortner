const express = require('express')

const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log(`${port} port is running`);
})