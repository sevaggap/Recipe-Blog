const router = require('express').Router();
const addrecipeRoutes = require('./addrecipeRoutes');
const editrecipeRoutes = require('./editrecipeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const commentRoutes = require('./addcommentRoutes');

router.use('/', dashboardRoutes);
router.use('/new', addrecipeRoutes);
router.use('/edit', editrecipeRoutes);
router.use('/comments', commentRoutes);

module.exports = router;