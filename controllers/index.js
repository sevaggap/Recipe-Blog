const router = require('express').Router();
const recipeRoutes = require('./recipes');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./user')
const dashboardRoutes = require('./dashboard');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/user', userRoutes)
router.use('/recipes', recipeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;