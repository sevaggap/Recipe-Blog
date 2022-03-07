const router = require('express').Router();
const categoryRoutes = require('./category');
const recipeRoutes = require('./recipeRoutes')
const commentRoutes = require('./addcommentRoutes')

router.use('/category', categoryRoutes);
router.use('/', recipeRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
