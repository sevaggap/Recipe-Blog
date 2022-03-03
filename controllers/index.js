const router = require('express').Router();
const categoryRoutes = require('./category');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/category', categoryRoutes);

module.exports = router;