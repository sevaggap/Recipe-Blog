const router = require('express').Router();
const categoryRoutes = require('./category')

app.use('/category', categoryRoutes);
module.exports = router;
