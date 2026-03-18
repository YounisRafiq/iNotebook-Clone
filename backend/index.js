const connectTomongoDb = require('./db.js');
const express = require('express');

connectTomongoDb();

const app = express();

app.use("/api/v1/auth" , require('./routes/auth.routes.js'));
app.use("/api/v1/notes" , require('./routes/notes.routes.js'));

app.listen(3000 , () => {
    console.log("Server is Listen on 3000 port")
});