const router = require('express').Router();
const userRoutes = require('./userRoutes')
const addrecipeRoutes = require('./addrecipeRoutes')

router.use('/', userRoutes);
router.use('/addrecipe', addrecipeRoutes);

module.exports = router;