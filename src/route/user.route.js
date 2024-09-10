const userController = require('../controller/user.controller.js');
const userRouter = require('express').Router();

userRouter.post('/', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/users/:id', userController.getUserById);
userRouter.get('/users', userController.getUsers);
userRouter.delete('/users/:id', userController.deletedUserById);

module.exports = {
    userRouter
}
// localhost:3000/api/v1/users/:id