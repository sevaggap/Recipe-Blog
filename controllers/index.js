const router = require('express').Router();
const recipeRoutes = require('./recipes');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes')

router.use('/', homeRoutes);
router.use('/user', userRoutes)
router.use('/recipes', recipeRoutes);

module.exports = router;