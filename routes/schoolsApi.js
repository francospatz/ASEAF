const routes = require('express').Router();
const productApi = require('../controllers/schoolsApi');
const protectedRoutes = require('../middlewares/verifiedToken');

// usar protectedRoutes para la API de escuelas, así comprobamos que el JWT está activo antes de traer la info



module.exports = routes;