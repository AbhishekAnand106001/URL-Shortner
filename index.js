const express = require('express')



const urlRoute = require("./routes/Url");
const { connectToMongoDB } = require('./Connect');

const app = express();

const PORT = 3000;

app.use(express.json)

connectToMongoDB("mongodb+srv://abhishekanand106001:root@nodecrud.desgg8s.mongodb.net/?retryWrites=true&w=majority&appName=NodeCRUD", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

app.use("/url", urlRoute)



app.listen(PORT, ()=>{
    console.log(`${PORT} port is running`);
})