const router = require('express').Router();
const recipeRoutes = require('./recipes');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./user')
const dashboardRoutes = require('./dashboard');

router.use('/', homeRoutes);
router.use('/user', userRoutes)
router.use('/recipes', recipeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;