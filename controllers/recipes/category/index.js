const router = require('express').Router();
const appetizerRoutes = require('./appetizerRoutes');
const entreeRoutes = require('./entreeRoutes');
const dessertRoutes = require('./dessertRoutes');
const snackRoutes = require('./snackRoutes');
const addcommentsRoutes = require('./addcommentRoutes');

router.use('/Appetizer', appetizerRoutes);
router.use('/Entree', entreeRoutes);
router.use('/Dessert', dessertRoutes);
router.use('/Snack', snackRoutes);
router.use('/addcomment', addcommentsRoutes);

module.exports = router;
