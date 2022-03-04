const router = require('express').Router();
const categoryRoutes = require('./category')

router.use('/category', categoryRoutes);

module.exports = router;
