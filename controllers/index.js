const router = require('express').Router();
const recipeRoutes = require('./recipes');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboard');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/recipes', recipeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;