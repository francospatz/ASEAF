const routes = require('express').Router();
const userApi = require('../controllers/userApi')

routes.post('/login', userApi.login);
routes.get('/logout/:email', userApi.logout)
routes.get('/sendemail/:email', userApi.sendEmail);
//routes.post('/signup', userApi.signUpUser);

module.exports = routes;