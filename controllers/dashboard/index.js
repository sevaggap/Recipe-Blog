const router = require('express').Router();
const addrecipeRoutes = require('./addrecipeRoutes')

router.use('/new', addrecipeRoutes);

module.exports = router;