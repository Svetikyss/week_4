const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortunet", getFortune);

app.listen(4000, () => console.log("Server running on 4000"));


const express = require('express')
const cors = require('cors')
const {getAllMovies,createMovie,deleteMovie,editMovie} = require('./controller')

/
app.get('/api/dreams',getAllDreams)


app.post('/api/dreams', createDream)


app.delete('/api/dreams/:id',deleteDream)


app.put('/api/dreams/:id',editDream)

const SERVER_PORT = 4004
app.listen(SERVER_PORT,() => console.log(`server runnin on ${SERVER_PORT}`))
