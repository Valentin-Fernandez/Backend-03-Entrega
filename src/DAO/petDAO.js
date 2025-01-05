import Pet from '../models/petModel.js';

export const insertPets = async pets => {
    try {
        return await Pet.insertMany(pets);
    } catch (error) {
        throw new Error('Error al insertar mascotas: ' + error.message);
    }
};

export const getPets = async () => {
    try {
        return await Pet.find();
    } catch (error) {
        throw new Error('Error al traer mascotas: ' + error.message);
    }
};
