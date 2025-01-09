import express from "express"
import {createTodo, updateTodo} from './types.js'
import { Prisma, PrismaClient } from '@prisma/client';
const app = express();
const port = 3000

//parse the body is the body is json
app.use(express.json()); //this is middleware which is going to run before ever path.



app.post('/todos', async(req, res)=>{
    //request the user for title and description.
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    console.log(parsedPayload.success);
    
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return
    
    }
    try{
    const title = parsedPayload.data.title;
    const description = parsedPayload.data.description;
    const prisma = new PrismaClient();
    const user = await prisma.user.create({
        data:{
            title: title,
            description: description,
            completed: false
        }
    })

    res.json({
        msg:"todo created",
        yourTodo: user
    })
}catch(error){
    console.log(error);
}



    
})

app.get('/todo', async(req, res)=>{
    // const userid = req.body;
    // const prisma = new PrismaClient();

    // //check if the userid exists in the database or not.
    // const user = await prisma.user.findUnique({
    //     where:{
    //        id: userid 
    //     }
    // })
    // if(!user){
    //     res.send(411).json({
    //         msg:"user does not exists"
    //     })

    //     return
    // }
    // return user;

    const prisma = new PrismaClient()
    const user = await prisma.user.findMany({}) //this user objects contains all the todos in the database.
    res.json({
        "Todos": user
    })

   
})

app.put('/completed', async(req, res)=>{
    
    const updatedata= req.body
    // const parseduserid = updateTodo.safeParse(userid)
    // if(!parseduserid){
    //     res.status(411).json({
    //         msg:"you have sent the wrong inputs"
    //     })
    //     return;
    // }
    const userid = updatedata.userid;
    const completed= updatedata.completed;

    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        where:{
            id: userid
        }
    })

    if(!user){
        res.json({
            msg:"user not found"
        })
        return
    }
try{
   const newdata = await prisma.user.update({
        where:{
            id: userid,
            
        },data:{
            completed: completed,
        }
    })
    res.json({
        updatedInfo: newdata
    })
}catch(error){
    res.json({
        error: error
    })
}



})


app.listen(port, ()=>{
    console.log(`server is listening at ${port} port`)
})