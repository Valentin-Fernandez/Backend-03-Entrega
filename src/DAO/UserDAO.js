import User from '../models/userModel.js';

export const insertUsers = async users => {
    try {
        return await User.insertMany(users);
    } catch (error) {
        throw new Error('Error al insertar usuarios: ' + error.message);
    }
};

export const getUsers = async () => {
    try {
        return await User.find();
    } catch (error) {
        throw new Error('Error al traer usuarios: ' + error.message);
    }
};
