const router = require('express').Router();
const addrecipeRoutes = require('./addrecipeRoutes')
const editrecipeRoutes = require('./editrecipeRoutes')

router.use('/new', addrecipeRoutes);
router.use('/edit', editrecipeRoutes);

module.exports = router;