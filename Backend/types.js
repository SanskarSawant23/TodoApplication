const zod = require('zod');

//you have to make schemas for validating.

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})


module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}