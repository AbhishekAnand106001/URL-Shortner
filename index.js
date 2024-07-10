const express = require('express');
const urlRoute = require("./routes/Url");
const { connectToMongoDB } = require('./Connect');
const app = express();
const PORT = 3001;

// Use express.json() to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
connectToMongoDB("mongodb+srv://abhishekanand106001:root@nodecrud.desgg8s.mongodb.net/?retryWrites=true&w=majority&appName=NodeCRUD", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

// Define route for URL operations
app.use("/url", urlRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`${PORT} port is running`);
});
