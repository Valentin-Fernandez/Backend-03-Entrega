import { Router } from 'express';
import { generatePets, generateUser } from '../utils/utils.js';
import { insertUsers, getUsers } from '../DAO/UserDAO.js';
import { insertPets, getPets } from '../DAO/petDAO.js';

const router = Router();

router.get('/mockingpets', (req, res) => {
    try {
        const pets = [];
        for (let index = 0; index < 100; index++) {
            pets.push(generatePets());
        }

        res.send({ pets });
    } catch (error) {
        console.error(error);
    }
});

router.get('/mockingusers', (req, res) => {
    try {
        const users = [];
        for (let index = 0; index < 50; index++) {
            users.push(generateUser());
        }

        res.send({ users });
    } catch (error) {
        console.error();
    }
});

router.post('/generateData', async (req, res) => {
    try {
        const { users, pets } = req.body;
        const generatedUsers = [];
        const generatedPets = [];

        for (let index = 0; index < users; index++) {
            generatedUsers.push(generateUser());
        }

        for (let index = 0; index < pets; index++) {
            generatedPets.push(generatePets());
        }

        const insertedUsers = await insertUsers(generatedUsers);
        const insertedPets = await insertPets(generatedPets);

        res.status(200).json({
            message: `Se generaron e insertaron ${insertedUsers.length} usuarios y ${insertedPets.length} mascotas.`,
            users: insertedUsers,
            pets: insertedPets,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await getUsers();

        if (!users) {
            res.send({ status: 'error', message: 'error al obtener los users' });
        }
        res.status(200).json({
            users,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/pets', async (req, res) => {
    try {
        const pets = await getPets();

        if (!pets) {
            res.send({ status: 'error', message: 'error al obtener los pets' });
        }

        res.status(200).json({
            pets,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
