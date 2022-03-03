const router = require('express').Router();
const recipeRoutes = require('./recipes');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;