const express = require('express');

const app = express();
const port = 3000

//parse the body is the body is json
app.use(express.json()); //this is middleware which is going to run before ever path.

app.get('/todos', (req, res)=>{

})

app.post('/todo', (req, res)=>{

})

app.put('/completed', (req, res)=>{
    
})


app.listen(port, ()=>{
    console.log(`server is listening at ${port} port`)
})