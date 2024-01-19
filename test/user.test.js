const request = require('supertest');

const app = require('../src/app');

test('Deve listar todos os usuários', () => {
    return request(app)
        .get('/users')
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body).toHaveLength(1);
            expect(res.body[0]).toHaveProperty('name', 'Jhon Doe');
        });
});

test('Deve inserir usuários com sucesso', () => {
    return request(app)
        .post('/users')
        .send({
            name: 'Walter White',
            mail: 'walterwhite@mail.com',
        })
        .then((res) => {
            expect(res.status).toBe(201);
            expect(res.body).toHaveProperty('name', 'Walter White');
            expect(res.body).toHaveProperty('mail', 'walterwhite@mail.com');
        });
});
