import { es, en, Faker } from '@faker-js/faker';
import { createHash } from './bcrypt.js';

const faker = new Faker({
    locale: [es, en],
});

export const generatePets = () => {
    return {
        type: faker.animal.type(),
        age: faker.number.int({ min: 1, max: 10 }),
        adopted: false,
        owner: null,
    };
};

export const generateUser = () => {
    const password = createHash('coder123', 10);

    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password,
        role: faker.helpers.arrayElement(['user', 'admin']),
        pets: [],
    };
};
