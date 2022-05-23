const express = require('express');
const router = express.Router();
const schoolsApi = require('../controllers/schoolsApi');
// const protectedRoutes = require('../middlewares/verifiedToken');

// usar protectedRoutes para la API de escuelas, así comprobamos que el JWT está activo antes de traer la info
router.get('/total', /* protectedRoutes, */ schoolsApi.getTotal);
router.get('/totalcam', /* protectedRoutes, */ schoolsApi.getTotalCam);


module.exports = router;