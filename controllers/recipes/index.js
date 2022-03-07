const router = require('express').Router();
const categoryRoutes = require('./category');
const recipeRoutes = require('./recipeRoutes')

router.use('/category', categoryRoutes);
router.use('/', recipeRoutes);

module.exports = router;
