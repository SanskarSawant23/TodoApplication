import {z} from 'zod'

//you have to make schemas for validating.
const zod = z;
const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})


export {createTodo, updateTodo};