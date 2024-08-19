const userService = require('../service/user.service');

const register = async (req, res, next) => {
    try {
        const request = req.body;

        const userResponse = await userService.register(request);
        res.status(200).json(userResponse);
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const request = req.body;

        const userResponse = await userService.login(request);
        res.status(200).json(userResponse);
    } catch (error) {
        next(error);
    }
}

const getUsers = async (req, res, next) => {
    try {
        const users = await userService.getUsers()
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const getUserById = async (req, res, next) => {
    try {
        const userId = req.user.id;

        const userResponse = await userService.get(userId);
        res.status(200).json(userResponse);
    } catch (error) {
        next(error);
    }
}

const deletedUserById = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const deleteResponse = await userService.delete(userId);
        res.status(200).json(deleteResponse);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    register,
    login,
    getUsers,
    getUserById,
    deletedUserById
}